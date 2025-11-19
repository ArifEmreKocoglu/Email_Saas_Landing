"use client";

import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer
      id="footer"
      className="w-full scroll-mt-[20vh] py-10 px-4 md:px-6 text-center text-sm transition-all"
      style={{
        background: "var(--background-bg)",
        color: "color-mix(in srgb, var(--foreground) 55%, transparent)"
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div
          className="font-semibold text-lg tracking-wide"
          style={{ color: "var(--foreground)" }}
        >
          {t.footer_brand}
        </div>

        {/* Navigation */}
        <div className="flex gap-6 text-sm">
          {[
            { label: t.footer_docs, href: "#" },
            { label: t.footer_pricing, href: "#" },
            { label: t.footer_privacy, href: "#" },
            { label: t.footer_terms, href: "#" }
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="transition-all"
              style={{
                color: "color-mix(in srgb, var(--foreground) 65%, transparent)"
              }}
              onMouseEnter={(e) =>
                (e.target.style.color = "var(--foreground)")
              }
              onMouseLeave={(e) =>
                (e.target.style.color =
                  "color-mix(in srgb, var(--foreground) 65%, transparent)")
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            color: "color-mix(in srgb, var(--foreground) 45%, transparent)"
          }}
        >
          © {new Date().getFullYear()} {t.footer_copyright}
        </div>
      </div>
    </footer>
  );
}