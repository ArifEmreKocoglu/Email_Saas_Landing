"use client";

import { useEffect, useState } from "react";

import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { useLocale } from "@/context/LocaleContext";
import MailFlowBackground from "@/components/MailFlowBackground";
import FlowSection from "@/components/FlowSection";

export default function Home() {
  const { t } = useLocale();
  const [flowOpen, setFlowOpen] = useState(false);
  const [autoDone, setAutoDone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (autoDone) return;
      if (window.scrollY > 30 && !flowOpen) {
        setFlowOpen(true);
        setAutoDone(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [flowOpen, autoDone]);

  useEffect(() => {
    window.triggerFlow = () => setFlowOpen(true);
    window.closeFlow = () => setFlowOpen(false);
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-hidden">

      {flowOpen && <FlowSection onExit={() => setFlowOpen(false)} />}

      <div className="absolute inset-0 z-0">
        <MailFlowBackground />
      </div>

      <div className="relative z-10">

        <section
          id="hero"
          className="h-screen flex flex-col items-center justify-center text-center px-4 md:px-6"
        >
          <h1
            className="text-3xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(to bottom right, var(--foreground), var(--foreground))`,
            }}
          >
            {t.hero_title}
          </h1>

          <p
            className="mt-4 md:mt-6 text-base md:text-xl max-w-xl"
            style={{
              color: "color-mix(in srgb, var(--foreground) 80%, transparent)",
            }}
          >
            {t.hero_sub}
          </p>
          <div className="flex flex-row justify-center items-center gap-5">
            <button
              className="mt-8 px-8 py-3 rounded-full font-semibold text-sm md:text-base border"
              style={{
                background: "var(--background)",
                color: "var(--foreground)",
                borderColor: "color-mix(in srgb, var(--foreground) 40%, transparent)",
              }}
            >
              {t.get_started}
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
        </section>

        <Features />
        <Pricing />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}