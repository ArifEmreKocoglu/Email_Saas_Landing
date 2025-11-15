"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

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
      className="fixed top-5 right-5 z-50 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white transition"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}