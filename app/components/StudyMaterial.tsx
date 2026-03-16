"use client";

import { stat } from "fs";
import Section from "./Section";
import SectionLabel from "./SectionLabel";

const studyMaterials = [
  {
    type: "Study Guide",
    title: "Teacher's Study Guide",
    description:
      "A comprehensive guide with background on the film's themes — identity, belonging, racism, and art as resistance.",
    link: "/materials/discussion-guide.pdf",
    status: "Coming soon",
    icon: "📚",
  },
  {
    type: "Discussion",
    title: "Discussion Questions",
    description:
      "Ready-to-use questions for classroom and study circle conversations, organised by theme and age group.",
    link: "/materials/discussion-questions.pdf",
    status: "Coming soon",
    icon: "💬",
  },
  {
    type: "Workshop",
    title: "Art & Activism Workshop",
    description:
      "Practical workshop materials exploring how art can be a tool for social change.",
    link: "/materials/workshop-materials.pdf",
    status: "Coming soon",
    icon: "🎨",
  },
  {
    type: "Further Reading",
    title: "Reading & Resource List",
    description:
      "Curated books, articles, podcasts and films that connect to the documentary's themes.",
    link: "/materials/further-reading.pdf",
    status: "Coming soon",
    icon: "📖",
  },
];

export default function StudyMaterial() {
  return (
    <Section id="study">
      <div className="w-full flex flex-col gap-4 justify-start px-8 py-12">
        <SectionLabel label="Study Material" />
        <h2 className="text-4xl font-extrabold mb-2 max-w-xs">
          Study Material
        </h2>
        <p className="text-bark max-w-lg">
          Free downloadable resources for teachers, study circle leaders, and
          youth workers to use in connection with the film. Suitable for
          secondary school and adult education contexts.
        </p>
        <ul className="grid [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] gap-px border border-foreground bg-foreground">
          {studyMaterials.map((material) => (
            <li
              key={material.title}
              className="bg-background p-8 flex flex-col justify-between gap-4"
            >
              <span className="text-2xl">{material.icon}</span>
              <span className="text-xs text-bark uppercase bg-bark/10 w-fit px-2 py-1">
                {material.type}
              </span>
              <h3 className="text-2xl font-bold">{material.title}</h3>
              <p className="text-bark">{material.description}</p>
              <span className="text-xs font-light uppercase font-mono text-bark">
                {material.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
