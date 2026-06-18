import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Terminal, Info, Mail, Github, Linkedin } from 'lucide-react';
import { developerProfile } from '../data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setIsSubmitting(true);
    
    // Simulate real action submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      
      // Cleanup inputs
      setTimeout(() => {
        setIsDone(false);
        setName('');
        setEmail('');
        setMessage('');
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/40">
              <span className="font-mono text-xs text-sky-400 font-semibold flex items-center gap-1.5 uppercase tracking-wider">
                <Terminal className="h-4 w-4" /> TRANSMIT TELEMETRY SIGNAL
              </span>
              <button 
                onClick={onClose}
                className="p-1 rounded-md text-slate-400 hover:text-slate-100 bg-slate-950/50 border border-slate-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {isDone ? (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 animate-bounce">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-sans text-sm font-bold text-slate-100">TRANSMISSION ESTABLISHED</p>
                    <p className="font-sans text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                      Your diagnostic message payload has been validated and queued for the next cron-scheduler execution cycle.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">User Identity / Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alexis Carter"
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-800 bg-slate-950 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500 font-sans disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">Sender Address / Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alexis@corporation.com"
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-800 bg-slate-950 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500 font-sans disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">Signals Payload / Message</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Define collaboration objectives, parameters, or technical queries..."
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-800 bg-slate-950 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500 font-sans resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Dynamic Indicators */}
                  <div className="pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-t border-slate-800/60 mt-4">
                    <div className="flex gap-2 text-slate-500 text-[10px] font-mono items-center">
                      <Info className="h-3.5 w-3.5" />
                      <span>Ready for ingestion</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-4.5 py-2.0 rounded bg-sky-500 hover:brightness-110 active:scale-97 text-slate-950 font-mono text-[11px] font-bold tracking-wider float-right flex items-center justify-center gap-2 transition"
                    >
                      <span>{isSubmitting ? 'INGESTING PAYLOAD...' : 'TRANSMIT SIGNAL'}</span>
                      <Send className="h-3 w-3" />
                    </button>
                  </div>
                </form>
              )}

              {/* Direct channels */}
              {!isDone && (
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-between items-center bg-slate-950/60 rounded-xl p-3">
                  <div className="flex items-center gap-2 font-sans text-xs text-slate-400">
                    <Mail className="h-4 w-4 text-sky-400" />
                    <span>ishaan.dev@example.com</span>
                  </div>
                  <div className="flex gap-2">
                    <a href={developerProfile.github} target="_blank" rel="noreferrer" className="p-1 rounded text-slate-400 hover:text-slate-100 transition">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href={developerProfile.linkedin} target="_blank" rel="noreferrer" className="p-1 rounded text-slate-400 hover:text-slate-100 transition">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
