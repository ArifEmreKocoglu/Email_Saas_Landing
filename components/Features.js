"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function Features() {
  const { t } = useLocale();

  return (
    <section
      id="features"
      className="
        scroll-mt-[20vh]
        w-full 
        px-4 md:px-6 
        relative
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
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.5 }}
        className="
          text-center 
          text-3xl md:text-4xl lg:text-6xl 
          font-semibold 
          mb-10 md:mb-16
        "
      >
        {t.features_title}
      </motion.h2>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-6 md:gap-8 lg:gap-10
          max-w-6xl mx-auto
          auto-rows-[1fr]
          w-full flex-1
        "
      >
        {t.features?.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              duration: 0.55,
              delay: i * 0.12,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.28 }
            }}
            className="
              flex flex-col
              rounded-2xl 
              p-6 md:p-8 lg:p-10 
              border
              backdrop-blur-md 
              cursor-pointer
              min-h-[260px] md:min-h-[330px] lg:min-h-[360px]   /* 🔥 desktop için ideal */
            "
            style={{
              background:
                "color-mix(in srgb, var(--foreground) 3%, transparent)",
              borderColor:
                "color-mix(in srgb, var(--foreground) 14%, transparent)",
              boxShadow: "0 0 25px -12px rgba(0,0,0,0.25)",
            }}
          >
            {/* ICON */}
            <div
              className="
                text-4xl md:text-5xl lg:text-6xl
                mb-4 md:mb-6
              "
              style={{ color: "var(--foreground)" }}
            >
              {["📬","⚙️","🔗","💬","📂","🔒"][i]}
            </div>

            {/* TITLE */}
            <h3
              className="
                text-xl md:text-2xl lg:text-[26px] 
                font-semibold 
                mb-2 md:mb-3
              "
              style={{ color: "var(--foreground)" }}
            >
              {f.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                text-sm md:text-base lg:text-lg
                leading-relaxed
                mt-auto
              "
              style={{
                color:
                  "color-mix(in srgb, var(--foreground) 70%, transparent)"
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