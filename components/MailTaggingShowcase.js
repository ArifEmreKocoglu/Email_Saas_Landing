"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sparkles, Tag as TagIcon } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const DEMO_EMAILS = [
  {
    id: 1,
    sender: "Stripe",
    subject: "Your payout is on the way",
    preview: "Hi Arif, your latest payout has just been initiated...",
    time: "09:24",
    labels: ["Finance", "Invoices"],
  },
  {
    id: 2,
    sender: "Shopify Support",
    subject: "We’ve updated your app review",
    preview: "Thanks for submitting your latest version. Here’s what changed...",
    time: "10:02",
    labels: ["Support"],
  },
  {
    id: 3,
    sender: "Security Alerts",
    subject: "New login from Chrome on macOS",
    preview: "We detected a new login to your account from Istanbul...",
    time: "10:37",
    labels: ["Security", "Urgent"],
  },
  {
    id: 4,
    sender: "Newsletters",
    subject: "Top growth marketing tactics for 2025",
    preview: "From onboarding flows to LTV optimization, here’s what’s working...",
    time: "11:15",
    labels: ["Marketing"],
  },
];

const LABEL_STYLES = {
  Finance: "bg-emerald-500/10 text-emerald-300 border-emerald-500/40",
  Invoices: "bg-violet-500/10 text-violet-300 border-violet-500/40",
  Support: "bg-sky-500/10 text-sky-300 border-sky-500/40",
  Security: "bg-amber-500/10 text-amber-300 border-amber-500/40",
  Urgent: "bg-rose-500/10 text-rose-300 border-rose-500/40",
  Marketing: "bg-indigo-500/10 text-indigo-300 border-indigo-500/40",
  "AI Sorted": "bg-amber-500/10 text-amber-200 border-amber-400/40",
};

export default function MailTaggingShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEmail = DEMO_EMAILS[activeIndex];

  return (
    <section className="relative py-16 md:py-24 px-4 border-t border-white/5 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.16),transparent_60%),#020617]">
      {/* ANA DÜZEN: lg:grid-cols-2 kaldırıldı. Her zaman dikey (tek sütun) akış. */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24 items-center">
        
        {/* 1. SATIR: Sol: text - Metin ve Özellikler */}
        <div className="space-y-6 text-center lg:text-left w-full max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs md:text-sm font-medium text-slate-200 mx-auto lg:mx-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>AI reads every email for you</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-50">
            AI tags your inbox in real time.
          </h2>

          <p className="text-base md:text-xl text-slate-300/85 max-w-full mx-auto lg:mx-0">
            Entrfy reads each email, understands intent and urgency, and applies
            clear labels you see in the list and inside the email.
          </p>

          {/* ÖZELLİK LİSTESİ (2x2): sm ekranlardan itibaren 2 sütunlu, mobil tek sütunlu */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto lg:mx-0 pt-4">
            <FeatureItem
              title="Smart categories"
              desc="Finance, Security, Support, Marketing and more."
            />
            <FeatureItem
              title="Inline labels"
              desc="Visible on the row and in the email."
            />
            <FeatureItem
              title="Priority detection"
              desc="Urgent and risky items stand out."
            />
            <FeatureItem
              title="Always in sync"
              desc="Changes sync back to Gmail labels."
            />
          </div>
        </div>
        
        {/* 2. SATIR: Sağ: card (E-posta Kartı) - Daha büyük ve aşağıda */}
        {/* max-w-4xl (daha büyük) ve w-full ile yatayda daha geniş alan kullanıldı */}
        <div className="relative w-full max-w-4xl mx-auto"> 
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-sky-400/40 opacity-40 blur-xl" />
          <div className="relative rounded-3xl border border-white/15 bg-slate-950/85 backdrop-blur-xl shadow-[0_24px_80px_rgba(15,23,42,0.9)] px-3.5 py-4 md:px-6 md:py-6 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300/80">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                <span>Primary inbox · Today</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] md:text-xs text-slate-400 flex-shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                <span>AI auto-tagging</span>
              </div>
            </div>

            {/* İç grid yapısı: Büyük ekranlarda hala yan yana durması gerekiyor */}
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)] items-stretch">
              {/* Liste */}
              <div className="space-y-2.5 lg:pr-3 lg:border-r lg:border-white/5">
                {DEMO_EMAILS.map((mail, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <motion.button
                      key={mail.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={cn(
                        "w-full rounded-2xl px-3.5 py-2.5 text-left text-sm md:text-base flex flex-col gap-1 border transition-all",
                        "bg-slate-900/60 border-slate-700/60 text-slate-200/85",
                        isActive &&
                          "bg-indigo-500/15 border-indigo-400/60 shadow-[0_0_0_1px_rgba(129,140,248,0.6),0_18px_45px_rgba(15,23,42,0.9)]"
                      )}
                      whileHover={{ y: -1, scale: 1.01 }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold truncate">
                          {mail.sender}
                        </span>
                        <span className="text-[11px] md:text-xs text-slate-400 flex-shrink-0">
                          {mail.time}
                        </span>
                      </div>
                      <div className="truncate text-slate-100">
                        {mail.subject}
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-xs md:text-sm text-slate-400">
                          {mail.preview}
                        </p>
                        <div className="flex flex-shrink-0 gap-1">
                          {mail.labels.slice(0, 2).map((label) => (
                            <span
                              key={label}
                              className={cn(
                                "px-1.5 py-0.5 rounded-full border text-[11px] md:text-xs font-medium flex-shrink-0", 
                                LABEL_STYLES[label] ||
                                  "bg-slate-700/40 text-slate-200"
                              )}
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Detay */}
              <div className="flex flex-col gap-3 md:gap-4 pt-4 lg:pt-0 border-t border-white/5 lg:border-t-0">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 md:w-12 md:h-12 flex-shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 opacity-60 blur-md" />
                    <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-white/20 bg-slate-950/90">
                      <Sparkles className="w-5 h-5 text-indigo-100" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-semibold text-slate-50 truncate">
                      Entrfy AI engine reads the email
                    </p>
                    <p className="text-xs md:text-sm text-slate-400 truncate">
                      Intent, topic and risk are detected in milliseconds.
                    </p>
                  </div>
                </div>

                <div className="relative flex-1 rounded-2xl border border-white/10 bg-slate-950/90 px-3.5 py-3 md:px-4 md:py-4 overflow-hidden">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-transparent blur-2xl" />

                  <header className="flex items-start justify-between gap-2 mb-3">
                    <div className='min-w-0'>
                      <p className="text-xs md:text-sm text-slate-400 truncate">
                        {activeEmail.sender}
                      </p>
                      <h3 className="text-sm md:text-lg font-semibold text-slate-50 truncate">
                        {activeEmail.subject}
                      </h3>
                    </div>
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-slate-500 flex-shrink-0" />
                  </header>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <AnimatePresence initial={false}>
                      {activeEmail.labels.concat("AI Sorted").map((label) => (
                        <motion.span
                          key={label}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.18 }}
                          className={cn(
                            "inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-[11px] md:text-xs font-medium flex-shrink-0",
                            LABEL_STYLES[label] ||
                              "bg-slate-800/80 text-slate-100 border-slate-600/60"
                          )}
                        >
                          {label === "AI Sorted" ? (
                            <Sparkles className="w-3 h-3" />
                          ) : (
                            <TagIcon className="w-3 h-3" />
                          )}
                          <span>{label}</span>
                        </motion.span>
                      ))}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-1.5 text-xs md:text-sm text-slate-200/90 leading-relaxed min-h-[88px] md:min-h-[104px]">
                    <p>“Hi Arif, just a quick update from your account...”</p>
                    <p className="text-slate-400">
                      Entrfy tags this email so you can find it instantly under
                      the right category.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-slate-400">
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Labels update as your inbox changes.</span>
              </div>
              <span className="text-slate-500 text-right flex-shrink-0">
                Powered by a multi-tier LLM pipeline.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, desc }) {
  // Mobil: Merkezde hizalı. Masaüstü: Sola hizalı
  return (
    <div className="flex items-start gap-3 justify-center sm:justify-start max-w-full">
      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/15 border border-indigo-400/40 flex-shrink-0">
        <Sparkles className="w-4 h-4 text-indigo-200" />
      </div>
      <div className="space-y-1 max-w-none text-left">
        <p className="text-base md:text-xl font-semibold text-slate-50">
          {title}
        </p>
        <p className="text-sm md:text-lg text-slate-400">{desc}</p>
      </div>
    </div>
  );
}