import React from 'react';
import { ProjectItem } from '../../types';
import { X, ExternalLink, Github, ThumbsUp, Code2, Sparkles, Terminal } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0e0e0e] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-left my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono-code font-bold tracking-widest text-zinc-400 uppercase">
              {project.projectNumber} // DEV_SPARK SHOWCASE
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
            {project.title}
          </h3>

          <p className="text-xs font-mono-code text-zinc-400 mb-4">
            {project.tagline}
          </p>

          <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/10 mb-6 flex items-center justify-between text-xs">
            <div>
              <span className="text-[10px] font-mono-code text-zinc-400 uppercase block">
                Lead Builder
              </span>
              <span className="text-white font-mono-code font-bold text-sm">
                {project.builderHandle}
              </span>
              <span className="text-zinc-400 text-xs block">
                {project.builderName} ({project.builderRole})
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 font-mono-code text-xs text-white">
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>{project.upvotes || 0} votes</span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <span className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider block mb-1">
                Architecture &amp; Mission:
              </span>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.metrics && (
              <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/5 font-mono-code text-xs text-emerald-400">
                ✦ {project.metrics}
              </div>
            )}

            <div>
              <span className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider block mb-2">
                Tech Stack:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono-code text-xs">
                {project.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-zinc-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white border border-white/15 font-mono-code text-xs transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
