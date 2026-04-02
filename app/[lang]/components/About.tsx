"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import SectionLabel from "./SectionLabel";
import Section from "./Section";
import ProductionFacts from "./ProductionFacts";

const filmInfo = [
  { label: "originalTitleLabel", value: "originalTitleValue" },
  { label: "yearLabel", value: "yearValue" },
  { label: "genreLabel", value: "genreValue" },
  { label: "formatsLabel", value: "formatsValue" },
  { label: "durationLabel", value: "durationValue" },
  { label: "countryLabel", value: "countryValue" },
  { label: "languageLabel", value: "languageValue" },
  { label: "subtitlesLabel", value: "subtitlesValue" },
  { label: "productionLabel", value: "productionValue" },
  { label: "coProductionLabel", value: "coProductionValue" },
];

export default function About() {
  const t = useTranslations("About");
  const tFacts = useTranslations("ProductionFacts");
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
              key={tFacts(item.label)}
              className="text-lg text-foreground text-sm flex items-center justify-between gap-2 border-t-1 border-foreground/50 py-4"
            >
              {tFacts(item.label)}
              <span className="font-semibold text-end">
                {tFacts(item.value)}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-8 py-12 w-full md:w-3/5 h-full flex flex-col gap-4 justify-start">
        <SectionLabel label={t("synopsisLabel")} />
        <p className="text-lg">{t("synopsis")}</p>
        {showFullSynopsis && (
          <>
            <p className="text-md mt-4 mb-8">{t("fullSynopsis")}</p>
            <ProductionFacts />
          </>
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
