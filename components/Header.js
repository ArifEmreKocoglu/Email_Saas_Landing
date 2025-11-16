"use client";

import { useLocale } from "@/context/LocaleContext";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const { t } = useLocale();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("entrfy_token")) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-[99]
        flex items-center justify-between
        px-6 py-4
      "
      style={{
        background: "transparent",
      }}
    >
      <Link
        href="/"
        className="text-lg font-semibold"
        style={{ color: "var(--foreground)" }}
      >
        Entrfy
      </Link>

      <div className="flex items-center gap-3">

        <LanguageToggle />
        <ThemeToggle />

        <Link
          href={loggedIn ? "/app" : "/app/login"}
          className="px-5 py-2 rounded-full font-semibold transition-all text-sm md:text-base"
          style={{
            background: "color-mix(in srgb, var(--foreground) 10%, transparent)",
            color: "var(--foreground)",
            border:
              "1px solid color-mix(in srgb, var(--foreground) 25%, transparent)",
          }}
        >
          {loggedIn ? t.nav_dashboard : t.nav_login}
        </Link>
      </div>
    </header>
  );
}