"use client";

import HeroCanvas from "@/components/HeroCanvas";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { useLocale } from "@/context/LocaleContext";
import AuroraBackground from "@/components/AuroraBackground";
import MailFlowBackground from "@/components/MailFlowBackground";
export default function Home() {
  const { t } = useLocale();

  return (
    
    <main  className="relative w-full min-h-screen overflow-hidden">

      <div className="absolute inset-0 z-0">
        {/* <AuroraBackground /> */}
        <MailFlowBackground />
      </div>
      <div className="absolute inset-0 z-0">
        {/* <HeroCanvas /> */}
      </div>

      <div className="relative z-10">

        <section id="hero" className="h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 animate-heroFade scroll-mt-[20vh]">

          <h1
            className="text-3xl md:text-6xl font-extrabold leading-tight md:leading-[1.1] bg-clip-text text-transparent"
            style={{
              backgroundImage:
                `linear-gradient(to bottom right, var(--foreground), var(--foreground))`
            }}
          >
            {t.hero_title}
          </h1>

          <p
            className="mt-3 md:mt-5 text-base md:text-xl max-w-sm md:max-w-xl"
            style={{
              color: "color-mix(in srgb, var(--foreground) 80%, transparent)"
            }}
          >
            {t.hero_sub}
          </p>

          <button
            className="mt-6 md:mt-8 px-8 py-3 rounded-full font-semibold transition text-sm md:text-base border"
            style={{
              background: "var(--background)",
              color: "var(--foreground)",
              borderColor: "color-mix(in srgb, var(--foreground) 40%, transparent)"
            }}
          >
            {t.get_started}
          </button>

        </section>

        <Features />
        <Pricing />
        <FinalCTA />
        <Footer />

      </div>
    </main>
  );
}