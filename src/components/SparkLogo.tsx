import React from 'react';
import uploadedLogo from '../assets/images/ChatGPT_Image_Sep_19__2026__01_16_35_AM-removebg-preview.png';

export interface SparkLogoProps {
  className?: string;
  size?: number | string;
  glow?: boolean;
  showWordmark?: boolean;
  color?: string;
  variant?: 'wireframe' | 'solid';
}

export const SparkLogo: React.FC<SparkLogoProps> = ({
  className = '',
  size = 36,
  glow = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {glow && (
        <div
          className="absolute inset-0 rounded-full blur-md opacity-30 bg-white/20 pointer-events-none"
          style={{ transform: 'scale(0.85)' }}
        />
      )}
      <img
        src={uploadedLogo}
        alt="Dev_Spark Logo"
        className="w-full h-full object-contain pointer-events-none select-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const DevSparkFullLogo: React.FC<{
  className?: string;
  size?: number | string;
  glow?: boolean;
  variant?: 'wireframe' | 'solid';
}> = ({ className = '', size = 220, glow = true }) => {
  return (
    <SparkLogo
      className={className}
      size={size}
      glow={glow}
      showWordmark={true}
    />
  );
};
