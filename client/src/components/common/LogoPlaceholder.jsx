import React from 'react';

/**
 * Clearly Marked [LOGO PLACEHOLDER] Component
 * Designed for easy future replacement with official organizational vector logo/emblem.
 */
export const LogoPlaceholder = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-[10px]",
    md: "w-10 h-10 text-[11px]",
    lg: "w-14 h-14 text-[13px]"
  };

  return (
    <div
      className={`inline-flex flex-col items-center justify-center rounded-full bg-[#1C2326] border-2 border-[#BE9A5B] text-[#FAF7EF] font-bold font-mono shadow-md shrink-0 transition-transform hover:scale-105 ${sizeClasses[size]} ${className}`}
      title="[LOGO PLACEHOLDER] — Replace with official emblem image later"
    >
      <span className="text-[#BE9A5B] font-bold leading-none tracking-tighter">JBJWS</span>
    </div>
  );
};
