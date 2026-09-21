import React, { useState } from 'react';
import { PORTFOLIO_DATA, type ReelItem } from '../data/portfolioData';

export const ReelsGrid: React.FC = () => {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [videoErrors, setVideoErrors] = useState<Record<string, boolean>>({});

  const handleVideoError = (id: string) => {
    setVideoErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="reels" className="relative w-full py-20 md:py-36 bg-bg border-b border-line">
      <div className="max-w-container mx-auto px-5 md:px-10">
        
        {/* Section Timeline Marker Header */}
        <div className="relative flex items-center mb-12">
          <div className="font-mono text-xs md:text-sm tracking-[0.06em] uppercase text-text-dim pr-4 bg-bg z-10 flex items-center space-x-2">
            <span className="text-accent font-bold">02.5</span>
            <span>— SHORT-FORM & REELS</span>
          </div>
          <div className="flex-grow h-[1px] bg-line"></div>
        </div>

        {/* 9:16 Responsive Aspect Ratio Grid (4 Cols Desktop, 2 Cols Mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.shortFormReels.map((reel: ReelItem) => {
            const isHovered = activeHoverId === reel.id;
            const hasError = videoErrors[reel.id];

            return (
              <div
                key={reel.id}
                onMouseEnter={() => setActiveHoverId(reel.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                className="relative aspect-[9/16] w-full bg-bg-raised border border-line hover:border-accent transition-all duration-base overflow-hidden group cursor-pointer"
              >
                {/* 9:16 Video Preview or Skeleton Fallback */}
                {reel.videoUrl && !hasError ? (
                  <video
                    src={reel.videoUrl}
                    muted
                    playsInline
                    loop
                    autoPlay={isHovered}
                    onError={() => handleVideoError(reel.id)}
                    className="w-full h-full object-cover transition-transform duration-500 ease-cut group-hover:scale-[1.02]"
                  />
                ) : (
                  /* Fallback Skeleton State for 9:16 Vertical Video */
                  <div className="w-full h-full skeleton-shimmer relative flex flex-col items-center justify-center p-4 text-center bg-bg-raised">
                    <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center mb-3 text-accent font-mono text-[10px]">
                      9:16
                    </div>
                    <div className="font-mono text-[11px] text-text-dim tracking-widest uppercase mb-1">
                      {reel.style}
                    </div>
                    <div className="font-mono text-[9px] text-text-faint uppercase">
                      {reel.runtime} · PREVIEW
                    </div>
                  </div>
                )}

                {/* Scrim Overlay */}
                <div className="absolute inset-0 scrim-bottom opacity-70 pointer-events-none"></div>

                {/* Top-Left Mono Format Badge */}
                <div className="absolute top-3 left-3 font-mono text-[9px] text-text-faint bg-bg-sunken/80 px-2 py-0.5 border border-line">
                  {reel.index}
                </div>

                {/* Bottom-Left Subtle Hover Tag */}
                <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-text-dim bg-bg-sunken/90 p-2 border border-line transition-all duration-fast group-hover:border-accent group-hover:text-text">
                  <div className="flex items-center justify-between">
                    <span className="truncate">{reel.title}</span>
                    <span className="text-accent ml-2 shrink-0">{reel.runtime}</span>
                  </div>
                </div>

                {/* Top Accent Line Draw on Hover */}
                <div
                  className={`absolute top-0 left-0 h-[2px] bg-accent transition-all duration-300 ease-cut ${
                    isHovered ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Section Footer Note */}
        <div className="mt-6 text-right font-mono text-[11px] text-text-faint tracking-widest uppercase">
          [ 9:16 VERTICAL FORMAT — INSTAGRAM REELS & TIKTOK CUTS ]
        </div>

      </div>
    </section>
  );
};
