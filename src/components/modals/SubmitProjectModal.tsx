import React, { useState } from 'react';
import { X, CheckCircle2, Code2, Sparkles, Send } from 'lucide-react';
import { ProjectItem } from '../../types';

interface SubmitProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectAdded: (newProject: ProjectItem) => void;
}

export const SubmitProjectModal: React.FC<SubmitProjectModalProps> = ({
  isOpen,
  onClose,
  onProjectAdded,
}) => {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [builderName, setBuilderName] = useState('');
  const [builderHandle, setBuilderHandle] = useState('');
  const [builderRole, setBuilderRole] = useState('Student Developer');
  const [tagsInput, setTagsInput] = useState('AI, React, Gemini');
  const [demoUrl, setDemoUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tags = tagsInput.split(',').map((t) => t.trim()).filter(Boolean);
    const newProj: ProjectItem = {
      id: `proj-${Date.now()}`,
      projectNumber: `PROJECT 0${Math.floor(Math.random() * 5 + 5)}`,
      title,
      tagline,
      description,
      builderName: builderName || 'Community Member',
      builderHandle: builderHandle.startsWith('@') ? builderHandle : `@${builderHandle || 'builder'}`,
      builderRole: builderRole || 'Builder',
      tags: tags.length ? tags : ['TypeScript', 'React'],
      demoUrl: demoUrl || 'https://example.com',
      githubUrl: githubUrl || 'https://github.com',
      upvotes: 1,
      featured: true,
      metrics: 'Recently Submitted to Showcase'
    };

    onProjectAdded(newProj);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#0e0e0e] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-left my-8">
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/20 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-zinc-400 block">
                  Dev_Spark Showcase
                </span>
                <h3 className="text-xl font-bold text-white">
                  Submit Your Project
                </h3>
              </div>
            </div>

            <p className="text-xs text-zinc-300 mb-6 leading-relaxed">
              Showcase what you've built to fellow developers, founders, and community partners in Pune and beyond.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-mono-code text-zinc-300 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI Diagnostic Engine"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                />
              </div>

              <div>
                <label className="block font-mono-code text-zinc-300 mb-1">
                  One-Line Tagline *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Multi-modal medical imaging screening assistant"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Arjun Sharma"
                    value={builderName}
                    onChange={(e) => setBuilderName(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    Your Handle (@username) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@arjun_builds"
                    value={builderHandle}
                    onChange={(e) => setBuilderHandle(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono-code text-zinc-300 mb-1">
                  Tech Stack (comma separated) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="AI, React, Gemini, Python"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    GitHub Repo URL *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/..."
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    Live Demo URL (optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={demoUrl}
                    onChange={(e) => setDemoUrl(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono-code text-zinc-300 mb-1">
                  Project Description *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Briefly explain what you built, architecture choices, and what it achieves..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publish to Showcase</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            </div>

            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
              Project Added to Showcase!
            </h3>

            <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Your project <strong>{title}</strong> is now live on the Dev_Spark Showcase board for community review.
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-white text-black font-bold text-xs uppercase hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
