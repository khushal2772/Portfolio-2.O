import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, GraduationCap, Sun, Moon } from 'lucide-react';
import { developerProfile } from '../data';

interface NavbarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  onOpenContact: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ activeSection, onSectionClick, onOpenContact, theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'overview', label: 'Ecosystem' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'academic-section', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact-section', label: 'Contact' }
  ];

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => handleSectionClick('overview')}>
            <span className="p-1.5 bg-sky-500/10 rounded-lg text-sky-400 border border-sky-500/20">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold text-slate-100 tracking-wider">
                {developerProfile.name.toUpperCase()}
              </span>
              <span className="font-sans text-[10px] text-sky-400 font-medium uppercase tracking-widest">
                Portfolio // B.Tech CSE
              </span>
            </div>
          </div>

          {/* Desktop Nav Tabs */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold tracking-wide transition-all duration-300 relative ${
                  activeSection === section.id
                    ? 'text-sky-400 bg-sky-500/10 border border-sky-400/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sky-400 rounded-full blur-[1px]" />
                )}
              </button>
            ))}
          </div>

          {/* Connect / Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 border-r border-slate-800 pr-4">
              <a
                href={developerProfile.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-slate-200 transition-colors"
                title="GitHub Profiles"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={developerProfile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-slate-200 transition-colors"
                title="LinkedIn Connections"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${developerProfile.email}`}
                className="p-1.5 text-slate-400 hover:text-sky-400 transition-colors"
                title="Email Direct"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <button
              onClick={toggleTheme}
              className="px-3.5 py-1.5 rounded-md bg-slate-800 text-slate-100 font-mono text-[11px] font-bold tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md border border-slate-700 flex items-center gap-1.5"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                  <span>LIGHT MODE</span>
                </>
              ) : (
                <>
                  <Moon className="h-3.5 w-3.5 text-indigo-400" />
                  <span>DARK MODE</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="px-2 py-1.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px] font-semibold border border-slate-700 flex items-center gap-1"
            >
              {theme === 'dark' ? <Sun className="h-3.5 w-3.5 text-amber-400" /> : <Moon className="h-3.5 w-3.5 text-indigo-400" />}
              <span>Mode</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-400 hover:text-slate-200 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg font-mono text-xs font-semibold ${
                  activeSection === section.id
                    ? 'text-sky-400 bg-sky-500/5 border border-sky-500/10'
                    : 'text-slate-400 hover:bg-slate-800/40'
                }`}
              >
                {section.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-800/80 px-4 flex justify-between items-center">
              <div className="flex gap-4">
                <a
                  href={developerProfile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-slate-200"
                >
                  <Github className="h-4.5 w-4.5" />
                </a>
                <a
                  href={developerProfile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-slate-200"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  toggleTheme();
                }}
                className="px-3 py-1.5 rounded bg-sky-500 text-slate-950 font-mono text-[11px] font-bold tracking-wider flex items-center gap-1.5"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-3.5 w-3.5" />
                    <span>LIGHT MODE</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5" />
                    <span>DARK MODE</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
