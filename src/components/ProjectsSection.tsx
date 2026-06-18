import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  CheckCircle,
  Info,
  Workflow
} from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Python/Django' | 'Machine Learning' | 'Frontend Architecture' | 'Cloud/DevOps'>('All');

  const filters: ('All' | 'Python/Django' | 'Machine Learning' | 'Frontend Architecture' | 'Cloud/DevOps')[] = [
    'All', 'Python/Django', 'Machine Learning', 'Frontend Architecture', 'Cloud/DevOps'
  ];

  const featuredProject = projectsData.find(p => p.featured);
  const secondaryProjects = projectsData.filter(p => !p.featured);

  const filteredSecondary = selectedFilter === 'All' 
    ? secondaryProjects 
    : secondaryProjects.filter(p => p.category === selectedFilter);

  const renderFilterCount = (cat: typeof filters[number]) => {
    if (cat === 'All') return secondaryProjects.length;
    return secondaryProjects.filter(p => p.category === cat).length;
  };

  return (
    <div className="space-y-16 py-4">
      {/* SECTION 1: HEADER */}
      <section className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
          <Layers className="h-3.5 w-3.5 text-indigo-400" />
          <span className="font-mono text-[9px] font-bold text-indigo-400 uppercase tracking-widest leading-none">Engineering Portfolio</span>
        </div>
        <h2 className="font-sans font-bold text-3xl text-slate-100 tracking-tight">
          Curated Technical Explorations
        </h2>
        <p className="font-sans text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
          From high-performance asynchronous servers and validated database routers to machine learning microservices and polished interactive SPAs.
        </p>
      </section>

      {/* SECTION 2: LATEST FEATURED PROJECT */}
      {featuredProject && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-900 pb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <h3 className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider">
              LATEST FEATURED SYSTEM
            </h3>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 relative group">
            {/* Project graphic / image representation */}
            <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-[380px] bg-slate-905 border-r border-slate-800 flex flex-col justify-end p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title} 
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover scale-102 hover:scale-105 duration-700 opacity-60"
              />
              
              <div className="relative z-20 space-y-2">
                <span className="px-2.5 py-0.5 rounded-full border border-sky-500/30 text-[9px] bg-sky-500/15 text-sky-400 font-mono font-bold tracking-wide uppercase">
                  {featuredProject.category.toUpperCase()}
                </span>
                <p className="font-sans text-lg font-bold text-slate-100">{featuredProject.title}</p>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">{featuredProject.subtitle}</p>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="font-sans text-xs text-slate-350 leading-relaxed">
                  {featuredProject.longDescription || featuredProject.description}
                </p>

                {/* Key Features Block */}
                <div className="space-y-2.5 pt-1">
                  <p className="font-mono text-[10px] text-sky-400 uppercase tracking-widest font-bold">Key Architectural Capacities</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {featuredProject.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex gap-1.5 items-start font-sans text-xs text-slate-400">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featuredProject.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded border border-slate-850 bg-slate-900 font-mono text-[9px] text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="border-t border-slate-900 pt-3 flex flex-wrap justify-between items-center gap-4">
                <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5 text-slate-400" /> Fully responsive controls configured
                </div>

                <div className="flex gap-2">
                  {featuredProject.githubUrl && (
                    <a 
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 border border-slate-800 hover:border-slate-700 bg-slate-950 rounded-lg text-slate-300 hover:text-slate-100 font-mono text-xs font-semibold flex items-center gap-1.5 transition"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>REPOSITORY</span>
                    </a>
                  )}
                  {featuredProject.demoUrl && (
                    <a 
                      href={featuredProject.demoUrl}
                      className="px-3.5 py-1.5 bg-sky-500 hover:brightness-110 text-slate-950 rounded-lg font-mono text-xs font-bold flex items-center gap-1.5 transition"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: SYSTEM ARCHITECTURE GRAPHIC */}
      <section className="p-5 md:p-6 rounded-2xl border border-slate-800 bg-slate-955 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-900 pb-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-lg">
              <Workflow className="h-4 w-4" />
            </span>
            <h4 className="font-sans text-xs font-bold text-slate-300 uppercase tracking-widest">
              SYSTEM ARCHITECTURE: AI ORCHESTRATOR
            </h4>
          </div>
          <span className="font-mono text-[9px] text-slate-500 uppercase">Interactive data pipelines</span>
        </div>

        <p className="font-sans text-xs text-slate-400 leading-relaxed">
          Visualizing the transaction logs flowing through our featured task coordinator. Demonstrating decoupling of predictive processing using redis messaging buffers.
        </p>

        {/* Dynamic diagram mapping steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2 relative">
          {featuredProject?.architectureFlow?.map((node, idx) => (
            <div key={node.step} className="p-4 rounded-xl border border-slate-900 bg-slate-950 space-y-2 relative group hover:border-indigo-550 transition-colors">
              <div className="flex justify-between items-center">
                <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-[9px] text-indigo-400 font-mono font-bold">
                  STEP 0{node.step}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-indigo-400 transition-colors" />
              </div>
              <h5 className="font-sans text-xs font-bold text-slate-200">{node.title}</h5>
              <p className="font-sans text-[10px] text-slate-400 leading-normal">{node.desc}</p>

              {/* Connecting line helper to next card (visible on desktop md) */}
              {idx < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-slate-900 -translate-y-1/2 z-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: OTHER VENTURES GRID */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-900 pb-2">
          <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider">
            OTHER TECHNICAL VENTURES
          </span>

          {/* Sub Filters for other projects */}
          <div className="flex flex-wrap gap-1">
            {filters.map((fil) => (
              <button
                key={fil}
                onClick={() => setSelectedFilter(fil)}
                className={`px-2.5 py-1 rounded font-mono text-[9px] font-semibold tracking-wide border transition-all ${
                  selectedFilter === fil
                    ? 'border-sky-500 bg-sky-500/10 text-sky-400'
                    : 'border-transparent bg-slate-950 text-slate-400 hover:text-slate-200'
                }`}
              >
                {fil.split('/')[0]} ({renderFilterCount(fil)})
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Transition Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSecondary.length > 0 ? (
            filteredSecondary.map((proj: Project) => (
              <div 
                key={proj.id} 
                className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-4 hover:border-slate-755 transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="px-2 py-0.5 rounded border border-indigo-500/20 bg-indigo-500/5 font-mono text-[8px] text-indigo-400 font-bold uppercase tracking-wider">
                      {proj.category}
                    </span>
                    <span className="text-[10px] text-slate-600 font-mono">2026</span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-sans text-sm font-bold text-slate-200 leading-snug">{proj.title}</h4>
                    <p className="font-sans text-[11px] text-slate-450">{proj.subtitle}</p>
                  </div>

                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="space-y-1 pt-1">
                    <p className="font-mono text-[9px] text-slate-500">Key features</p>
                    <ul className="space-y-1">
                      {proj.keyFeatures?.map((kf, index) => (
                        <li key={index} className="text-[10px] text-slate-400 font-sans flex items-start gap-1 leading-snug">
                          <span className="text-emerald-500 mt-0.5">✓</span>
                          <span>{kf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-900 pt-3 flex justify-between items-center gap-2">
                  <div className="flex flex-wrap gap-1">
                    {proj.tags.slice(0, 3).map(t => (
                      <span key={t} className="px-1.5 py-0.5 rounded border border-slate-900 bg-slate-950 font-mono text-[8px] text-slate-500">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-1.5">
                    {proj.githubUrl && (
                      <a 
                        href={proj.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-1 px-1.5 rounded bg-slate-900 hover:bg-slate-800 hover:text-slate-200 border border-slate-800 text-slate-400 transition"
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-3 py-12 text-center text-slate-500 font-mono text-xs border border-dashed border-slate-800 rounded-2xl">
              No entities found matching filters.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
