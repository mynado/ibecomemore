"use client";

import { useTranslations } from "next-intl";
import Section from "./Section";
import SectionLabel from "./SectionLabel";

const productionRoles = [
  { label: "directorLabel", value: "directorValue" },
  { label: "producerLabel", value: "producerValue" },
  { label: "executiveProducerLabel", value: "executiveProducerValue" },
  {
    label: "cinematographyLabel",
    value: "cinematographyValue",
  },
  { label: "editingLabel", value: "editingValue" },
  { label: "originalMusicLabel", value: "originalMusicValue" },
  { label: "additionalMusicLabel", value: "additionalMusicValue" },
  { label: "poetryLabel", value: "poetryValue" },
  { label: "soundDesignLabel", value: "soundDesignValue" },
  { label: "gradingLabel", value: "gradingValue" },
  { label: "graphicDesignLabel", value: "graphicDesignValue" },
];

const productionFacts = [
  { label: "originalTitleLabel", value: "originalTitleValue" },
  { label: "yearLabel", value: "yearValue" },
  { label: "genreLabel", value: "genreValue" },
  { label: "durationLabel", value: "durationValue" },
  { label: "countryLabel", value: "countryValue" },
  { label: "languageLabel", value: "languageValue" },
  { label: "subtitlesLabel", value: "subtitlesValue" },
  { label: "productionLabel", value: "productionValue" },
  { label: "coProductionLabel", value: "coProductionValue" },
  { label: "formatsLabel", value: "formatsValue" },
];

export default function ProductionFacts() {
  const t = useTranslations("ProductionFacts");
  return (
    <Section>
      <div className="w-full p-8">
        <SectionLabel label={t("label")} />
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-8 max-w-4xl mt-4">
          <ul>
            {productionRoles.map((item) => (
              <li
                key={item.label}
                className="text-lg text-foreground text-sm flex items-center justify-between gap-2 border-t-1 border-bark py-4"
              >
                <span className="font-mono uppercase text-xs text-bark">
                  {t(item.label)}
                </span>
                <span className="font-semibold">{t(item.value)}</span>
              </li>
            ))}
          </ul>
          <ul>
            {productionFacts.map((item) => (
              <li
                key={item.label}
                className="text-lg text-foreground text-sm flex items-center justify-between gap-2 border-t-1 border-bark py-4"
              >
                <span className="font-mono uppercase text-xs text-bark">
                  {t(item.label)}
                </span>
                <span className="font-semibold">{t(item.value)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
