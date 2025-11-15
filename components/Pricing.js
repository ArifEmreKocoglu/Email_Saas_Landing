"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function Pricing() {
  const { t } = useLocale();

  return (
    <section
      className="w-full py-20 md:py-28 px-4 md:px-6 relative"
      style={{
        background: "var(--background)",
        color: "var(--foreground)"
      }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}  // 👈 her göründüğünde tekrar animasyon
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="text-center text-3xl md:text-5xl font-semibold mb-12"
        style={{ color: "var(--foreground)" }}
      >
        {t.pricing_title}
      </motion.h2>

      {/* Plans */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {t.plans?.map((plan, i) => (
          <motion.div
            key={i}
            /* YENİ PREMIUM ANİMASYON  */
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}  // 👈 burada da aynı
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            /* HOVER AYNI KALIYOR */
            whileHover={{ scale: 1.05 }}
            className="p-[2px] rounded-2xl transition-colors duration-300"
            style={{
              background:
                i === 1
                  ? "linear-gradient(135deg, #34d39955, #3b82f666)"
                  : "color-mix(in srgb, var(--foreground) 12%, transparent)"
            }}
          >
            <div
              className="rounded-2xl p-6 h-full flex flex-col text-center md:text-left"
              style={{
                background: "var(--background)",
                color: "var(--foreground)",
                border:
                  "1px solid color-mix(in srgb, var(--foreground) 12%, transparent)",
                boxShadow: "0 0 25px -10px rgba(0,0,0,0.25)"
              }}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-4xl font-extrabold mb-6">{plan.price}</p>

              <ul className="flex-1 space-y-2">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2"
                    style={{
                      color:
                        "color-mix(in srgb, var(--foreground) 75%, transparent)"
                    }}
                  >
                    ✔️ <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className="mt-8 py-3 rounded-xl font-semibold transition"
                style={{
                  background:
                    i === 1
                      ? "var(--foreground)"
                      : "color-mix(in srgb, var(--foreground) 10%, transparent)",
                  color: i === 1 ? "var(--background)" : "var(--foreground)"
                }}
              >
                {t.pricing_button}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}