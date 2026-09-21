import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/mockData';
import { ProjectItem } from '../types';
import { Github, ExternalLink, ThumbsUp, Code2, Plus, Sparkles, Terminal } from 'lucide-react';

interface ProjectsSectionProps {
  onSubmitProject: () => void;
  onViewProjectDetails: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSubmitProject,
  onViewProjectDetails,
}) => {
  const [projects, setProjects] = useState<ProjectItem[]>(PROJECTS_DATA);
  const [upvotedIds, setUpvotedIds] = useState<Record<string, boolean>>({});

  const handleUpvote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const hasVoted = upvotedIds[id];
    setUpvotedIds((prev) => ({ ...prev, [id]: !hasVoted }));
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const current = p.upvotes || 0;
          return { ...p, upvotes: hasVoted ? current - 1 : current + 1 };
        }
        return p;
      })
    );
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-white/10 relative bg-[#000000]/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="cora-badge mb-3">
              <span className="text-zinc-500">⬡</span>
              <span>COMMUNITY SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium sm:font-semibold text-white tracking-tight leading-tight">
              Built by the Community
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mt-2 font-normal leading-relaxed">
              Real software, genuine traction, open repositories. Every item here was conceptualized 
              and deployed by Dev_Spark members.
            </p>
          </div>

          <button
            onClick={onSubmitProject}
            className="self-start md:self-auto px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-tight transition-all hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Submit Your Project</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const hasVoted = !!upvotedIds[project.id];

            return (
              <div
                key={project.id}
                onClick={() => onViewProjectDetails(project)}
                className="p-6 sm:p-7 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/30 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top Bar: PROJECT 01 & Upvote */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-code text-xs font-bold tracking-widest text-zinc-400 uppercase">
                      {project.projectNumber}
                    </span>

                    <button
                      onClick={(e) => handleUpvote(project.id, e)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code transition-colors ${
                        hasVoted
                          ? 'bg-white text-black font-bold'
                          : 'bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white'
                      }`}
                      aria-label="Upvote project"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{project.upvotes || 0}</span>
                    </button>
                  </div>

                  {/* Project Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono-code mb-4 font-medium">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Builder details per user prompt: Built by @username */}
                  <div className="p-3 rounded-lg bg-zinc-900/80 border border-white/5 mb-6 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[11px] font-mono-code text-zinc-400 uppercase block">
                        Built by:
                      </span>
                      <span className="text-white font-mono-code font-bold">
                        {project.builderHandle}
                      </span>
                      <span className="text-zinc-400 text-[11px] block">
                        ({project.builderName} • {project.builderRole})
                      </span>
                    </div>

                    <div className="p-2 rounded-full bg-zinc-800 text-zinc-300">
                      <Code2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Tech stack pills per prompt (AI • React • Gemini) */}
                  <div className="flex flex-wrap items-center gap-2 mb-4 font-mono-code text-xs text-zinc-400">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400">Stack:</span>
                    {project.tags.map((tag, i) => (
                      <span key={tag} className="flex items-center gap-1">
                        <span className="text-zinc-200 bg-zinc-900 px-2 py-0.5 rounded border border-white/5 text-[11px]">
                          {tag}
                        </span>
                        {i < project.tags.length - 1 && <span className="text-zinc-600">•</span>}
                      </span>
                    ))}
                  </div>

                  {project.metrics && (
                    <div className="text-[11px] font-mono-code text-emerald-400 flex items-center gap-1.5 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{project.metrics}</span>
                    </div>
                  )}
                </div>

                {/* Actions: View Project & Source */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewProjectDetails(project);
                    }}
                    className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-white text-zinc-200 hover:text-black border border-white/15 text-xs font-mono-code font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl || 'https://github.com/devspark-community'}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-xs font-mono-code text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Submission Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white">
              Shipping something right now?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-normal">
              Submit your project to the Dev_Spark Showcase. Get featured, find beta testers, and get reviewed by senior founders.
            </p>
          </div>

          <button
            onClick={onSubmitProject}
            className="px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/20 text-xs font-mono-code text-white hover:bg-zinc-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            Submit for Review →
          </button>
        </div>
      </div>
    </section>
  );
};
