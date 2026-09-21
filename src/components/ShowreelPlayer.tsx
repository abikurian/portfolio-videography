import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ShowreelPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(90); // 1:30 default
  const [isMuted, setIsMuted] = useState(false);
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);
  const [videoError, setVideoError] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (videoRef.current && !videoError) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    } else {
      // Toggle state for skeleton demo
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const targetSeconds = pos * duration;
    setCurrentTime(targetSeconds);
    if (videoRef.current) {
      videoRef.current.currentTime = targetSeconds;
    }
  };

  // Keyboard NLE Controls Listener (J/K/L, Space, Left/Right, F, M)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'k' || e.key === 'K') {
        e.preventDefault();
        setIsPlaying(false);
        if (videoRef.current) videoRef.current.pause();
      } else if (e.key === 'j' || e.key === 'J') {
        e.preventDefault();
        setCurrentTime((prev) => Math.max(0, prev - 5));
        if (videoRef.current) videoRef.current.currentTime -= 5;
      } else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        setCurrentTime((prev) => Math.min(duration, prev + 5));
        if (videoRef.current) videoRef.current.currentTime += 5;
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentTime((prev) => Math.max(0, prev - 5));
        if (videoRef.current) videoRef.current.currentTime -= 5;
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentTime((prev) => Math.min(duration, prev + 5));
        if (videoRef.current) videoRef.current.currentTime += 5;
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        toggleMute();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [duration, isPlaying, isMuted, videoError]);

  // Demo play timer increment for skeleton mode when video error occurs
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && (videoError || !videoRef.current)) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration, videoError]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = (currentTime / duration) * 100;

  return (
    <section id="reel" className="relative w-full py-20 md:py-36 bg-bg border-b border-line">
      <div className="max-w-container mx-auto px-5 md:px-10">
        
        {/* Section Header */}
        <div className="relative flex items-center mb-12">
          <div className="font-mono text-xs md:text-sm tracking-[0.06em] uppercase text-text-dim pr-4 bg-bg z-10 flex items-center space-x-2">
            <span className="text-accent font-bold">03</span>
            <span>— SHOWREEL</span>
          </div>
          <div className="flex-grow h-[1px] bg-line"></div>
        </div>

        {/* NLE Custom Player Frame */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/9] bg-bg-raised border border-line overflow-hidden group shadow-2xl"
        >
          {/* Real Video or Fallback Skeleton */}
          <div className="w-full h-full skeleton-shimmer relative flex items-center justify-center">
            {PORTFOLIO_DATA.showreel.showreelVideoUrl && !videoError ? (
              <video
                ref={videoRef}
                src={PORTFOLIO_DATA.showreel.showreelVideoUrl}
                playsInline
                muted={isMuted}
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover"
                onTimeUpdate={() => {
                  if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
                }}
                onLoadedMetadata={() => {
                  if (videoRef.current) setDuration(videoRef.current.duration);
                }}
              />
            ) : (
              /* Fallback NLE Player Deck UI */
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-bg-raised/90">
                <div className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
                  [ 2025 EDITING SHOWREEL — KOCHI, KERALA ]
                </div>
                <div className="font-display text-2xl font-bold text-text mb-4">
                  10-BIT S-LOG CUTS & BEAT SYNCS
                </div>
                <button
                  onClick={togglePlay}
                  className="px-6 py-3 bg-transparent border border-line text-text font-mono text-xs uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                >
                  {isPlaying ? 'PAUSE EDIT ❚❚' : 'PLAY SHOWREEL ▸'}
                </button>
              </div>
            )}

            {/* Corner Square NLE Play Glyph */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="absolute top-4 left-4 w-10 h-10 bg-bg-sunken/80 border border-line text-text hover:border-accent flex items-center justify-center font-mono text-xs transition-colors z-20"
            >
              {isPlaying ? '❚❚' : '▸'}
            </button>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-bg-sunken/95 border-t border-line p-3 flex flex-col space-y-2 z-20">
            
            {/* Scrubber Bar with Chapter Markers */}
            <div
              onClick={handleSeek}
              className="relative w-full h-2 hover:h-3 bg-line cursor-pointer transition-all duration-fast flex items-center"
            >
              {/* Played Fill */}
              <div
                className="h-full bg-accent transition-all duration-fast"
                style={{ width: `${progressPercent}%` }}
              />

              {/* Chapter Markers */}
              {PORTFOLIO_DATA.showreel.chapters.map((chapter) => {
                const chapterPercent = (chapter.seconds / duration) * 100;
                return (
                  <div
                    key={chapter.timecode}
                    onMouseEnter={() => setHoveredChapter(chapter.title)}
                    onMouseLeave={() => setHoveredChapter(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentTime(chapter.seconds);
                      if (videoRef.current) videoRef.current.currentTime = chapter.seconds;
                    }}
                    className="absolute top-0 bottom-0 w-[2px] bg-line-strong hover:bg-accent z-10"
                    style={{ left: `${chapterPercent}%` }}
                  >
                    {/* Chapter Tooltip */}
                    {hoveredChapter === chapter.title && (
                      <div className="absolute bottom-5 -translate-x-1/2 left-1/2 whitespace-nowrap bg-bg-sunken px-2 py-1 text-[10px] font-mono text-text border border-line z-20">
                        {chapter.title} ({chapter.timecode})
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between font-mono text-[11px] text-text-dim pt-1">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="hover:text-accent uppercase transition-colors"
                >
                  {isPlaying ? 'PAUSE' : 'PLAY'}
                </button>
                <span>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
                <span className="hidden sm:inline-block text-text-faint">
                  [ J/K/L NAVIGATION ENABLED ]
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleMute}
                  className="hover:text-accent uppercase transition-colors"
                >
                  {isMuted ? 'UNMUTE' : 'MUTE'}
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="hover:text-accent uppercase transition-colors"
                >
                  FULLSCREEN [F]
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
