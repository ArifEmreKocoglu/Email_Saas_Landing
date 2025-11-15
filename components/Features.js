"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function Features() {
  const { t } = useLocale();

  return (
    <section
      className="w-full py-20 md:py-28 px-4 md:px-6 relative"
      style={{
        background: "var(--background)",
        color: "var(--foreground)"
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl md:text-5xl font-semibold mb-12"
        style={{
          color: "var(--foreground)"
        }}
      >
        {t.features_title}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {t.features?.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.55,
              delay: i * 0.1,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.05,
              rotateX: 2,
              rotateY: -2,
              // 👇 Hover'ı Pricing'deki gibi hızlı ve keskin yap
              transition: {
                type: "tween",
                duration: 0.30,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            className="p-6 rounded-2xl border backdrop-blur-md cursor-pointer"
            style={{
              background: "color-mix(in srgb, var(--foreground) 2%, transparent)",
              borderColor: "color-mix(in srgb, var(--foreground) 12%, transparent)",
              boxShadow: "0 0 25px -10px rgba(0,0,0,0.25)"
            }}
          >
            <div
              className="text-4xl mb-4"
              style={{ color: "var(--foreground)" }}
            >
              {["📬","⚙️","🔗","💬","📂","🔒"][i]}
            </div>

            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              {f.title}
            </h3>

            <p
              className="text-sm leading-relaxed"
              style={{
                color: "color-mix(in srgb, var(--foreground) 70%, transparent)"
              }}
            >
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}