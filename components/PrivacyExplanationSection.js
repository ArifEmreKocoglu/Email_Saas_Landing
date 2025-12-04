"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function PrivacyExplanationSection() {
  const { t } = useLocale();

  return (
    <section
      id="privacy-explained"
      className="
        scroll-mt-[20vh]
        w-full 
        px-4 md:px-6 
        relative
        pt-24 md:pt-32
        pb-24 md:pb-32
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
          mb-14 md:mb-20
        "
      >
        {t.privacy_title}
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-12">

        {/* 1 — What Entrfy Does */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: false, amount: 0.35 }}
          className="
            p-6 md:p-8 
            rounded-2xl 
            border
            backdrop-blur-md 
            shadow-sm
          "
          style={{
            background: "color-mix(in srgb, var(--foreground) 3%, transparent)",
            borderColor:
              "color-mix(in srgb, var(--foreground) 12%, transparent)",
          }}
        >
          <h3 className="font-semibold text-2xl mb-3">{t.privacy_what_title}</h3>
          <p className="opacity-80 leading-relaxed text-lg">
            {t.privacy_what_desc}
          </p>
        </motion.div>

        {/* 2 — Gmail Permissions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          viewport={{ once: false, amount: 0.35 }}
          className="
            p-6 md:p-8 
            rounded-2xl 
            border
            backdrop-blur-md 
            shadow-sm
          "
          style={{
            background: "color-mix(in srgb, var(--foreground) 3%, transparent)",
            borderColor:
              "color-mix(in srgb, var(--foreground) 12%, transparent)",
          }}
        >
          <h3 className="font-semibold text-2xl mb-3">
            {t.privacy_permissions_title}
          </h3>
          <p className="opacity-80 leading-relaxed text-lg">
            {t.privacy_permissions_desc}
          </p>
        </motion.div>

        {/* 3 — What AI sees */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          viewport={{ once: false, amount: 0.35 }}
          className="
            p-6 md:p-8 
            rounded-2xl 
            border
            backdrop-blur-md 
            shadow-sm
          "
          style={{
            background: "color-mix(in srgb, var(--foreground) 3%, transparent)",
            borderColor:
              "color-mix(in srgb, var(--foreground) 12%, transparent)",
          }}
        >
          <h3 className="font-semibold text-2xl mb-3">{t.privacy_ai_title}</h3>

          <ul className="opacity-80 leading-relaxed text-lg space-y-2 list-disc ml-5">
            {t.privacy_ai_list?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* 4 — Data deletion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          viewport={{ once: false, amount: 0.35 }}
          className="
            p-6 md:p-8 
            rounded-2xl 
            border
            backdrop-blur-md 
            shadow-sm
          "
          style={{
            background: "color-mix(in srgb, var(--foreground) 3%, transparent)",
            borderColor:
              "color-mix(in srgb, var(--foreground) 12%, transparent)",
          }}
        >
          <h3 className="font-semibold text-2xl mb-3">
            {t.privacy_deletion_title}
          </h3>
          <p className="opacity-80 leading-relaxed text-lg">
            {t.privacy_deletion_desc}
          </p>
        </motion.div>

      </div>
    </section>
  );
}