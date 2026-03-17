"use client";

import Section from "./Section";
import SectionLabel from "./SectionLabel";

export default function Press() {
  return (
    <Section id="press">
      <div className="px-8 py-12 w-full flex flex-col gap-4 justify-start">
        <SectionLabel label="Press & Photos" />
        <div className="w-full bg-ink h-[600px] text-petal flex items-center justify-center">
          PHOTOS
        </div>
        <div className="flex gap-2">
          <button className="uppercase font-mono border border-foreground text-xs py-2 px-4">
            ↓ Download Press Kit
          </button>
          <button className="uppercase font-mono border border-foreground text-xs py-2 px-4">
            ↓ Download All Photos
          </button>
        </div>
      </div>
    </Section>
  );
}
