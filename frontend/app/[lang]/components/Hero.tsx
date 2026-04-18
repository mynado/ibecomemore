import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Section from "./ui/Section";
import Link from "next/dist/client/link";
import Heading from "./ui/Heading";

const posters: Record<string, string> = {
  en: "/poster_international_optimized.jpg",
  sv: "/poster_swedish.jpg",
};

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const posterSrc = posters[locale] || posters.en;
  return (
    <Section className="mt-14" id="home">
      <div className="px-4 py-16 w-full md:p-4 md:w-1/2 md:border-r-2 border-foreground h-full flex flex-col justify-center">
        <p className="font-mono text-xs tracking-widest uppercase text-bark mb-4">
          {t("preTitle")}
        </p>
        <Heading Tag="h1" style="h1" className="max-w-sm font-extrabold">
          {t("title")}
        </Heading>
        <p className="text-2xl font-semibold italic text-bark font-serif">
          {t("subtitle")}
        </p>
        <div className="h-1 w-20 bg-ember my-8"></div>
        <div className="flex flex-col gap-8">
          <p className="text-xl font-light leading-relaxed max-w-[38ch] mb-4">
            {t("description")}
          </p>
          <Link
            href="#contact"
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
        src={posterSrc}
        alt={t("posterAlt")}
        width={800}
        height={1200}
        className="w-full md:w-1/2 object-cover"
        priority
        fetchPriority="high"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </Section>
  );
}
