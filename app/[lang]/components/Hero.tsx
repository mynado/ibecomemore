"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Section from "./Section";
import Link from "next/dist/client/link";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <Section className="mt-14">
      <div className="p-4 w-full md:w-1/2 md:border-r-2 border-foreground h-full flex flex-col justify-center">
        {/* <p className="uppercase font-mono text-sm text-bark mb-8">
          Documentary film
        </p>
        <h1 className="text-6xl font-extrabold font-serif mb-2 max-w-sm">
          I Become More With You
        </h1>
        <p className="text-2xl font-semibold italic text-bark font-serif">
          Jag blir mer med dig
        </p>
        <div className="h-1 w-20 bg-ember my-8"></div>
        <p className="text-lg text-foreground mt-4 max-w-2xl mb-8">
          Two lifelong friends fight an anti-racist battle in Sweden, building
          community through art as a boundless force for change—inside and out.
        </p>
        <Link
          href="#screening"
          className="bg-ember text-white font-mono text-xs w-fit uppercase px-8 py-4 border-2 border-ember hover:bg-transparent hover:text-ember transition-colors"
        >
          → Request a Screening
        </Link> */}
        <p className="font-mono text-xs tracking-widest uppercase text-bark mb-4">
          {t("preTitle")}
        </p>

        <div className="flex flex-col gap-8">
          <p className="text-xl font-light leading-relaxed max-w-[38ch] mb-4">
            {t("description")}
          </p>
          <Link
            href="#screening"
            className="bg-ember text-white font-mono text-xs tracking-widest uppercase px-8 py-4 border-2 border-ember hover:bg-transparent hover:text-ember transition-colors self-start"
          >
            {t("requestScreening")}
          </Link>
        </div>

        <div className="font-mono text-xs tracking-widest uppercase text-bark mt-4">
          {t("tag")}
        </div>
      </div>
      <Image
        src="/poster_international.jpg"
        alt="I Become More With You - Poster"
        width={800}
        height={1200}
        className="w-full md:w-1/2 object-cover"
      />
    </Section>
  );
}
