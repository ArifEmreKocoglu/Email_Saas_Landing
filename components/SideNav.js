"use client";

import { useLocale } from "@/context/LocaleContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", key: "nav_hero" },
  { id: "features", key: "nav_features" },
  { id: "pricing", key: "nav_pricing" },
  { id: "cta", key: "nav_cta" },
];

export default function SideNav() {
  const { t } = useLocale();
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", 
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
  
    // get absolute position BEFORE centering logic
    const rect = el.getBoundingClientRect();
    const elementY = rect.top + window.scrollY;
  
    const sectionHeight = rect.height;
    const windowHeight = window.innerHeight;
  
    // always center (best UX)
    const offset = (windowHeight - sectionHeight) / 2;
  
    // final Y target
    const targetY = elementY - offset;
  
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };
  
  
  /* ------------------------------------------- */
  const activeStyle = {
    background: "var(--foreground)",
    color: "var(--background)",
    boxShadow: "0 0 25px -4px var(--foreground)",
    transform: "scale(1.12)",
    fontWeight: 600,
  };

  const baseStyle = {
    background: "color-mix(in srgb, var(--foreground) 10%, transparent)",
    color: "var(--foreground)",
    opacity: 0.75,
  };

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">

        {sections.map((s, i) => (
          <motion.button
          data-close-flow="true"
            key={s.id}
            onClick={() => scrollTo(s.id)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="px-4 py-2 rounded-full text-sm backdrop-blur-xl transition-all"
            style={active === s.id ? activeStyle : baseStyle}
            whileHover={{ scale: 1.07 }}
          >
            {t[s.key]}
          </motion.button>
        ))}

        <div className="mt-6 flex flex-col gap-3">
          <button
          data-close-flow="true"
            className="px-4 py-2 rounded-full text-sm border hover:opacity-80 transition-all"
            style={{
              background: "var(--background)",
              color: "var(--foreground)",
              border:
                "1px solid color-mix(in srgb, var(--foreground) 30%, transparent)",
            }}
          >
            {t.nav_login}
          </button>

          <button
              onClick={() => window.triggerFlow?.()}
              className="mt-8 px-8 py-3 rounded-full font-semibold text-sm md:text-base"
              style={{
                background: "linear-gradient(135deg, #5f00ff, #9a34ff)",
                color: "white"
              }}
          >
            See how it works
          </button>

        </div>
      </div>

      {/* MOBILE */}
      <div
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-3 flex justify-between gap-3 rounded-full backdrop-blur-xl"
        style={{
          background:
            "color-mix(in srgb, var(--foreground) 10%, transparent)",
        }}
      >
        {sections.map((s) => (
          <motion.button
            key={s.id}
            data-close-flow="true"
            onClick={() => scrollTo(s.id)}
            className="text-xs px-3 py-1 rounded-full transition-all"
            style={
              active === s.id
                ? {
                    background: "var(--foreground)",
                    color: "var(--background)",
                    fontWeight: 600,
                    transform: "scale(1.1)",
                  }
                : { color: "var(--foreground)", opacity: 0.75 }
            }
            whileHover={{ scale: 1.08 }}
          >
            {t[s.key]}
          </motion.button>
        ))}


        <button
          onClick={() => window.triggerFlow?.()}
          className="font-semibold text-xs"
          style={{
            background: "linear-gradient(135deg, #5f00ff, #9a34ff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            display: "inline-block",
          }}
        >
          works
        </button>
      </div>
    </>
  );
}