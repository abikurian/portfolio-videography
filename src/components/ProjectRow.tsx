import React, { useState } from 'react';
import type { Project } from '../data/portfolioData';

interface ProjectRowProps {
  project: Project;
  isEven: boolean;
  onOpenLightbox: (project: Project) => void;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project, isEven, onOpenLightbox }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full py-16 md:py-24 border-b border-line group transition-colors duration-base"
    >
      <div className="max-w-container mx-auto px-5 md:px-10">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          
          {/* Text Details Column */}
          <div className={`lg:col-span-5 flex flex-col space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="flex items-center space-x-3 font-mono text-xs text-text-faint tracking-widest uppercase">
              <span className="text-accent font-bold">{project.index}</span>
              <span>/ {project.year}</span>
              <span className="text-text-dim">· STYLE: {project.style}</span>
            </div>

            {/* Project Title with Right Shift on Hover */}
            <h3
              onClick={() => onOpenLightbox(project)}
              className="font-display text-h1 font-bold text-text tracking-tighter cursor-pointer transition-transform duration-base ease-cut transform group-hover:translate-x-2 group-hover:text-accent"
            >
              {project.title}
            </h3>

            <p className="font-sans text-body text-text-dim max-w-prose leading-relaxed">
              {project.oneLiner}
            </p>

            {/* Mono Metadata Chips: STYLE / TOOLS / RUNTIME */}
            <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-[11px] text-text-faint tracking-wider uppercase">
              <span className="text-text font-medium">STYLE: {project.style}</span>
              <span>·</span>
              <span>TOOLS: {project.tools.join(" / ")}</span>
              <span>·</span>
              <span className="text-accent">RUNTIME: {project.runtime}</span>
            </div>
          </div>

          {/* Video Preview Well Column */}
          <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div
              onClick={() => onOpenLightbox(project)}
              className="relative aspect-[16/9] w-full bg-bg-raised border border-line cursor-pointer overflow-hidden group-hover:border-line-strong transition-all duration-base"
            >
              {/* Media Preview or Skeleton Fallback */}
              {project.previewVideoUrl && !videoError ? (
                <video
                  src={project.previewVideoUrl}
                  muted
                  playsInline
                  loop
                  autoPlay={isHovered}
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover transition-transform duration-500 ease-cut group-hover:scale-[1.02]"
                />
              ) : (
                /* Fallback Skeleton State with Shimmer Animation */
                <div className="w-full h-full skeleton-shimmer relative flex flex-col items-center justify-center p-6 text-center">
                  <div className="font-mono text-xs text-text-dim tracking-widest uppercase mb-2">
                    [ PREVIEW READY — {project.title} ]
                  </div>
                  <div className="font-mono text-[10px] text-text-faint">
                    DROP VIDEO TO public{project.previewVideoUrl || '/videos/filename.mp4'}
                  </div>
                </div>
              )}

              {/* Scrim Overlay */}
              <div className="absolute inset-0 scrim-bottom opacity-60 pointer-events-none"></div>

              {/* Bottom-Right Mono Duration Label */}
              <div className="absolute bottom-3 right-3 font-mono text-[11px] text-text bg-bg-sunken/80 px-2.5 py-1 border border-line">
                {project.runtime}
              </div>

              {/* Hover Minimal Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-fast bg-bg-sunken/50">
                <div className="px-4 py-2 bg-transparent border border-line hover:border-accent text-text hover:text-accent font-mono text-xs uppercase tracking-widest flex items-center space-x-2 transition-colors">
                  <span>PLAY FULL EDIT</span>
                  <span className="text-accent">▸</span>
                </div>
              </div>

              {/* Bottom Accent Line Draw on Hover */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-500 ease-cut ${
                  isHovered ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
