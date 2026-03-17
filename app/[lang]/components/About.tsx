"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import SectionLabel from "./SectionLabel";
import Section from "./Section";

const filmInfo = [
  { label: "titleLabel", value: "titleValue" },
  { label: "genreLabel", value: "genreValue" },
  { label: "formatsLabel", value: "formatsValue" },
  { label: "durationLabel", value: "durationValue" },
  { label: "languageLabel", value: "languageValue" },
  { label: "subtitlesLabel", value: "subtitlesValue" },
  { label: "productionLabel", value: "productionValue" },
];

export default function About() {
  const t = useTranslations("About");
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const onToggleSynopsis = () => setShowFullSynopsis((prev) => !prev);
  return (
    <Section id="about">
      <div className="px-8 py-12 w-full md:w-2/5 h-full flex flex-col gap-4 justify-start bg-honey border-r-2 border-foreground">
        <SectionLabel label={t("aboutLabel")} />
        <h2 className="text-5xl font-extrabold mb-2 max-w-sm">{t("title")}</h2>
        <ul className="mt-4">
          {filmInfo.map((item) => (
            <li
              key={t(item.label)}
              className="text-lg text-foreground text-sm flex items-center justify-between gap-2 border-t-1 border-foreground/50 py-4"
            >
              {t(item.label)}
              <span className="font-semibold">{t(item.value)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-8 py-12 w-full md:w-3/5 h-full flex flex-col gap-4 justify-start">
        <SectionLabel label={t("synopsisLabel")} />
        <p className="text-lg">{t("synopsis")}</p>
        {showFullSynopsis && (
          <p className="text-md mt-4">{t("fullSynopsis")}</p>
        )}
        <button
          className="border-b-1 border-ember text-ember w-fit mt-4 uppercase text-xs font-mono hover:text-red-900 transition-colors duration-200"
          onClick={onToggleSynopsis}
        >
          {showFullSynopsis ? t("showLess") : t("showMore")}
        </button>
      </div>
    </Section>
  );
}
