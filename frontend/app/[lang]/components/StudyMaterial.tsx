"use client";

import { useTranslations } from "next-intl";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";

const studyMaterials = [
  {
    type: "materialAType",
    title: "materialATitle",
    description: "materialADescription",
    link: "/materials/discussion-guide.pdf",
    status: "statusComingSoon",
    icon: "📚",
  },
  {
    type: "materialBType",
    title: "materialBTitle",
    description: "materialBDescription",
    link: "/materials/discussion-questions.pdf",
    status: "statusComingSoon",
    icon: "💬",
  },
  {
    type: "materialCType",
    title: "materialCTitle",
    description: "materialCDescription",
    link: "/materials/workshop-materials.pdf",
    status: "statusComingSoon",
    icon: "🎨",
  },
  {
    type: "materialDType",
    title: "materialDTitle",
    description: "materialDDescription",
    link: "/materials/further-reading.pdf",
    status: "statusComingSoon",
    icon: "📖",
  },
];

export default function StudyMaterial() {
  const t = useTranslations("StudyMaterial");
  return (
    <Section id="study">
      <div className="w-full flex flex-col gap-4 justify-start px-8 py-12">
        <SectionLabel label={t("label")} />
        <h2 className="text-4xl font-extrabold mb-2 max-w-xs">{t("title")}</h2>
        <p className="text-bark max-w-lg">{t("description")}</p>
        <ul className="grid [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] gap-px border border-foreground bg-foreground">
          {studyMaterials.map((material) => (
            <li
              key={t(material.title)}
              className="bg-background p-8 flex flex-col justify-between gap-4"
            >
              <span className="text-2xl">{material.icon}</span>
              <span className="text-xs text-bark uppercase bg-bark/10 w-fit px-2 py-1">
                {t(material.type)}
              </span>
              <h3 className="text-2xl font-bold">{t(material.title)}</h3>
              <p className="text-bark">{t(material.description)}</p>
              <span className="text-xs font-light uppercase font-mono text-bark">
                {t(material.status)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
