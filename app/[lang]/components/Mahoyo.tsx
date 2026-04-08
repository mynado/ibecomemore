import { useTranslations } from "next-intl";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";
import Image from "next/image";
import Heading from "./ui/Heading";

export default function Mahoyo() {
  const t = useTranslations("Mahoyo");
  return (
    <Section>
      <div className="px-8 py-12 w-full md:w-3/5 h-full flex flex-col gap-4 justify-start border-r-2 border-foreground">
        <SectionLabel label={t("label")} />
        <Heading>
          {t("title")} <span className="text-ember italic">Mahoyo</span>
        </Heading>
        <div className="space-y-4 whitespace-pre-wrap">{t("description")}</div>
      </div>
      <div className="w-full md:w-2/5 h-full flex flex-col justify-start">
        <div className="relative border-b-2 border-foreground">
          <Image
            src="/myna-profile.webp"
            width={800}
            height={400}
            alt="MyNa Do"
            className="w-full max-h-[400px] object-cover"
          />
          <p className="absolute left-0 bottom-0 text-ember bg-ink/80 py-1 px-2 font-serif text-2xl font-bold">
            MyNa Do
          </p>
        </div>
        <div className="relative">
          <Image
            src="/farah_profile.webp"
            width={800}
            height={400}
            alt="Farah Yusuf"
            className="w-full max-h-[400px] object-cover"
          />
          <p className="absolute left-0 bottom-0 text-ember bg-ink/80 py-1 px-2 font-serif text-2xl font-bold">
            Farah Yusuf
          </p>
        </div>
      </div>
    </Section>
  );
}
