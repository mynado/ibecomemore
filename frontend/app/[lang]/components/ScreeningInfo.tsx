import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";
import Heading from "./ui/Heading";
import { Screening } from "@/app/lib/sanity/types";
import { getLocale, getTranslations } from "next-intl/server";
import { getScreenings } from "@/app/lib/sanity/queries";

export default async function ScreeningInfo() {
  const t = await getTranslations("ScreeningInfo");
  console.log("t: ", t);
  const locale = await getLocale();
  const screenings = await getScreenings(locale);
  console.log("Screenings:", screenings);

  const formatScreeningDate = (isoDate: string) =>
    new Date(isoDate).toLocaleDateString(locale, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  const now = new Date();
  const getScreeningTime = (date: string) => new Date(date).getTime();
  const nowTime = now.getTime();
  const { upcomingScreenings, pastScreenings } = screenings.reduce(
    (acc, screening) => {
      if (getScreeningTime(screening.end) >= nowTime) {
        acc.upcomingScreenings.push(screening);
      } else {
        acc.pastScreenings.push(screening);
      }
      return acc;
    },
    {
      upcomingScreenings: [] as Screening[],
      pastScreenings: [] as Screening[],
    },
  );
  return (
    <Section id="screenings">
      <div className="bg-honey w-full h-full flex flex-col gap-4 justify-start px-8 py-12 w-full">
        <SectionLabel label={t("label")} />
        <Heading className="mb-8">{t("title")}</Heading>
        <Heading Tag="h3" style="h3">
          {t("upcomingTitle")}
        </Heading>
        {upcomingScreenings.length === 0 ? (
          <p className="text-foreground/60">{t("noUpcoming")}</p>
        ) : (
          <ul className="flex flex-col gap-4 m-0 p-0 mb-8 w-full border-t-2 border-bark py-4">
            {upcomingScreenings.map((screening) => (
              <li
                key={screening._id}
                className="w-fit py-2 grid md:grid-cols-4 gap-4 items-center w-full border-b-1 border-bark/40"
              >
                <span className="font-mono text-sm w-fit">
                  {formatScreeningDate(screening.start)}
                </span>
                <span className="text-md">{screening.title}</span>
                {screening.venueName && screening.city && (
                  <span className="uppercase font-mono text-sm">
                    {screening.venueName}, {screening.city}
                  </span>
                )}
                {screening.url && (
                  <a
                    href={screening.url}
                    className="uppercase font-mono text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {screening.urlLabel && screening.urlLabel}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}

        <Heading Tag="h3" style="h3">
          {t("pastTitle")}
        </Heading>
        <ul className="flex flex-col gap-4 m-0 p-0 border-t-2 border-bark/40 py-4">
          {pastScreenings.map((screening) => (
            <li
              key={screening._id}
              className="w-fit py-2 grid md:grid-cols-4 gap-4 items-center w-full text-foreground/60 border-b-1 border-bark/40"
            >
              <span className="font-mono text-sm w-fit">
                {formatScreeningDate(screening.start)}
              </span>
              <span className="text-md">{screening.title}</span>
              {screening.venueName && screening.city && (
                <span className="uppercase font-mono text-sm">
                  {screening.venueName}, {screening.city}
                </span>
              )}

              {screening.url && (
                <a
                  href={screening.url}
                  className="uppercase font-mono text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {screening.urlLabel && screening.urlLabel}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
