"use client";

import { useLocale } from "@/context/LocaleContext";

export default function LanguageToggle() {
  const { locale, changeLang } = useLocale();

  return (
    <button
      onClick={() => changeLang(locale === "en" ? "tr" : "en")}
      className="fixed top-5 left-5 z-50 px-4 py-2 rounded-full backdrop-blur-md transition border"
      style={{
        background: "color-mix(in srgb, var(--background) 20%, transparent)",
        color: "var(--foreground)",
        borderColor: "color-mix(in srgb, var(--foreground) 30%, transparent)"
      }}
    >
      {locale.toUpperCase()}
    </button>
  );
}