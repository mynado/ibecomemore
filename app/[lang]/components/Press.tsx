import { useTranslations } from "next-intl";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";
import Heading from "./ui/Heading";
import PhotoGallery from "./ui/PhotoGallery";

export default function Press() {
  const t = useTranslations("Press");
  const pressPhotos = Array.from(
    { length: 6 },
    (_, i) => `/I_Become_More_With_You_Press_0${i + 1}.webp`,
  );
  const filmStills = Array.from(
    { length: 6 },
    (_, i) => `/I_Become_More_With_You_Movie_Still_0${i + 1}.webp`,
  );
  return (
    <Section id="press">
      <div className="px-8 py-12 w-full flex flex-col gap-4 justify-start text-bark">
        <SectionLabel label={t("label")} />
        <Heading>{t("title")}</Heading>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between mb-8">
          <p className="text-md w-full max-w-xl">{t("description")}</p>
          <div className="max-w-xl w-full">
            <span className="uppercase font-mono text-sm">
              {t("contactLabel")}
            </span>
            <p className="text-foreground text-lg font-semibold">
              Mónica Hernández Rejón
            </p>
            <a
              href="mailto:monica@pramfilm.se"
              className="underline text-ember text-sm"
            >
              monica@pramfilm.se
            </a>
          </div>
        </div>
        <div className="border-t-1 border-foreground/30 py-10">
          <Heading style="h3" Tag={"h3"}>
            {t("pressKitLabel")}
          </Heading>
          <a
            href="https://drive.google.com/file/d/1b2NOBNR2yQkfCAG6h0fYK1jLH2zAeF6k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase font-mono border border-foreground text-foreground text-xs py-2 px-4 mt-4 inline-block"
          >
            {t("openPressKit")} ↗
          </a>
        </div>
        <div className="border-t-1 border-foreground/30 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between mb-8">
            <div>
              <Heading style="h3" Tag={"h3"}>
                {t("pressPhotoLabel")}
              </Heading>
              <p className="mt-4">{t("pressPhotoDescription")}</p>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1RgvKAYp26AuD0XPZbgY9S0l499y6tT_R?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase font-mono text-ember text-xs underline underline-offset-4 max-w-max w-full hover:text-ember/80 transition"
            >
              {t("pressPhotoLink")} ↗
            </a>
          </div>
          <PhotoGallery photos={pressPhotos} />
        </div>
        <div className="border-t-1 border-foreground/30 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between mb-8">
            <div>
              <Heading style="h3" Tag={"h3"}>
                {t("filmStillsLabel")}
              </Heading>
              <p>{t("filmStillsDescription")}</p>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1_vKS-O8FAoMKeq9yqQhPa894jdvoev8c?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase font-mono text-ember text-xs underline underline-offset-4 max-w-max w-full hover:text-ember/80 transition"
            >
              {t("filmStillsLink")} ↗
            </a>
          </div>
          <PhotoGallery photos={filmStills} />
        </div>
      </div>
    </Section>
  );
}
