"use client";

import { useLocale } from "@/context/LocaleContext";

export default function LanguageToggle() {
  const { locale, changeLang } = useLocale();

  return (
    <button
      onClick={() => changeLang(locale === "en" ? "tr" : "en")}
      className="px-3 py-1 rounded-full text-sm transition-all"
      style={{
        background: "color-mix(in srgb, var(--foreground) 10%, transparent)",
        color: "var(--foreground)",
      }}
    >
      {locale === "en" ? "TR" : "EN"}
    </button>
  );
}