"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function FinalCTA() {
  const { t } = useLocale();

  return (
    <section
      id="cta"
      className="
      scroll-mt-[20vh]
        w-full 
        px-4 md:px-6 
        text-center
        pt-28 md:pt-36
        pb-28 md:pb-40
        min-h-[90vh]
        flex flex-col items-center justify-center
      "
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="
          text-4xl md:text-6xl 
          font-bold 
          mb-8 md:mb-10
          leading-tight
        "
        style={{ color: "var(--foreground)" }}
      >
        {t.cta_title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="
          max-w-2xl 
          mx-auto 
          mb-10 md:mb-14
          text-lg md:text-2xl
          leading-relaxed
        "
        style={{
          color: "color-mix(in srgb, var(--foreground) 75%, transparent)",
        }}
      >
        {t.cta_desc}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{
          duration: 0.55,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.96 }}
        className="
          px-10 md:px-14 
          py-4 md:py-5
          rounded-full 
          font-semibold
          text-lg md:text-2xl
          shadow-xl
        "
        style={{
          background: "var(--foreground)",
          color: "var(--background)",
        }}
      >
        {t.cta_button}
      </motion.button>
    </section>
  );
}