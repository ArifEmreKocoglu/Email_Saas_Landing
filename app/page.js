"use client";

import { useEffect, useState } from "react";

import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { useLocale } from "@/context/LocaleContext";
import MailFlowBackground from "@/components/MailFlowBackground";
import FlowSection from "@/components/FlowSection";

import AISortingDemonstration from "@/components/AISortingDemonstration";


import MailTaggingShowcase from "@/components/MailTaggingShowcase";

export default function Home() {
  const { t } = useLocale();
  const [flowOpen, setFlowOpen] = useState(false);
  const [autoDone, setAutoDone] = useState(false);

useEffect(() => {
  const target = document.getElementById("features");
  if (!target) return;

  const onScroll = () => {
    if (autoDone) return;

    const rect = target.getBoundingClientRect();


    if (rect.bottom < window.innerHeight * 0.25) {
      setFlowOpen(true);
      setAutoDone(true);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, [autoDone]);

  useEffect(() => {
    window.triggerFlow = () => setFlowOpen(true);
    window.closeFlow = () => setFlowOpen(false);
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-hidden">

      {flowOpen && <FlowSection onExit={() => setFlowOpen(false)} />}

      <div className="relative z-10">

        <section
          id="hero"
          className="h-screen relative flex flex-col items-center justify-center text-center px-4 md:px-6"
        >

      <div className="absolute inset-0 z-0">
              <MailFlowBackground />
            </div>
            <h1
              className="relative z-20 text-4xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to bottom, #ffffff, #a5a5a5)`, // Daha net, metalik bir beyaz
                textShadow: "0 20px 80px rgba(255,255,255,0.2)" // Arkadaki karmaşadan ayırmak için gölge
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



        <section 
            id="ai-demo" 
            className="w-full py-16 md:py-24"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                    Yapay Zeka Farkı
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                    Gelen kutunuzu anında okur, anlar ve otomatik olarak doğru yere yönlendirir.
                </p>
            </div>
            <AISortingDemonstration />
        </section>


        <MailTaggingShowcase />

        <Features />
        <Pricing />
        {/* <FinalCTA /> */}
        <Footer />
      </div>
    </main>
  );
}