import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Upload } from 'lucide-react';

interface BackgroundVideoProps {
  className?: string;
}

export const FAST_TRACK_VIDEO_URL = '/background_track.mp4';
export const CLOUDFRONT_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4';
export const LOCAL_FALLBACK_URL = '/background.mp4';

const DB_NAME = 'DevSparkMediaDB';
const STORE_NAME = 'custom_videos_v2';

// Helper to save custom video blob to IndexedDB
async function saveVideoToIDB(file: File): Promise<void> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 2);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => {
      const db = request.result;
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put(file, 'active_background_video');
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    };
    request.onerror = () => reject(request.error);
  });
}

// Helper to load custom video blob from IndexedDB
async function loadVideoFromIDB(): Promise<Blob | null> {
  return new Promise((resolve) => {
    try {
      const request = indexedDB.open(DB_NAME, 2);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          resolve(null);
          return;
        }
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const getReq = store.get('active_background_video');
        getReq.onsuccess = () => {
          resolve(getReq.result || null);
        };
        getReq.onerror = () => resolve(null);
      };
      request.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

// Helper to clear custom video
async function clearVideoFromIDB(): Promise<void> {
  return new Promise((resolve) => {
    try {
      const request = indexedDB.open(DB_NAME, 2);
      request.onsuccess = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          resolve();
          return;
        }
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.delete('active_background_video');
        tx.oncomplete = () => resolve();
      };
      request.onerror = () => resolve();
    } catch {
      resolve();
    }
  });
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [customVideoSrc, setCustomVideoSrc] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Character Cursor Tracking States
  const [isCursorFollowing, setIsCursorFollowing] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('devspark_character_follow');
    return saved !== 'false';
  });
  const [trackingSensitivity] = useState<number>(1.0);
  const [characterGaze, setCharacterGaze] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  // Physics animation loop references
  const animRef = useRef({
    targetTime: 2.0,
    currentTime: 2.0,
    targetTiltX: 0,
    currentTiltX: 0,
    targetTiltY: 0,
    currentTiltY: 0,
    targetPanX: 0,
    currentPanX: 0,
    targetPanY: 0,
    currentPanY: 0,
    lastPointerMoveTime: Date.now(),
    isIdle: false,
    duration: 4.04,
  });

  const rafId = useRef<number | null>(null);

  // Sync cursor following preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('devspark_character_follow', String(isCursorFollowing));
  }, [isCursorFollowing]);

  // Load custom video if user previously uploaded one in this v2 store
  useEffect(() => {
    let objectUrl: string | null = null;
    loadVideoFromIDB().then((blob) => {
      if (blob) {
        objectUrl = URL.createObjectURL(blob);
        setCustomVideoSrc(objectUrl);
      }
    });

    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  // Standard continuous autoplay when cursor tracking is disabled
  const startAutoplay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {})
        .catch(() => {
          const onUserGesture = () => {
            if (videoRef.current) {
              videoRef.current
                .play()
                .catch(() => {});
            }
            window.removeEventListener('click', onUserGesture);
            window.removeEventListener('touchstart', onUserGesture);
          };
          window.addEventListener('click', onUserGesture, { once: true });
          window.addEventListener('touchstart', onUserGesture, { once: true });
        });
    }
  }, []);

  // When cursor following is active, video is controlled frame-by-frame via requestAnimationFrame
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isCursorFollowing) {
      video.pause();
    } else {
      startAutoplay();
    }
  }, [isCursorFollowing, startAutoplay]);

  // High-performance RequestAnimationFrame loop for cursor direction tracking
  useEffect(() => {
    if (!isCursorFollowing) return;

    let running = true;

    const loop = () => {
      if (!running) return;

      const video = videoRef.current;
      const anim = animRef.current;

      // Smooth physics lerp with dead-zone snapping so the character remains 100% stable when still
      const dTime = anim.targetTime - anim.currentTime;
      if (Math.abs(dTime) < 0.003) {
        anim.currentTime = anim.targetTime;
      } else {
        anim.currentTime += dTime * 0.22;
      }

      const dTiltX = anim.targetTiltX - anim.currentTiltX;
      if (Math.abs(dTiltX) < 0.01) {
        anim.currentTiltX = anim.targetTiltX;
      } else {
        anim.currentTiltX += dTiltX * 0.18;
      }

      const dTiltY = anim.targetTiltY - anim.currentTiltY;
      if (Math.abs(dTiltY) < 0.01) {
        anim.currentTiltY = anim.targetTiltY;
      } else {
        anim.currentTiltY += dTiltY * 0.18;
      }

      const dPanX = anim.targetPanX - anim.currentPanX;
      if (Math.abs(dPanX) < 0.02) {
        anim.currentPanX = anim.targetPanX;
      } else {
        anim.currentPanX += dPanX * 0.18;
      }

      const dPanY = anim.targetPanY - anim.currentPanY;
      if (Math.abs(dPanY) < 0.02) {
        anim.currentPanY = anim.targetPanY;
      } else {
        anim.currentPanY += dPanY * 0.18;
      }

      if (video) {
        // Only seek video frame when currentTime differs noticeably, preserving absolute stillness when stopped
        const timeDelta = Math.abs(video.currentTime - anim.currentTime);
        if (timeDelta > 0.025) {
          const maxDur = anim.duration || video.duration || 4.04;
          const clampedTime = Math.max(0.04, Math.min(maxDur - 0.04, anim.currentTime));

          // Use fastSeek if supported by browser engine for instant zero-lag scrub
          if ('fastSeek' in video && typeof (video as any).fastSeek === 'function') {
            (video as any).fastSeek(clampedTime);
          } else {
            video.currentTime = clampedTime;
          }
        }

        // Apply dynamic 3D perspective tilt, rotation and parallax translation towards cursor direction
        video.style.transform = `perspective(1000px) rotateX(${anim.currentTiltX.toFixed(
          2
        )}deg) rotateY(${anim.currentTiltY.toFixed(2)}deg) translate3d(${anim.currentPanX.toFixed(
          1
        )}px, ${anim.currentPanY.toFixed(1)}px, 0) scale(1.05)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      running = false;
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isCursorFollowing]);

  // Pointer move and leave handlers for tracking cursor direction and staying stable
  useEffect(() => {
    if (!isCursorFollowing) return;

    const handlePointerMove = (e: PointerEvent) => {
      const anim = animRef.current;
      anim.lastPointerMoveTime = Date.now();

      const winW = window.innerWidth || 1920;
      const winH = window.innerHeight || 1080;

      // Normalized coordinates: normX in [0, 1], normY in [-0.5, 0.5]
      const normX = Math.max(0, Math.min(1, e.clientX / winW));
      const normY = Math.max(-0.5, Math.min(0.5, e.clientY / winH - 0.5));
      const centeredX = normX - 0.5; // [-0.5, 0.5]

      setCharacterGaze({
        x: Math.round(normX * 100),
        y: Math.round((normY + 0.5) * 100),
      });

      const dur = anim.duration || 4.04;

      // Character body and head turns dynamically in direction of cursor
      anim.targetTime = normX * dur;

      // 3D Perspective Tilt & Parallax response in direction of cursor
      const sens = trackingSensitivity;
      anim.targetTiltX = -normY * 12 * sens; // cursor up -> character tilts slightly up
      anim.targetTiltY = centeredX * 14 * sens; // cursor right -> character rotates right
      anim.targetPanX = centeredX * 22 * sens; // moves horizontally in cursor direction
      anim.targetPanY = normY * 18 * sens; // moves vertically in cursor direction
    };

    // When pointer leaves the window, smoothly return to stable center pose
    const handlePointerLeave = () => {
      const anim = animRef.current;
      const dur = anim.duration || 4.04;
      anim.targetTime = dur * 0.5;
      anim.targetTiltX = 0;
      anim.targetTiltY = 0;
      anim.targetPanX = 0;
      anim.targetPanY = 0;
      setCharacterGaze({ x: 50, y: 50 });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, [isCursorFollowing, trackingSensitivity]);

  // Seamless zero-freeze loop when in cinema / non-tracking mode
  const handleTimeUpdate = () => {
    if (isCursorFollowing) return;
    const video = videoRef.current;
    if (video && video.duration > 0) {
      if (video.currentTime >= video.duration - 0.08) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    }
  };

  // Custom file upload handling
  const handleFileUpload = async (file: File) => {
    if (!file || !file.type.startsWith('video/')) return;

    try {
      await saveVideoToIDB(file);
      const url = URL.createObjectURL(file);
      setCustomVideoSrc(url);
      setTimeout(() => {
        if (!isCursorFollowing) startAutoplay();
      }, 100);
    } catch (err) {
      console.error('Failed to save video to storage', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  // Drag and drop listener
  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      if (e.dataTransfer?.types.includes('Files')) {
        e.preventDefault();
        setIsDragOver(true);
      }
    };
    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
    };
    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const file = e.dataTransfer?.files?.[0];
      if (file && file.type.startsWith('video/')) {
        handleFileUpload(file);
      }
    };

    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('drop', handleDrop);

    return () => {
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('drop', handleDrop);
    };
  }, []);

  return (
    <div
      id="background-video-container"
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none bg-black ${className}`}
      aria-hidden="true"
    >
      {/* HTML5 Video Element with 3D Depth & Cursor Scrubbing */}
      <video
        ref={videoRef}
        id="background-video-element"
        autoPlay={!isCursorFollowing}
        loop={!isCursorFollowing}
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={(e) => {
          const dur = (e.target as HTMLVideoElement).duration;
          if (dur && !isNaN(dur)) {
            animRef.current.duration = dur;
          }
        }}
        onLoadedData={() => {
          setIsLoaded(true);
          const dur = videoRef.current?.duration;
          if (dur && !isNaN(dur)) {
            animRef.current.duration = dur;
            if (isCursorFollowing && videoRef.current) {
              videoRef.current.currentTime = dur * 0.5;
            }
          }
          if (!isCursorFollowing) {
            startAutoplay();
          }
        }}
        className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-1000 will-change-transform ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transformOrigin: 'center center',
        }}
      >
        {customVideoSrc ? (
          <source src={customVideoSrc} type="video/mp4" />
        ) : (
          <>
            <source src={FAST_TRACK_VIDEO_URL} type="video/mp4" />
            <source src={CLOUDFRONT_VIDEO_URL} type="video/mp4" />
            <source src={LOCAL_FALLBACK_URL} type="video/mp4" />
          </>
        )}
      </video>

      {/* Optical Contrast Overlays for Text Legibility */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />

      {/* Drag & Drop Visual Overlay */}
      {isDragOver && (
        <div className="absolute inset-0 z-40 bg-black/90 border-2 border-dashed border-sky-400/80 flex flex-col items-center justify-center pointer-events-none backdrop-blur-md">
          <Upload className="w-16 h-16 text-sky-400 animate-bounce mb-3" />
          <p className="text-white text-xl font-semibold">Drop your video file here</p>
          <p className="text-zinc-400 text-xs font-mono mt-1.5">Applies video directly to the background</p>
        </div>
      )}

      {/* Hidden File Input for Custom Uploads */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/mp4,video/webm,video/quicktime,video/*"
        className="hidden"
        onChange={handleInputChange}
      />
    </div>
  );
};
