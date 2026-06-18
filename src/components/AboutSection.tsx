// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { 
//   Heart, 
//   Cpu, 
//   BookOpen, 
//   Share2, 
//   Sliders, 
//   Clock, 
//   MapPin, 
//   ExternalLink,
//   Code2, 
//   Award, 
//   Binary,
//   Compass,
//   Feather,
//   Check
// } from 'lucide-react';
// import { developerProfile, philosophyData, blogArticles } from '../data';

// export default function AboutSection() {
//   const [activeStory, setActiveStory] = useState<'evolution' | 'spark' | 'rigor' | 'specialist'>('evolution');
//   const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
//   // Bento states
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [locCount, setLocCount] = useState(14820);

//   useEffect(() => {
//     // Clock tick
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     // Code lines tick
//     const locTimer = setInterval(() => {
//       setLocCount(prev => prev + Math.floor(Math.random() * 2));
//     }, 4500);

//     return () => {
//       clearInterval(timer);
//       clearInterval(locTimer);
//     };
//   }, []);

//   const stories = {
//     evolution: {
//       title: "The Evolution",
//       tagline: "Unraveling complex systems thread by thread.",
//       content: "Computations should be beautiful. Starting from standard system logs, I developed a strong interest in understanding underlying infrastructures—how bytes are packed, how threads are sequenced, and how data schemas are validated. Over four years, my style evolved from script hacking to highly modular, architectural patterns focused on robustness and ease of deployment."
//     },
//     spark: {
//       title: "The Spark",
//       tagline: "The intersection of art and strict logical compilers.",
//       content: "In high school, while hacking simple web layouts, I realized that interfaces are more than aesthetic canvases—they are systems of state, transitions, and user psychology. The spark was combining this interface creativity with strict computer science practices. This duality has guided my development: creating extremely tight computational APIs that feed clean, responsive frontend controls."
//     },
//     rigor: {
//       title: "Academic Rigor",
//       tagline: "Embracing theoretical depth to build resilient software.",
//       content: "My study tenure in Computer Science and Engineering at IIT Delhi unlocked the mathematical structures of software. Translating complex asymptotic calculations into real physical systems taught me that true performance is won in compiler designs, custom memory controls, caching strategies, and robust system configurations."
//     },
//     specialist: {
//       title: "Full Stack Specialist",
//       tagline: "End-to-end fluency, from raw hardware constraints to layout pixels.",
//       content: "I define a specialist by their adaptability. I focus on developing clean, asynchronous Python backend structures, secure JWT setups, dynamic Redis message brokers, and fluid client state managers using TypeScript/React. The goal is to ensure a unified system architecture across the entire stack."
//     }
//   };

//   const handleShareArticle = (idx: number, url: string) => {
//     setCopiedIndex(idx);
//     setTimeout(() => setCopiedIndex(null), 2500);
//   };

//   return (
//     <div className="space-y-20 py-8">
//       {/* SECTION 1: HEADER & HEADLINE */}
//       <section className="space-y-4 text-center max-w-3xl mx-auto">
//         <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full">
//           <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
//           <span className="font-mono text-[9px] font-bold text-sky-450 uppercase tracking-widest">Philosophy Core</span>
//         </div>
//         <h1 className="font-sans font-bold text-3xl sm:text-4xl text-slate-100 tracking-tight leading-tight">
//           {developerProfile.tagline}
//         </h1>
//         <p className="font-sans text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
//           Unifying strict backend systems logic with elegant web interaction. I cultivate high coding performance, robust documentation, and visually stunning layouts.
//         </p>
//       </section>

//       {/* SECTION 2: BENTO GRID - TECHNICAL CORE */}
//       <section className="space-y-6">
//         <div className="flex items-center gap-2">
//           <span className="p-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
//             <Compass className="h-4.5 w-4.5" />
//           </span>
//           <h2 className="font-sans text-lg font-bold text-slate-100 tracking-tight">
//             Technical Core & Real-time Metrics
//           </h2>
//         </div>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
//           {/* Active Coding Clock Widget (4 Columns) */}
//           <div className="md:col-span-4 p-5 rounded-2xl border border-slate-800 bg-slate-950 flex flex-col justify-between space-y-6">
//             <div className="flex items-center justify-between">
//               <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
//                 <Clock className="h-3.5 w-3.5 text-sky-400" /> UTC Cron registry
//               </span>
//               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//             </div>
            
//             <div className="space-y-1">
//               <p className="font-mono text-3xl font-extrabold text-slate-100 tracking-wider">
//                 {currentTime.toLocaleTimeString('en-US', { hour12: false, timeZone: 'UTC' })}
//               </p>
//               <p className="font-mono text-[10px] text-slate-550">
//                 SYSTEM CLOCK (GREENWICH MEAN TIME)
//               </p>
//             </div>

//             <div className="border-t border-slate-900 pt-4 flex justify-between items-center font-mono text-[11px] text-slate-400">
//               <span>Lines Compiled</span>
//               <span className="text-sky-400 font-bold tracking-wide">{locCount.toLocaleString()}+</span>
//             </div>
//           </div>

//           {/* Current Location / Focus Widget (4 Columns) */}
//           <div className="md:col-span-4 p-5 rounded-2xl border border-slate-800 bg-slate-950 flex flex-col justify-between space-y-4">
//             <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
//               <MapPin className="h-3.5 w-3.5 text-indigo-400" /> Host Node
//             </div>

//             <div className="space-y-1 text-slate-300">
//               <p className="font-sans text-base font-bold text-slate-200">IIT Delhi Campus</p>
//               <p className="font-mono text-[10px] text-slate-500 uppercase">28.5450° N, 77.1926° E</p>
//             </div>

//             <div className="bg-slate-900 border border-slate-800/60 p-3 rounded-lg flex items-center gap-2">
//               <span className="text-indigo-400 bg-indigo-500/10 p-1 rounded">
//                 <Cpu className="h-4 w-4" />
//               </span>
//               <div>
//                 <p className="font-mono text-[9px] text-indigo-450 uppercase leading-none font-bold">Research focus</p>
//                 <p className="font-sans text-xs text-slate-200 font-semibold mt-1">Compilers & Applied LLMs</p>
//               </div>
//             </div>
//           </div>

//           {/* GSoC Highlights (4 Columns) */}
//           <div className="md:col-span-4 p-5 rounded-2xl border border-slate-800 bg-slate-950 lg:p-6 flex flex-col justify-between space-y-4">
//             <div className="flex items-center justify-between">
//               <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
//                 <Award className="h-3.5 w-3.5 text-amber-500" /> Open Source GSoC
//               </span>
//               <span className="text-slate-600 text-xs">2024</span>
//             </div>

//             <div className="space-y-2">
//               <p className="font-sans text-xs text-slate-400 leading-relaxed">
//                 Refactored metadata compilation engines and optimized telemetry pipeline architectures inside core repositories.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-2 border-t border-slate-900 pt-3">
//               <div className="bg-slate-900 p-2 rounded text-center">
//                 <p className="font-mono text-xs font-bold text-emerald-400">15+</p>
//                 <p className="font-sans text-[8px] text-slate-500 uppercase">Prs closed</p>
//               </div>
//               <div className="bg-slate-900 p-2 rounded text-center">
//                 <p className="font-mono text-xs font-bold text-sky-400">8.4k</p>
//                 <p className="font-sans text-[8px] text-slate-500 uppercase">Lines added</p>
//               </div>
//             </div>
//           </div>

//           {/* Large Story Switcher Widget (8 Columns) */}
//           <div className="md:col-span-8 p-5 md:p-6 rounded-2xl border border-slate-800 bg-slate-950 space-y-6">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-900 pb-4">
//               <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
//                 <Binary className="h-3.5 w-3.5 text-indigo-400" /> Architectural Journeys
//               </span>
              
//               {/* Tab options */}
//               <div className="flex flex-wrap gap-1">
//                 {(Object.keys(stories) as Array<keyof typeof stories>).map((key) => (
//                   <button
//                     key={key}
//                     onClick={() => setActiveStory(key)}
//                     className={`px-2.5 py-1 rounded font-mono text-[10px] font-semibold tracking-wide border transition-all ${
//                       activeStory === key
//                         ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400'
//                         : 'border-transparent bg-slate-900 text-slate-450 hover:bg-slate-850'
//                     }`}
//                   >
//                     {stories[key].title}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Content box */}
//             <div className="min-h-[140px] flex flex-col justify-between">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeStory}
//                   initial={{ opacity: 0, y: 5 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -5 }}
//                   transition={{ duration: 0.2 }}
//                   className="space-y-3"
//                 >
//                   <p className="font-sans text-sm font-bold text-slate-205">
//                     {stories[activeStory].tagline}
//                   </p>
//                   <p className="font-sans text-xs text-slate-400 leading-relaxed">
//                     {stories[activeStory].content}
//                   </p>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Code Preferences Widget (4 Columns) */}
//           <div className="md:col-span-4 p-5 rounded-2xl border border-slate-800 bg-slate-950 flex flex-col justify-between space-y-4">
//             <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
//               <Code2 className="h-3.5 w-3.5 text-emerald-400" /> CLI Environment
//             </span>

//             <div className="bg-slate-950 p-3 border border-slate-900 rounded-lg font-mono text-[10px] text-slate-400 space-y-1">
//               <p className="text-emerald-500">// Editor Preferences</p>
//               <p><span className="text-indigo-400">const</span> editor = <span className="text-amber-300">"Neovim / VS Code"</span>;</p>
//               <p><span className="text-indigo-400">const</span> shell = <span className="text-amber-300">"zsh + tmux"</span>;</p>
//               <p className="text-emerald-500">// Keybindings</p>
//               <p><kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] text-slate-300">Ctrl + Shift + P</kbd> : Omni</p>
//               <p><kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] text-slate-300">gd</kbd> : Go To Definition</p>
//             </div>

//             <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 border-t border-slate-900 pt-3">
//               <span>Energy Catalyst</span>
//               <span className="text-amber-400 font-bold">Black Coffee // Instant</span>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* SECTION 3: ENGINEERING PHILOSOPHY */}
//       <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-slate-900">
//         <div className="lg:col-span-4 space-y-4">
//           <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full">
//             <Sliders className="h-3.5 w-3.5 text-sky-400" />
//             <span className="font-mono text-[9px] font-bold text-sky-400 uppercase tracking-widest">Principles</span>
//           </div>
//           <h2 className="font-sans text-2xl font-bold text-slate-100 tracking-tight">
//             Engineering Philosophy
//           </h2>
//           <p className="font-sans text-xs text-slate-400 leading-relaxed">
//             I refuse to separate mathematical elegance from interface fluidity. Every project strives to satisfy these core structural values.
//           </p>
//         </div>

//         <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {philosophyData.map((phil) => (
//             <div key={phil.title} className="p-5 rounded-xl border border-slate-800 bg-slate-950 flex flex-col justify-between space-y-4 hover:border-slate-700 transition">
//               <div className="space-y-2">
//                 <h3 className="font-sans text-xs font-bold text-slate-150 uppercase tracking-wider">
//                   {phil.title}
//                 </h3>
//                 <p className="font-sans text-xs text-slate-400 leading-relaxed">
//                   {phil.desc}
//                 </p>
//               </div>

//               <div className="space-y-1.5">
//                 <div className="flex justify-between font-mono text-[9px] text-slate-500">
//                   <span>Optimization index</span>
//                   <span className="text-sky-400 font-semibold">{phil.percent}%</span>
//                 </div>
//                 <div className="h-1 w-full bg-slate-905 rounded-full overflow-hidden">
//                   <div className="h-full bg-gradient-to-r from-sky-450 to-indigo-500" style={{ width: `${phil.percent}%` }} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SECTION 4: TECHNICAL WRITING */}
//       <section id="technical-writing_logs" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-slate-900">
//         <div className="lg:col-span-4 space-y-4">
//           <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
//             <Feather className="h-3.5 w-3.5 text-amber-400" />
//             <span className="font-mono text-[9px] font-bold text-amber-400 uppercase tracking-widest">LOGS</span>
//           </div>
//           <h2 className="font-sans text-2xl font-bold text-slate-100 tracking-tight">
//             Technical Writing
//           </h2>
//           <p className="font-sans text-xs text-slate-400 leading-relaxed">
//             Translating core engineering benchmarks, CUDA configurations, and language architectures into comprehensive technical guides.
//           </p>
//         </div>

//         <div className="lg:col-span-8 space-y-4">
//           {blogArticles.map((art, idx) => (
//             <div key={art.id} className="p-5 rounded-2xl border border-slate-800 bg-slate-950 flex flex-col sm:flex-row justify-between gap-4 group hover:border-slate-700 transition duration-300">
//               <div className="space-y-2 flex-1">
//                 <div className="flex items-center gap-2 font-mono text-[9px] text-slate-550">
//                   <span>{art.platform}</span>
//                   <span>•</span>
//                   <span>{art.date}</span>
//                 </div>
//                 <h3 className="font-sans text-sm font-bold text-slate-201 group-hover:text-amber-400 transition-colors">
//                   {art.title}
//                 </h3>
//                 <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
//                   {art.excerpt}
//                 </p>
//               </div>

//               <div className="flex sm:flex-col justify-between items-end gap-2 border-t sm:border-t-0 border-slate-900 pt-3 sm:pt-0">
//                 <span className="font-mono text-[10px] text-slate-500 bg-slate-900 px-2 py-0.5 rounded">
//                   {art.readTime}
//                 </span>

//                 <div className="flex gap-1.5">
//                   <button 
//                     onClick={() => handleShareArticle(idx, art.url)}
//                     className="p-1.5 rounded border border-slate-805 bg-slate-900 text-slate-400 hover:text-slate-200 transition-colors"
//                     title="Copy Article URL Link"
//                   >
//                     {copiedIndex === idx ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
//                   </button>
//                   <a 
//                     href={art.url}
//                     className="p-1.5 rounded border border-slate-805 bg-slate-900 text-slate-400 hover:text-sky-400 transition-colors flex items-center justify-center"
//                     title="Read Article"
//                   >
//                     <ExternalLink className="h-3.5 w-3.5" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SECTION 5: CTA */}
//       <section className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden shadow-xl">
//         <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
//         <div className="space-y-2 text-center md:text-left">
//           <h3 className="font-sans text-base font-bold text-slate-200">Interested in system diagnostics or dynamic collaborations?</h3>
//           <p className="font-sans text-xs text-slate-400 max-w-xl">
//             Let's evaluate code performance, audit database microservices, or construct fluid, high-contrast, scalable applications together.
//           </p>
//         </div>
//         <button 
//           onClick={() => {
//             const el = document.getElementById('contact-section');
//             el?.scrollIntoView({ behavior: 'smooth' });
//           }}
//           className="px-5 py-2.5 rounded-lg bg-sky-500 hover:brightness-110 text-slate-950 font-mono text-[11px] font-bold tracking-wider float-right"
//         >
//           CONNECT CODEBASE
//         </button>
//       </section>
//     </div>
//   );
// }
