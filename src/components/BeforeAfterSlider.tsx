import React, { useState, useRef } from 'react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative aspect-[16/9] w-full bg-bg-raised border border-line overflow-hidden select-none cursor-ew-resize group"
    >
      {/* GRADED Side (Base Background) */}
      <div className="absolute inset-0 skeleton-shimmer bg-bg-raised flex flex-col items-center justify-center p-4 text-center">
        <div className="font-mono text-xs text-accent tracking-widest uppercase mb-1">
          10-BIT GRADED (REC.709)
        </div>
        <div className="font-mono text-[10px] text-text-faint">
          FILM PRINT LOOK · WARM SHADOWS
        </div>
      </div>

      {/* RAW S-Log Side (Clipped Overlay) */}
      <div
        className="absolute inset-0 bg-bg-sunken border-r border-accent flex flex-col items-center justify-center p-4 text-center overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="whitespace-nowrap font-mono text-xs text-text-dim tracking-widest uppercase mb-1">
          UNGRADED (SONY S-LOG3 RAW)
        </div>
        <div className="whitespace-nowrap font-mono text-[10px] text-text-faint">
          FLAT EXPOSURE · HIGH DYNAMIC RANGE
        </div>
      </div>

      {/* 1px Accent Drag Line with Handle */}
      <div
        className="absolute top-0 bottom-0 w-[1px] bg-accent z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-bg-sunken border border-accent text-accent font-mono text-[9px] flex items-center justify-center shadow-lg">
          ◄►
        </div>
      </div>

      {/* Bottom Scrim Caption */}
      <div className="absolute bottom-2 left-2 z-30 font-mono text-[10px] text-text-dim bg-bg-sunken/90 px-2 py-0.5 border border-line">
        A001_C014 — DRAG TO COMPARE RAW VS GRADED
      </div>
    </div>
  );
};
