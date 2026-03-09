"use client";

import Section from "./Section";
import SectionLabel from "./SectionLabel";

const productionRoles = [
  { label: "Directors", value: "MyNa Do & Farah Yusuf" },
  { label: "Producer", value: "Mónica Hernández Rejón" },
  { label: "Executive Producer", value: "Kalle Jansson" },
  { label: "Cinematography", value: "Kalle Jansson, MyNa Do & Farah Yusuf" },
  { label: "Editing", value: "Matilda Henningsson" },
  { label: "Original Music", value: "Jacob Solomon" },
  { label: "Additional Music", value: "Cherrie & Erik Lundin" },
  { label: "Poetry", value: "Makda Embaie" },
  { label: "Sound Design", value: "Kristoffer Kronander" },
  { label: "Grading", value: "Fredrik Jönsson" },
  { label: "Graphic Design", value: "Johnny Chang" },
];

const productionFacts = [
  { label: "Original Title", value: "Jag blir mer med dig" },
  { label: "Year", value: "2026" },
  { label: "Duration", value: "75 min" },
  { label: "Country", value: "Sweden" },
  { label: "Language", value: "Swedish, English, Vietnamese & Teochew" },
  { label: "Subtitles", value: "Swedish, English" },
  { label: "Production", value: "Pråmfilm AB" },
  { label: "Co-production", value: "Film i Skåne" },
  { label: "Format", value: "HD/2K" },
];

export default function ProductionFacts() {
  return (
    <Section>
      <div className="w-full p-8">
        <SectionLabel label="Production Facts" />
        <div className="grid grid-cols-2 gap-8">
          <ul className="mt-4">
            {productionRoles.map((item) => (
              <li
                key={item.label}
                className="text-lg text-foreground text-sm flex items-center justify-between gap-2 border-t-1 border-foreground/50 py-4"
              >
                <span className="font-mono uppercase text-xs">
                  {item.label}
                </span>
                <span className="font-semibold">{item.value}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-4">
            {productionFacts.map((item) => (
              <li
                key={item.label}
                className="text-lg text-foreground text-sm flex items-center justify-between gap-2 border-t-1 border-foreground/50 py-4"
              >
                <span className="font-mono uppercase text-xs">
                  {item.label}
                </span>
                <span className="font-semibold">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
