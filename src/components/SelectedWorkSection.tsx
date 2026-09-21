import React, { useState } from 'react';
import { PORTFOLIO_DATA, type Project } from '../data/portfolioData';
import { ProjectRow } from './ProjectRow';
import { LightboxModal } from './LightboxModal';

export const SelectedWorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative w-full py-20 md:py-36 bg-bg border-b border-line">
      {/* Section Timeline Marker Header */}
      <div className="max-w-container mx-auto px-5 md:px-10 mb-12 md:mb-16">
        <div className="relative flex items-center">
          <div className="font-mono text-xs md:text-sm tracking-[0.06em] uppercase text-text-dim pr-4 bg-bg z-10 flex items-center space-x-2">
            <span className="text-accent font-bold">02</span>
            <span>— SELECTED WORK</span>
          </div>
          <div className="flex-grow h-[1px] bg-line"></div>
        </div>
      </div>

      {/* Project Rows */}
      <div className="flex flex-col">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            isEven={index % 2 === 0}
            onOpenLightbox={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
