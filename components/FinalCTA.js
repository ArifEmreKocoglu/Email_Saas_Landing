"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function FinalCTA() {
  const { t } = useLocale();

  return (
    <section
      className="w-full py-20 md:py-28 px-4 md:px-6 text-center"
      style={{
        background: "var(--background)",
        color: "var(--foreground)"
      }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl md:text-5xl font-semibold mb-6 md:mb-8"
        style={{ color: "var(--foreground)" }}
      >
        {t.cta_title}
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="max-w-lg mx-auto mb-6 md:mb-8 text-base md:text-lg"
        style={{
          color: "color-mix(in srgb, var(--foreground) 75%, transparent)"
        }}
      >
        {t.cta_desc}
      </motion.p>

      {/* Button */}
      <motion.button
        // Artık yukarı-aşağı kayma yok, sadece fade + scale
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="px-8 py-3 md:px-12 md:py-4 rounded-full font-semibold transition-colors duration-200"
        style={{
          background: "var(--foreground)",
          color: "var(--background)"
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
      >
        {t.cta_button}
      </motion.button>
    </section>
  );
}