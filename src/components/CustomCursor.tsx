import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MousePointer2, Sparkles, Target } from 'lucide-react';

export type CursorMode = 'reticle' | 'spotlight' | 'off';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const CustomCursor: React.FC = () => {
  const [cursorMode, setCursorMode] = useState<CursorMode>(() => {
    if (typeof window === 'undefined') return 'reticle';
    const saved = localStorage.getItem('devspark_cursor_mode');
    return (saved as CursorMode) || 'reticle';
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);
  const [isTextTarget, setIsTextTarget] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // References for zero-react-overhead 60-120fps direct DOM manipulation
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const pos = useRef({
    targetX: -100,
    targetY: -100,
    ringX: -100,
    ringY: -100,
    spotlightX: -100,
    spotlightY: -100,
    isHoveringInteractive: false,
    hoverText: '',
  });

  const rafId = useRef<number | null>(null);

  // Detect touch devices
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkTouch = () => {
      const isTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(isTouch);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  // Sync cursor mode with localStorage and document body classes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('devspark_cursor_mode', cursorMode);

    if (cursorMode === 'reticle' && !isTouchDevice) {
      document.body.classList.add('custom-cursor-active');
    } else {
      document.body.classList.remove('custom-cursor-active');
    }

    return () => {
      document.body.classList.remove('custom-cursor-active');
    };
  }, [cursorMode, isTouchDevice]);

  // Main high-performance animation loop
  useEffect(() => {
    if (cursorMode === 'off' || isTouchDevice) return;

    let running = true;

    const animate = () => {
      if (!running) return;

      const p = pos.current;

      // 1. Instantaneous dot tracking
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${p.targetX}px, ${p.targetY}px, 0) translate(-50%, -50%)`;
      }

      // 2. Smooth Lerp interpolation for outer ring
      const lerpFactor = 0.24;
      p.ringX += (p.targetX - p.ringX) * lerpFactor;
      p.ringY += (p.targetY - p.ringY) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${p.ringX}px, ${p.ringY}px, 0) translate(-50%, -50%)`;
      }

      // 3. Smooth lazy lerp for ambient spotlight
      p.spotlightX += (p.targetX - p.spotlightX) * 0.12;
      p.spotlightY += (p.targetY - p.spotlightY) * 0.12;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${p.spotlightX}px, ${p.spotlightY}px, 0) translate(-50%, -50%)`;
      }

      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${p.ringX + 16}px, ${p.ringY + 16}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [cursorMode, isTouchDevice]);

  // Global mouse & pointer tracking
  useEffect(() => {
    if (cursorMode === 'off' || isTouchDevice) return;

    const handlePointerMove = (e: PointerEvent) => {
      pos.current.targetX = e.clientX;
      pos.current.targetY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isText =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;
      setIsTextTarget(isText);

      const interactiveEl = target.closest(
        'button, a, [role="button"], .cursor-pointer, input, textarea, select, [data-cursor-interactive]'
      );

      const customLabel = target.closest('[data-cursor-label]')?.getAttribute('data-cursor-label');

      if (interactiveEl) {
        setIsHovered(true);
        setHoverLabel(customLabel || null);
      } else {
        setIsHovered(false);
        setHoverLabel(null);
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      setIsClicking(true);
      // Spawn micro click ripple
      const newRipple: Ripple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: isHovered ? 64 : 44,
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 550);
    };

    const handlePointerUp = () => {
      setIsClicking(false);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    const handlePointerEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('mouseleave', handlePointerLeave);
    document.addEventListener('mouseenter', handlePointerEnter);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('mouseleave', handlePointerLeave);
      document.removeEventListener('mouseenter', handlePointerEnter);
    };
  }, [cursorMode, isTouchDevice, isHovered, isVisible]);

  // If touch screen or cursor mode is off, do not render tracking DOM
  if (isTouchDevice || cursorMode === 'off') {
    return null;
  }

  return (
    <>
      {/* 1. AMBIENT FLASHLIGHT SPOTLIGHT LAYER (Interactive background lighting) */}
      <div
        ref={spotlightRef}
        className={`fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-10 rounded-full transition-opacity duration-500 ease-out will-change-transform ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.045) 0%, rgba(255, 255, 255, 0.015) 35%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* 2. CUSTOM CLICK RIPPLES */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-white/60 animate-ping will-change-transform"
          style={{
            transform: `translate3d(${ripple.x}px, ${ripple.y}px, 0) translate(-50%, -50%)`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            animationDuration: '500ms',
          }}
          aria-hidden="true"
        />
      ))}

      {/* 3. SMOOTH TRAILING FOLLOWER RING */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center transition-[width,height,background-color,border-color,opacity] duration-200 ease-out will-change-transform ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isTextTarget
            ? 'w-6 h-8 border-2 border-sky-400/80 bg-sky-400/5 rounded-sm'
            : isHovered
            ? 'w-14 h-14 border border-white/80 bg-white/10 backdrop-blur-[2px] shadow-[0_0_20px_rgba(255,255,255,0.25)]'
            : 'w-8 h-8 border border-white/35 bg-transparent'
        } ${isClicking ? 'scale-75 border-white' : 'scale-100'}`}
        aria-hidden="true"
      >
        {/* Hover Crosshair Marks */}
        {isHovered && !isTextTarget && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="absolute -top-1 w-[2px] h-1.5 bg-white/80" />
            <span className="absolute -bottom-1 w-[2px] h-1.5 bg-white/80" />
            <span className="absolute -left-1 h-[2px] w-1.5 bg-white/80" />
            <span className="absolute -right-1 h-[2px] w-1.5 bg-white/80" />
          </div>
        )}
      </div>

      {/* 4. INSTANTANEOUS PRECISION CENTER DOT */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-[width,height,opacity,background-color] duration-150 ease-out will-change-transform ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isTextTarget
            ? 'w-[2px] h-4 bg-sky-400'
            : isClicking
            ? 'w-2.5 h-2.5 bg-white shadow-[0_0_12px_#ffffff]'
            : isHovered
            ? 'w-2 h-2 bg-white shadow-[0_0_10px_#ffffff]'
            : 'w-1.5 h-1.5 bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]'
        }`}
        aria-hidden="true"
      />

      {/* 5. DYNAMIC HOVER BADGE/LABEL (when provided via data-cursor-label) */}
      {hoverLabel && isVisible && (
        <div
          ref={labelRef}
          className="fixed top-0 left-0 pointer-events-none z-50 px-2 py-0.5 rounded bg-zinc-900/90 border border-white/20 text-white font-mono text-[10px] tracking-widest uppercase backdrop-blur-md shadow-xl transition-opacity duration-150"
          aria-hidden="true"
        >
          {hoverLabel}
        </div>
      )}
    </>
  );
};

// Compact mode switcher widget for users who want to customize their cursor experience
export const CursorToggleWidget: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [cursorMode, setCursorMode] = useState<CursorMode>(() => {
    if (typeof window === 'undefined') return 'reticle';
    return (localStorage.getItem('devspark_cursor_mode') as CursorMode) || 'reticle';
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (mode: CursorMode) => {
    setCursorMode(mode);
    localStorage.setItem('devspark_cursor_mode', mode);
    // Dispatch storage event so CustomCursor updates immediately
    window.dispatchEvent(new Event('cursor-mode-changed'));
  };

  useEffect(() => {
    const onModeChange = () => {
      const mode = (localStorage.getItem('devspark_cursor_mode') as CursorMode) || 'reticle';
      setCursorMode(mode);
    };
    window.addEventListener('cursor-mode-changed', onModeChange);
    return () => window.removeEventListener('cursor-mode-changed', onModeChange);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 p-2 rounded-xl bg-zinc-950/95 border border-white/20 backdrop-blur-xl shadow-2xl w-48 text-[11px] font-mono text-zinc-300 z-50 flex flex-col gap-1">
          <div className="text-[9px] uppercase tracking-wider text-zinc-400 px-2 py-1 font-semibold">
            Cursor Tracking
          </div>
          <button
            onClick={() => {
              handleSelect('reticle');
              setIsOpen(false);
            }}
            className={`w-full text-left px-2.5 py-1.5 rounded flex items-center justify-between transition-colors cursor-pointer ${
              cursorMode === 'reticle'
                ? 'bg-white text-black font-semibold'
                : 'hover:bg-white/10 text-zinc-200'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Target size={12} />
              Reticle + Halo
            </span>
            {cursorMode === 'reticle' && <span className="text-[9px]">●</span>}
          </button>
          <button
            onClick={() => {
              handleSelect('spotlight');
              setIsOpen(false);
            }}
            className={`w-full text-left px-2.5 py-1.5 rounded flex items-center justify-between transition-colors cursor-pointer ${
              cursorMode === 'spotlight'
                ? 'bg-white text-black font-semibold'
                : 'hover:bg-white/10 text-zinc-200'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Sparkles size={12} />
              Spotlight Only
            </span>
            {cursorMode === 'spotlight' && <span className="text-[9px]">●</span>}
          </button>
          <button
            onClick={() => {
              handleSelect('off');
              setIsOpen(false);
            }}
            className={`w-full text-left px-2.5 py-1.5 rounded flex items-center justify-between transition-colors cursor-pointer ${
              cursorMode === 'off'
                ? 'bg-white text-black font-semibold'
                : 'hover:bg-white/10 text-zinc-200'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <MousePointer2 size={12} />
              System Default
            </span>
            {cursorMode === 'off' && <span className="text-[9px]">●</span>}
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-2.5 py-1 rounded-full bg-zinc-950/70 hover:bg-zinc-900 border border-white/15 text-zinc-400 hover:text-white backdrop-blur-md text-[10px] font-mono flex items-center gap-1.5 cursor-pointer transition-all shadow-md"
        title="Custom Cursor Tracking"
      >
        <Target size={11} className={cursorMode !== 'off' ? 'text-sky-400' : 'text-zinc-500'} />
        <span>Cursor: {cursorMode === 'reticle' ? 'Reticle' : cursorMode === 'spotlight' ? 'Spotlight' : 'System'}</span>
      </button>
    </div>
  );
};
