'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Wand2, 
  Check, 
  X, 
  RotateCcw, 
  Briefcase, 
  Rocket, 
  BookOpen, 
  Coffee, 
  Send,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { generateAiEmail, EmailIntent, EmailTone, GeneratedEmail } from '@/lib/aiComposer';

interface AiHelpMeWriteProps {
  senderName: string;
  onApply: (subject: string, message: string) => void;
}

const INTENT_CHIPS: { label: string; intent: EmailIntent; icon: any; defaultPrompt: string }[] = [
  { label: '💼 SDE Job Opportunity', intent: 'job', icon: Briefcase, defaultPrompt: 'Full-stack / backend software engineering position' },
  { label: '🚀 Project Collaboration', intent: 'collab', icon: Rocket, defaultPrompt: 'Web application & backend API development partnership' },
  { label: '🦋 Book Collaboration', intent: 'book', icon: BookOpen, defaultPrompt: 'Discussing "Breaking Walls, Building Wings" book' },
  { label: '☕ Virtual Coffee Chat', intent: 'coffee', icon: Coffee, defaultPrompt: '15-min chat about engineering journey & tech insights' },
];

const TONES: { id: EmailTone; label: string; icon: string }[] = [
  { id: 'professional', label: 'Professional', icon: '👔' },
  { id: 'concise', label: 'Concise', icon: '⚡' },
  { id: 'enthusiastic', label: 'Enthusiastic', icon: '✨' },
  { id: 'technical', label: 'Technical', icon: '🛠️' },
];

export default function AiHelpMeWrite({ senderName, onApply }: AiHelpMeWriteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<EmailIntent>('job');
  const [tone, setTone] = useState<EmailTone>('professional');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [draft, setDraft] = useState<GeneratedEmail | null>(null);
  const [copiedFeedback, setCopiedFeedback] = useState(false);

  const handleGenerate = async (overrideTone?: EmailTone) => {
    setIsGenerating(true);
    const activeTone = overrideTone || tone;
    
    // Smooth generation feedback
    await new Promise((resolve) => setTimeout(resolve, 350));
    
    const result = await generateAiEmail({
      intent,
      tone: activeTone,
      customPrompt,
      senderName,
    });

    setDraft(result);
    setIsGenerating(false);
  };

  const handleApply = () => {
    if (draft) {
      onApply(draft.subject, draft.message);
      setCopiedFeedback(true);
      setTimeout(() => {
        setCopiedFeedback(false);
        setIsOpen(false);
      }, 500);
    }
  };

  const handleChipClick = (selectedIntent: EmailIntent, prompt: string) => {
    setIntent(selectedIntent);
    setCustomPrompt(prompt);
  };

  return (
    <div className="mb-4">
      {/* Trigger Button (Gmail Help Me Write Style) */}
      {!isOpen ? (
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            if (!draft) handleGenerate();
          }}
          className="group inline-flex items-center gap-2 text-xs font-semibold text-[#a89cf7] hover:text-white bg-[#7B6EF6]/10 hover:bg-[#7B6EF6]/20 border border-[#7B6EF6]/30 hover:border-[#7B6EF6]/60 px-3.5 py-1.5 rounded-full transition-all duration-200 shadow-sm cursor-pointer"
        >
          <Sparkles size={13} className="text-[#7B6EF6] group-hover:rotate-12 transition-transform" />
          <span>✨ Help me write with AI</span>
          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.2 rounded font-mono">
            FREE
          </span>
        </button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className="bg-[#0f0f1a] border border-[#7B6EF6]/40 rounded-2xl p-5 shadow-2xl relative overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#1e1e2e] mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#7B6EF6]/20 border border-[#7B6EF6]/40 flex items-center justify-center">
                  <Sparkles size={13} className="text-[#7B6EF6]" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  AI Draft Assistant
                </h4>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded font-mono">
                  Gmail Style · Free
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[#55556a] hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            {/* Quick 1-Tap Chips */}
            <div className="mb-4">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#666680] mb-2">
                What are you reaching out for?
              </label>
              <div className="flex flex-wrap gap-1.5">
                {INTENT_CHIPS.map((chip) => {
                  const Icon = chip.icon;
                  const isActive = intent === chip.intent;
                  return (
                    <button
                      key={chip.intent}
                      type="button"
                      onClick={() => handleChipClick(chip.intent, chip.defaultPrompt)}
                      className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#7B6EF6]/20 border-[#7B6EF6] text-white font-semibold'
                          : 'bg-[#141424] border-[#1e1e2e] text-[#8888a8] hover:text-white hover:border-[#2a2a3e]'
                      }`}
                    >
                      <Icon size={12} className={isActive ? 'text-[#7B6EF6]' : 'text-[#55556a]'} />
                      {chip.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Instruction Box */}
            <div className="mb-4">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#666680] mb-1.5">
                Custom Details / Quick Notes (Optional)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="e.g. Hiring for SDE role, remote, salary 20-30 LPA..."
                  className="flex-1 bg-[#141424] border border-[#1e1e2e] focus:border-[#7B6EF6]/50 text-white placeholder-[#44445a] text-xs px-3 py-2 rounded-xl outline-none transition-colors"
                />
                <button
                  type="button"
                  disabled={isGenerating}
                  onClick={() => handleGenerate()}
                  className="inline-flex items-center gap-1.5 bg-[#7B6EF6] hover:bg-[#685ad8] disabled:opacity-50 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  <Wand2 size={13} />
                  {isGenerating ? 'Drafting…' : 'Generate'}
                </button>
              </div>
            </div>

            {/* Tone Selector */}
            <div className="flex flex-wrap items-center gap-1.5 mb-4 pt-3 border-t border-[#1e1e2e]/60">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#55556a] mr-1">
                Tone:
              </span>
              {TONES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTone(t.id);
                    handleGenerate(t.id);
                  }}
                  className={`text-[11px] px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                    tone === t.id
                      ? 'bg-[#7B6EF6]/20 border-[#7B6EF6] text-[#c4b5fd] font-bold'
                      : 'bg-[#141424] border-[#1e1e2e] text-[#666680] hover:text-white'
                  }`}
                >
                  <span className="mr-1">{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Draft Output Preview */}
            {draft && (
              <div className="bg-[#0a0a14] border border-[#1e1e2e] rounded-xl p-4 mb-4">
                <div className="mb-2.5 pb-2 border-b border-[#1e1e2e]">
                  <span className="text-[10px] font-mono uppercase text-[#7B6EF6] font-bold block mb-0.5">
                    Generated Subject:
                  </span>
                  <p className="text-xs font-semibold text-white">
                    {draft.subject}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-[#7B6EF6] font-bold block mb-1">
                    Generated Message:
                  </span>
                  <p className="text-xs text-[#a0a0c0] whitespace-pre-line leading-relaxed max-h-48 overflow-y-auto pr-1">
                    {draft.message}
                  </p>
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    const newTone = tone === 'concise' ? 'professional' : 'concise';
                    setTone(newTone);
                    handleGenerate(newTone);
                  }}
                  className="text-[11px] font-semibold text-[#8888a8] hover:text-white bg-[#141424] border border-[#1e1e2e] hover:border-[#7B6EF6]/30 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer"
                >
                  ⚡ {tone === 'concise' ? 'Full Length' : 'Make Shorter'}
                </button>
                <button
                  type="button"
                  onClick={() => handleGenerate()}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8888a8] hover:text-white bg-[#141424] border border-[#1e1e2e] hover:border-[#7B6EF6]/30 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer"
                  title="Regenerate draft"
                >
                  <RotateCcw size={11} /> Rephrase
                </button>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-medium text-[#666680] hover:text-white px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  Discard
                </button>
                <button
                  type="button"
                  onClick={handleApply}
                  disabled={!draft}
                  className="inline-flex items-center gap-1.5 bg-[#7B6EF6] hover:bg-[#685ad8] text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-all shadow-md shadow-[#7B6EF6]/20 cursor-pointer"
                >
                  {copiedFeedback ? (
                    <>
                      <Check size={13} className="text-emerald-300" /> Inserted!
                    </>
                  ) : (
                    <>
                      <Check size={13} /> Insert into Form
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
