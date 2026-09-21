import React, { useEffect, useRef } from 'react';
import type { Project } from '../data/portfolioData';

interface LightboxModalProps {
  project: Project | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={modalRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 md:p-8 bg-bg-sunken/96 backdrop-blur-md animate-fadeIn"
    >
      {/* Top Header Bar with Close Label */}
      <div className="w-full max-w-[min(92vw,1400px)] flex items-center justify-between pb-4">
        <div className="font-mono text-xs text-text-faint tracking-widest uppercase">
          [ LIGHTBOX PLAYER — {project.index} ]
        </div>

        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="font-mono text-xs text-text-dim hover:text-accent tracking-widest uppercase px-3 py-1 border border-line hover:border-accent transition-colors duration-fast"
        >
          CLOSE ✕
        </button>
      </div>

      {/* 16:9 Video Player Container */}
      <div className="relative w-full max-w-[min(92vw,1400px)] aspect-[16/9] bg-bg-raised border border-line shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] overflow-hidden">
        {project.fullVideoUrl && project.fullVideoUrl.includes('youtube') ? (
          <iframe
            src={`${project.fullVideoUrl}?autoplay=1&rel=0`}
            title={project.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          /* Placeholder Fallback player state if no external URL */
          <div className="w-full h-full skeleton-shimmer flex flex-col items-center justify-center p-8 text-center bg-bg-raised">
            <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center mb-4 text-accent text-xl">
              ▸
            </div>
            <div className="font-display text-2xl font-bold text-text mb-2">
              {project.title}
            </div>
            <div className="font-mono text-xs text-text-dim tracking-wider uppercase mb-1">
              {project.clientOrType} · {project.runtime}
            </div>
            <div className="font-mono text-[11px] text-text-faint max-w-md">
              Raw footage files pending upload to assets folder. Place `.mp4` files into `src/assets` to replace this skeleton player.
            </div>
          </div>
        )}
      </div>

      {/* Caption & Metadata Beneath */}
      <div className="w-full max-w-[min(92vw,1400px)] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-line mt-4">
        <div>
          <h3 id="modal-title" className="font-display text-h3 text-text font-bold">
            {project.title}
          </h3>
          <p className="font-sans text-xs text-text-dim mt-1 max-w-xl">
            {project.oneLiner}
          </p>
        </div>

        <div className="font-mono text-[11px] text-text-faint tracking-wider uppercase flex flex-wrap gap-3">
          <span>ROLE: <span className="text-text-dim">{project.role}</span></span>
          <span>·</span>
          <span>TOOLS: <span className="text-text-dim">{project.tools.join(", ")}</span></span>
          <span>·</span>
          <span>YEAR: <span className="text-accent">{project.year}</span></span>
        </div>
      </div>
    </div>
  );
};
