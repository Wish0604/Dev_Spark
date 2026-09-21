import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-start w-full group bg-transparent",
        containerClassName
      )}
    >
      <div className={cn("relative z-20 w-full", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
  loop = true,
}: {
  children: React.ReactNode;
  className?: string;
  loop?: boolean;
}) => {
  return (
    <span className="relative inline-block align-baseline whitespace-nowrap">
      {/* Base Layer: completely transparent, seamless with background, NO container/borders */}
      <span
        className={cn(
          "inline-block px-2 sm:px-3 py-0.5 text-white font-bebas select-text",
          className
        )}
      >
        {children}
      </span>

      {/* Sweeping Highlight Layer: solid white background with crisp pitch-black text */}
      <motion.span
        aria-hidden="true"
        initial={{
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        }}
        animate={{
          clipPath: loop
            ? [
                "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
              ]
            : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
        transition={{
          duration: loop ? 3.2 : 1.0,
          repeat: loop ? Infinity : 0,
          repeatDelay: loop ? 1.0 : 0,
          ease: "easeInOut",
          times: loop ? [0, 0.35, 0.7, 1] : undefined,
        }}
        className={cn(
          "absolute inset-0 inline-block px-2 sm:px-3 py-0.5 rounded-xl bg-white text-black font-bebas select-none pointer-events-none shadow-[0_4px_30px_rgba(255,255,255,0.4)]",
          className
        )}
      >
        {children}
      </motion.span>
    </span>
  );
};
