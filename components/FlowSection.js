"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FlowSection({ onExit }) {
  const [index, setIndex] = useState(0);
  const scrolling = useRef(false);
  const skipFirstWheel = useRef(true);
  const wrapperRef = useRef(null);

  const steps = [
    { icon: "📥", title: "E-posta Alınıyor", desc: "Gelen kutusu taranıyor." },
    { icon: "🧠", title: "AI Analiz", desc: "Tier-0 → Tier-1 → Tier-2." },
    { icon: "🏷️", title: "Etiketleme", desc: "Kategori ve renk atanıyor." },
    { icon: "📨", title: "Reply Tespiti", desc: "Cevap bekleyenler ayrılıyor." },
    { icon: "⚡", title: "Automation", desc: "Workflow’lar tetikleniyor." },
    { icon: "🛡️", title: "Güvenlik", desc: "Tamamen izole & şifreli ortam." }
  ];

  /* ===== BODY SCROLL LOCK ===== */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => (skipFirstWheel.current = false), 300);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "auto";
    };
  }, []);

  /* ===== HEADER + NAV EXIT ===== */
  useEffect(() => {
    window.closeFlow = () => onExit?.();
  }, [onExit]);


  /* ===== DESKTOP SCROLL ===== */
  const handleWheel = (e) => {
    if (skipFirstWheel.current) return;
    if (scrolling.current) return;

    scrolling.current = true;

    if (e.deltaY > 0) {
      if (index < steps.length - 1) setIndex((p) => p + 1);
      else setTimeout(() => onExit?.(), 200);
    } else {
      if (index > 0) setIndex((p) => p - 1);
    }

    setTimeout(() => {
      scrolling.current = false;
    }, 450);
  };


  /* ===== MOBILE TOUCH SWIPE ===== */
  useEffect(() => {
    let startY = 0;
    let endY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      endY = e.changedTouches[0].clientY;
      const diff = startY - endY;

      if (Math.abs(diff) < 40) return;
      if (scrolling.current) return;

      scrolling.current = true;

      if (diff > 0) {
        // swipe UP → next step
        if (index < steps.length - 1) setIndex((p) => p + 1);
        else setTimeout(() => onExit?.(), 200);
      } else {
        // swipe DOWN → previous step
        if (index > 0) setIndex((p) => p - 1);
      }

      setTimeout(() => {
        scrolling.current = false;
      }, 450);
    };

    const el = wrapperRef.current;
    if (!el) return;

    el.addEventListener("touchstart", handleTouchStart, { passive: false });
    el.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [index, onExit, steps.length]);


  /* ===== CLICK → EXIT (header/nav buttons) ===== */
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("[data-close-flow='true']");
      if (target) onExit?.();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [onExit]);


  return (
    <section
      ref={wrapperRef}
      onWheel={handleWheel}
      className="
        fixed inset-0 z-[49]
        flex flex-col items-center justify-center
        bg-gradient-to-br from-[#0b0018] via-[#4c0088] to-black
        text-white overflow-hidden
      "
      style={{ touchAction: "none" }}  // 🌟 mobilde sayfanın kaymasını engeller
    >

      {/* PROGRESS BAR (YATAY) */}
      <div className="fixed lg:top-8 top-20 left-1/2 -translate-x-1/2 lg:w-[80%] w-[90%] max-w-4xl z-[160]">
        <div className="relative w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-300 to-white"
            style={{
              width: `${((index + 1) / steps.length) * 100}%`
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        <div className="flex justify-between mt-3">
          {steps.map((_, i) => {
            const active = i === index;
            const done = i < index;

            return (
              <div
                key={i}
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  transition-all duration-300
                  ${active ? "bg-white text-black scale-110 shadow-lg" :
                    done ? "bg-white/70 text-black" :
                    "bg-white/25 text-white/70"}
                `}
              >
                {done ? "✓" : i + 1}
              </div>
            );
          })}
        </div>
      </div>

      {/* STEP CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center max-w-2xl px-6 mt-20"
        >
          <div className="text-7xl md:text-8xl mb-8">
            {steps[index].icon}
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {steps[index].title}
          </h2>

          <p className="text-lg md:text-2xl opacity-85 leading-relaxed">
            {steps[index].desc}
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}