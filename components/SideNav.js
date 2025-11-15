"use client";

import { useLocale } from "@/context/LocaleContext";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", key: "nav_hero" },
  { id: "features", key: "nav_features" },
  { id: "pricing", key: "nav_pricing" },
  { id: "cta", key: "nav_cta" },
];

export default function SideNav() {
  const { t } = useLocale();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* DESKTOP LEFT NAV */}
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">

        {sections.map((s, i) => (
          <motion.button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="px-4 py-2 rounded-full bg-black/20 backdrop-blur-md text-white text-sm hover:bg-black/40 transition"
            style={{
              background: "color-mix(in srgb, var(--foreground) 10%, transparent)",
              color: "var(--foreground)",
            }}
          >
            {t[s.key]}
          </motion.button>
        ))}

        {/* Login & Signup */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            className="px-4 py-2 rounded-full border text-sm"
            style={{
              background: "var(--background)",
              color: "var(--foreground)",
              border: "1px solid color-mix(in srgb, var(--foreground) 30%, transparent)"
            }}
          >
            {t.nav_login}
          </button>

          <button
            className="px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: "var(--foreground)",
              color: "var(--background)"
            }}
          >
            {t.nav_signup}
          </button>
        </div>
      </div>


      {/* MOBILE BOTTOM NAV */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/30 backdrop-blur-xl px-4 py-3 flex justify-between gap-3 rounded-full"
        style={{
          background: "color-mix(in srgb, var(--foreground) 10%, transparent)",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="text-xs px-3 py-1 rounded-full"
            style={{ color: "var(--foreground)" }}
          >
            {t[s.key]}
          </button>
        ))}
      </div>
    </>
  );
}