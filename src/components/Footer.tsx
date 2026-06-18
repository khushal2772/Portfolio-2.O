import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';
import { developerProfile } from '../data';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-slate-900 rounded border border-slate-800 text-sky-400">
              <Cpu className="h-4 w-4" />
            </span>
            <div className="text-left">
              <p className="font-mono text-xs font-bold text-slate-200 tracking-wider">
                {developerProfile.name.toUpperCase()}
              </p>
              <p className="font-sans text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">
                B.Tech Computer Science & Engineering • Engineering Portfolio
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>ENCRYPTED SECURE CONNECTION • DEPLOYMENT STABLE</span>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="font-sans text-[11px] text-slate-600">
            &copy; {new Date().getFullYear()} {developerProfile.name}. Distributed under Apache s2.0 Specifications.
          </p>
          <div className="flex gap-4 font-mono text-[10px] text-slate-600">
            <a href={developerProfile.github} target="_blank" rel="noreferrer" className="hover:text-slate-400 transition">github.com</a>
            <span>/</span>
            <a href={developerProfile.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-400 transition">linkedin.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
