"use client";

import { useLocale } from "@/context/LocaleContext";

export default function TermsPage() {
  const { t } = useLocale();

  return (
    <section className="px-6 md:px-10 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">
        {t.terms_title}
      </h1>

      {t.terms_sections?.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            {section.title}
          </h2>

          {section.paragraphs.map((p, i) => (
            <p
              key={i}
              className="opacity-80 leading-relaxed mb-3 text-[17px]"
            >
              {p}
            </p>
          ))}
        </div>
      ))}
    </section>
  );
}