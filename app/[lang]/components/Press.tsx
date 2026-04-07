"use client";

import { useTranslations } from "next-intl";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";

export default function Press() {
  const t = useTranslations("Press");
  return (
    <Section id="press">
      <div className="px-8 py-12 w-full flex flex-col gap-4 justify-start">
        <SectionLabel label={t("label")} />
        {/* TODO: Select photos */}
        {/* <div className="w-full bg-ink h-[600px] text-petal flex items-center justify-center">
          PHOTOS
        </div> */}
        <div className="flex gap-2">
          <a
            href="https://drive.google.com/file/d/1b2NOBNR2yQkfCAG6h0fYK1jLH2zAeF6k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase font-mono border border-foreground text-xs py-2 px-4"
          >
            → {t("viewPressKit")}
          </a>
        </div>
      </div>
    </Section>
  );
}
