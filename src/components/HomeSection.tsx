import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Briefcase, 
  Dna, 
  Cpu, 
  Terminal, 
  Send,
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  Award, 
  ExternalLink,
  BookOpen,
  Download
} from 'lucide-react';
import { developerProfile, skillsData, academicJourney, professionalExperiences } from '../data';
import { Skill } from '../types';
import ProjectsSection from './ProjectsSection';

export default function HomeSection() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('All');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ['All', 'Languages', 'Frontend', 'Backend', 'DevOps & Cloud', 'Tools & Methods'];

  const filteredSkills = selectedSkillCategory === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === selectedSkillCategory);

  const handleSubmitContact = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!contactName || !contactEmail || !contactMessage) return;

  try {
    await emailjs.send(
      "service_hb7jcpk",
      "template_gv9mh3s",
      {
        from_name: contactName,
        from_email: contactEmail,
        message: contactMessage,
      },
      "i8urW2EXbOOjrNHlZ"
    );

    setContactSubmitted(true);

    setTimeout(() => {
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      setContactSubmitted(false);
    }, 5000);

  } catch (error) {
    console.error("Email failed:", error);
    alert("Failed to send message");
  }
  };

  const getSkillColorClass = (category: string) => {
    switch(category) {
      case 'Languages': return 'border-amber-500/20 text-amber-400 bg-amber-500/10';
      case 'Frontend': return 'border-sky-500/20 text-sky-400 bg-sky-500/10';
      case 'Backend': return 'border-indigo-500/20 text-indigo-400 bg-indigo-500/10';
      case 'DevOps & Cloud': return 'border-emerald-500/20 text-emerald-400 bg-emerald-500/10';
      default: return 'border-slate-500/20 text-slate-300 bg-slate-500/10';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="space-y-24 py-8">
      {/* SECTION 1: HERO CONTAINER */}
      <section id="overview" className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 px-6 py-12 md:px-12 md:py-20 shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-sky-500/10 to-indigo-500/0 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px] bg-gradient-to-tr from-indigo-500/5 to-emerald-500/0 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/25 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="font-mono text-xs font-semibold text-sky-400 tracking-wide uppercase">
                B.Tech Computer Science & Engineering
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-100 tracking-tight leading-tight">
                Transformed into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-indigo-500">
                  User Experience.
                </span>
              </h1>
            </div>

            <p className="font-sans text-base text-slate-400 leading-relaxed max-w-xl">
              {developerProfile.aboutShort}
            </p>

            <div className="font-mono text-xs text-slate-500 flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                <span>{developerProfile.location}</span>
              </div>
              <span className="text-slate-800">•</span>
              <div className="flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5 text-sky-400" />
                <span>CGPA: <strong className="text-slate-300">{developerProfile.cgpa}</strong></span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/Resume_Khushal_Singh.pdf"
                download="Resume_Khushal_Singh.pdf"
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700/80 text-xs font-semibold font-mono tracking-wide text-slate-200 border border-slate-700 transition inline-flex items-center gap-2 cursor-pointer"
              >
                <Download className="h-3.5 w-3.5 text-sky-450" />
                DOWNLOAD RESUME
              </a>
              <button 
                onClick={() => {
                  const el = document.getElementById('contact-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-lg bg-sky-500 hover:brightness-115 text-xs font-bold font-mono tracking-wide text-slate-950 transition shadow-lg shadow-sky-500/20"
              >
                CONNECT DIRECTLY
              </button>
            </div>
          </div>

          {/* Interactive Console Asset / Right panel */}
          <div className="lg:col-span-5">
            <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-[10px] text-slate-500 font-medium">khushal@ds: ~</span>
                <span className="w-4" />
              </div>

              <div className="p-5 font-mono text-xs space-y-4 text-slate-300">
                <div className="space-y-1">
                  <p className="text-slate-600"># Query developer credentials...</p>
                  <p className="text-sky-400">
                    $ <span className="text-slate-300">cat developer_meta.json</span>
                  </p>
                </div>

                <div className="bg-slate-950 p-4 border border-slate-800/80 rounded-lg text-[11px] leading-relaxed overflow-x-auto text-slate-400">
                  <p className="text-emerald-400">{`{`}</p>
                  <p className="pl-4">"identity": "{developerProfile.name}",</p>
                  <p className="pl-4">"focus": "Full-Stack & Intelligent Systems",</p>
                  <p className="pl-4">"status": "Final Year - B.Tech CSE",</p>
                  <p className="pl-4">"institution": "{developerProfile.institution}",</p>
                  <p className="pl-4">"interests": ["Compilers", "Applied LLMs", "UI Engineering"]</p>
                  <p className="text-emerald-400">{`}`}</p>
                </div>

                <div className="flex justify-between items-center bg-slate-950 border border-slate-800/80 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-emerald-500/10 rounded border border-emerald-500/20 text-emerald-400">
                      <Terminal className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none">Status</p>
                      <p className="text-[11px] text-slate-300 font-semibold mt-0.5">Systems Functional</p>
                    </div>
                  </div>
                  <div className="text-right">
                     {/* <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none">Commitment</p> */}
                     {/* <p className="text-[11px] text-sky-400 font-semibold mt-0.5">20+ Github contributions</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECHNICAL STACK MATRIX */}
      <section id="tech-stack" className="space-y-6">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <h2 className="font-sans text-2xl font-bold text-slate-100 tracking-tight">
            Technical Stack
          </h2>
          <p className="font-sans text-xs text-slate-400">
            A granular overview of frameworks, utilities, and protocols refined through rigorous academic projects and client milestones.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedSkillCategory(cat)}
              className={`px-3 py-1.5 rounded-md font-mono text-[10px] font-semibold tracking-wide border transition-all ${
                selectedSkillCategory === cat
                  ? 'border-sky-500 bg-sky-500/10 text-sky-400 shadow-md shadow-sky-500/5'
                  : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill: Skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="p-4 rounded-xl border border-slate-800 bg-slate-950 hover:border-slate-700 transition-all duration-300 relative group"
            >
              <div className="flex justify-between items-start gap-2">
                <span className="font-sans text-xs font-bold text-slate-200 group-hover:text-sky-400 transition-colors">
                  {skill.name}
                </span>
                <span className={`px-1.5 py-0.5 rounded text-[8px] font-mono border font-medium ${getSkillColorClass(skill.category)}`}>
                  {skill.category}
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="mt-4 space-y-1.5">
                <div className="flex justify-between items-center text-[9px] font-mono text-slate-500">
                  <span>Proficiency</span>
                  <span className="font-semibold text-slate-400">{skill.proficiency}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
                  />
                </div>
              </div>

              {/* Subtle hover feedback */}
              {hoveredSkill === skill.name && (
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-sky-400 via-indigo-500 to-transparent blur-[1px]" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 2.5: PROJECT VENTURES */}
      <section id="projects" className="pt-8 border-t border-slate-900">
        <ProjectsSection />
      </section>

      {/* SECTION 3: ACADEMIC JOURNEY */}
      <section id="academic-section" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-slate-900">
        <div className="lg:col-span-4 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <GraduationCap className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-mono text-[9px] font-bold text-amber-400 uppercase tracking-widest">Education</span>
          </div>
          <h2 className="font-sans text-2xl font-bold text-slate-100 tracking-tight">
            Academic Journey
          </h2>
          <p className="font-sans text-xs text-slate-400 leading-relaxed">
            Rigorous technical foundations centered on computational logic, databases, systems programming, and algorithmic design.
          </p>
          <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-xl space-y-0 font-mono text-[11px] text-slate-400">
            <div className="flex justify-between">
              {/* <span>Department Rank:</span> */}
              {/* <span className="text-slate-200 font-bold">Top 5</span> */}
            </div>
            <div className="flex justify-between "> {/*border-t border-slate-900 pt-2*/}
              <span>CGPA:</span>
              <span className="text-sky-400 font-bold">{developerProfile.cgpa}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-8">
          {academicJourney.map((milestone, idx) => (
            <div key={milestone.degree} className="p-6 rounded-2xl border border-slate-800 bg-slate-950 space-y-5 relative group hover:border-slate-700 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="space-y-1">
                  <h3 className="font-sans text-base font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                    {milestone.degree}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 flex items-center gap-1">
                    <span>{milestone.institution}</span>
                    {milestone.cgpa && (
                      <>
                        <span className="text-slate-700">•</span>
                        <span className="text-amber-400 font-semibold font-mono">CGPA: {milestone.cgpa}</span>
                      </>
                    )}
                  </p>
                </div>
                <span className="font-mono text-[10px] font-semibold text-slate-500 border border-slate-800 px-2 py-1 rounded bg-slate-900/50">
                  {milestone.duration}
                </span>
              </div>

              {/* Coursework & Achievements Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-bold flex items-center gap-1">
                    <BookOpen className="h-3 w-3" /> Core Coursework
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {milestone.courses.map(course => (
                      <span key={course} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-sans">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest font-bold flex items-center gap-1">
                    <Award className="h-3 w-3" /> Achievements
                  </span>
                  <ul className="space-y-1.5 list-none">
                    {milestone.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-[10px] text-slate-400 font-sans flex items-start gap-1.5 leading-snug">
                        <span className="text-sky-500 mt-1">▪</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: PROFESSIONAL EXPERIENCE TIMELINE */}
      <section id="experience" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-slate-900">
        <div className="lg:col-span-4 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 border border-indigo-500/25 rounded-full">
            <Briefcase className="h-3.5 w-3.5 text-indigo-400" />
            <span className="font-mono text-[9px] font-bold text-indigo-400 uppercase tracking-widest">Industry</span>
          </div>
          <h2 className="font-sans text-2xl font-bold text-slate-100 tracking-tight">
            Professional Experience
          </h2>
          <p className="font-sans text-xs text-slate-400 leading-relaxed">
            Hands-on internships and open-source contributions developing real-world APIs, tooling systems, and testing pipelines.
          </p>
        </div>

        <div className="lg:col-span-8 relative pl-6 border-l border-slate-800 space-y-10">
          {professionalExperiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-130 transition-transform duration-200" />

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                  <div>
                    <h3 className="font-sans text-base font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 font-medium">
                      {exp.company} <span className="text-slate-650">•</span> <span className="text-slate-500">{exp.location}</span>
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-850">
                    {exp.duration}
                  </span>
                </div>

                <p className="font-sans text-xs text-slate-400 leading-relaxed italic">
                  {exp.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-1.5 pl-1.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="font-sans text-xs text-slate-400 flex items-start gap-2 leading-relaxed">
                      <span className="text-indigo-500 mt-1.5">▪</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills indicators */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skillsUsed.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded border border-slate-850 bg-slate-950 font-mono text-[9px] text-slate-400">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CONTACT & COMPILER FEEDBACK */}
      <section id="contact-section" className="pt-8 border-t border-slate-900">
        <div className="max-w-3xl mx-auto p-6 md:p-8 bg-slate-950 border border-slate-800 rounded-3xl space-y-6 shadow-2xl relative">
          <div className="absolute top-0 right-10 w-24 h-24 bg-sky-400/5 rounded-full blur-xl pointer-events-none" />

          <div className="text-center space-y-2 max-w-lg mx-auto">
            <h2 className="font-sans text-xl font-bold text-slate-200 tracking-tight">
              Compile a Connection
            </h2>
            <p className="font-sans text-xs text-slate-400">
              Send a request straight to my developer console.
            </p>
          </div>

          <form onSubmit={handleSubmitContact} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">Your Name</label>
                <input 
                  type="text" 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Aman Kumar" 
                  disabled={contactSubmitted}
                  required
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-800 bg-slate-900 text-slate-150 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20 disabled:opacity-50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">Your Email</label>
                <input 
                  type="email" 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="e.g. aman@gmail.com" 
                  disabled={contactSubmitted}
                  required
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-800 bg-slate-900 text-slate-150 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20 disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">Message Codebase</label>
              <textarea 
                rows={4}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="Declare your objectives, projects scope, or feedback parameters..." 
                disabled={contactSubmitted}
                required
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-800 bg-slate-900 text-slate-150 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20 disabled:opacity-50 resize-none font-sans"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="font-mono text-[10px] text-slate-500">
                {contactSubmitted ? (
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" /> Message compiled & queued successfully! <br /> "Check spam folder"
                  </span>
                ) : (
                  <span>Status: Ready to transmit</span>
                )}
              </div>

              <button
                type="submit"
                disabled={contactSubmitted}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:brightness-110 active:scale-97 text-slate-950 font-mono text-[11px] font-bold tracking-wider flex items-center gap-2 border border-sky-400/20 shadow-md transition disabled:opacity-50"
              >
                <span>TRANSMIT SIGNAL</span>
                <Send className="h-3 w-3" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
