import { useTranslations } from "next-intl";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";
import ContactForm from "./ui/ContactForm";
import Heading from "./ui/Heading";

const screeningTypes = [
  "screeningTypeA",
  "screeningTypeB",
  "screeningTypeC",
  "screeningTypeD",
];

export default function GetInTouch() {
  const t = useTranslations("GetInTouch");

  return (
    <Section id="contact">
      <div className="w-full md:w-1/2 flex flex-col gap-4 justify-start px-8 py-12">
        <SectionLabel label={t("label")} />
        <Heading className="max-w-sm">{t("title")}</Heading>
        <p className="text-bark">{t("description")}</p>
        <ul className="flex flex-col gap-4 mt-4 font-mono uppercase text-sm m-0 p-0">
          {screeningTypes.map((type) => (
            <li className="w-fit py-2" key={type}>
              <span className="text-ember">→</span> {t(type)}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2 md:h-full bg-ember flex flex-col gap-4 justify-start px-8 py-12">
        <SectionLabel label={t("contactLabel")} color="white" />
        <h2 className="text-white text-4xl font-extrabold mb-2">
          {t("contactTitle")}
        </h2>
        <ContactForm />
      </div>
    </Section>
  );
}
