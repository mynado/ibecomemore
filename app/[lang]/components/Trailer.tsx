"use client";
import { useTranslations } from "next-intl";
import Section from "./Section";
import SectionLabel from "./SectionLabel";

export default function Trailer() {
  const t = useTranslations("Trailer");
  return (
    <Section id="trailer">
      <div className="w-full px-8 py-12 h-full flex flex-col gap-4 justify-start bg-ink">
        <SectionLabel label={t("label")} color="petal" />
        <div className="w-full mx-auto relative h-0 pb-[56.25%]">
          <iframe
            src="https://player.vimeo.com/video/1166689842?h=cc03a48e4c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allowFullScreen
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            title="I become more with you - Trailer (2026)"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </Section>
  );
}
