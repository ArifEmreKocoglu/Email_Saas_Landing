"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 rounded-full text-sm transition-all"
      style={{
        background: "color-mix(in srgb, var(--foreground) 10%, transparent)",
        color: "var(--foreground)",
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}