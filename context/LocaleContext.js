"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("en");
  const [t, setT] = useState({});

  const load = (lng) => {
    import(`../locales/${lng}.json`).then((mod) => {
      setT(mod);
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem("lang") || "en";
    setLocale(saved);
    load(saved);
  }, []);

  const changeLang = (lng) => {
    localStorage.setItem("lang", lng);
    setLocale(lng);
    load(lng);
  };

  return (
    <LocaleContext.Provider value={{ locale, t, changeLang }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}