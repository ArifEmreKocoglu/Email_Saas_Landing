"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function Pricing() {
  const { t } = useLocale();

  return (
    <section
      id="pricing"
      className="
      scroll-mt-[20vh]
        w-full
        px-4 md:px-6
        pt-24 md:pt-32
        pb-24 md:pb-32
        min-h-[100vh]
        flex flex-col
      "
      style={{
        background: "var(--background-bg)",
        color: "var(--foreground)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="
          text-center 
          text-4xl md:text-6xl 
          font-semibold
          mb-10 md:mb-16
        "
        style={{ color: "var(--foreground)" }}
      >
        {t.pricing_title}
      </motion.h2>

      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 md:grid-cols-3
          gap-6 md:gap-8 lg:gap-10
          flex-1
        "
      >
        {t.plans?.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ scale: 1.05 }}
            className="p-[2px] rounded-2xl transition-colors"
            style={{
              background:
                i === 1
                  ? "linear-gradient(135deg, #34d39955, #3b82f666)"
                  : "color-mix(in srgb, var(--foreground) 12%, transparent)",
            }}
          >
            <div
              className="
                rounded-2xl
                p-6 md:p-8 lg:p-10
                h-full
                flex flex-col
                text-center md:text-left
                min-h-[360px] md:min-h-[420px] lg:min-h-[460px]
              "
              style={{
                background: "var(--background-bg)",
                color: "var(--foreground)",
                border:
                  "1px solid color-mix(in srgb, var(--foreground) 12%, transparent)",
                boxShadow: "0 0 25px -10px rgba(0,0,0,0.25)",
              }}
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {plan.name}
              </h3>

              <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                {plan.price}
              </p>

              <ul className="flex-1 space-y-3 text-base md:text-lg lg:text-xl leading-relaxed">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 md:gap-3"
                    style={{
                      color:
                        "color-mix(in srgb, var(--foreground) 80%, transparent)",
                    }}
                  >
                    ✔️ {f}
                  </li>
                ))}
              </ul>

              <button
                className="
                  mt-6
                  py-3 md:py-4 lg:py-5
                  rounded-xl 
                  font-semibold 
                  text-base md:text-lg lg:text-xl
                  transition
                "
                style={{
                  background:
                    i === 1
                      ? "var(--foreground)"
                      : "color-mix(in srgb, var(--foreground) 10%, transparent)",
                  color: i === 1 ? "var(--background)" : "var(--foreground)",
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