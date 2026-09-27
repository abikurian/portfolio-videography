import React, { useEffect, useRef, useState } from 'react';
import type { Project } from '../data/portfolioData';

interface LightboxModalProps {
  project: Project | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string>('/videos/fast-cut-full.mp4');

  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      setVideoSrc(project.fullVideoUrl || '/videos/fast-cut-full.mp4');

      return () => {
        document.body.style.overflow = originalOverflow || '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [project, onClose]);

  if (!project) return null;

  const handleVideoError = () => {
    if (videoSrc !== '/videos/fast-cut-full.mp4') {
      setVideoSrc('/videos/fast-cut-full.mp4');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={modalRef}
      onClick={(e) => {
        if (e.target === modalRef.current) {
          onClose();
        }
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
    >
      {/* Top Header Bar & Close Button */}
      <div className="w-full max-w-[min(92vw,1400px)] flex items-center justify-between pb-4">
        <div className="font-mono text-xs text-text-dim tracking-widest uppercase flex items-center space-x-2">
          <span className="text-accent font-bold">[{project.index}]</span>
          <span>LIGHTBOX PLAYER — {project.title}</span>
        </div>

        {/* Top Right Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox Modal"
          className="font-mono text-xs text-text hover:text-accent tracking-widest uppercase px-3 py-1.5 border border-line hover:border-accent bg-bg-sunken/80 transition-colors duration-fast flex items-center space-x-2 cursor-pointer"
        >
          <span>CLOSE</span>
          <span className="text-accent font-bold">✕</span>
        </button>
      </div>

      {/* 16:9 Video Player Container */}
      <div className="relative w-full max-w-[min(92vw,1400px)] aspect-[16/9] bg-black border border-line shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] overflow-hidden rounded-sm flex items-center justify-center">
        <video
          ref={videoRef}
          src={videoSrc}
          controls
          autoPlay
          playsInline
          onError={handleVideoError}
          className="w-full h-full object-contain bg-black"
        />
      </div>

      {/* Caption & Metadata Beneath */}
      <div className="w-full max-w-[min(92vw,1400px)] pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-line mt-4">
        <div>
          <h3 id="modal-title" className="font-display text-h3 text-text font-bold tracking-tight">
            {project.title}
          </h3>
          <p className="font-sans text-xs text-text-dim mt-1 max-w-xl">
            {project.oneLiner}
          </p>
        </div>

        <div className="font-mono text-[11px] text-text-faint tracking-wider uppercase flex flex-wrap items-center gap-3">
          <span>ROLE: <span className="text-text-dim">{project.role}</span></span>
          <span>·</span>
          <span>TOOLS: <span className="text-text-dim">{project.tools.join(", ")}</span></span>
          <span>·</span>
          <span>RUNTIME: <span className="text-accent">{project.runtime}</span></span>
        </div>
      </div>
    </div>
  );
};

