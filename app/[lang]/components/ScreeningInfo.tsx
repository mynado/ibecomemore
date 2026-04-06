import { useTranslations } from "next-intl";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";

type Screening = {
  title: string;
  date: string;
  formattedDate: string;
  location: string;
  url?: string;
};

export default function ScreeningInfo() {
  const t = useTranslations("ScreeningInfo");

  const formatScreeningDate = (isoDate: string) =>
    new Date(isoDate).toLocaleDateString("en-SE", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  const screenings: Screening[] = [
    {
      title: "Migration Matters Film Festival",
      date: "2026-02-20T00:00:00Z",
      formattedDate: formatScreeningDate("2026-02-20T00:00:00Z"),
      location: "Filmcentrum Riks, Stockholm",
      url: "https://mmff.se/film/i-become-more-with-you/",
    },
    {
      title: "Vi blir mer tillsammans – FN-dagen mot islamofobi",
      date: "2026-03-15T00:00:00Z",
      formattedDate: formatScreeningDate("2026-03-15T00:00:00Z"),
      location: "Arena 305, Malmö",
    },
    {
      title: "Skolbio",
      date: "2026-04-17T00:00:00Z",
      formattedDate: formatScreeningDate("2026-04-17T00:00:00Z"),
      location: "Lund",
    },
    {
      title: "Skolbio, Antirasitiska Filmdagar",
      date: "2026-04-21T00:00:00Z",
      formattedDate: formatScreeningDate("2026-04-21T00:00:00Z"),
      location: "Malmö",
    },
    {
      title: "IFEMA+",
      date: "2026-04-25T00:00:00Z",
      formattedDate: formatScreeningDate("2026-04-25T00:00:00Z"),
      location: "Panora, Malmö",
      url: "https://www.femalefilmfestival.se/i-become-more-with-you/",
    },
  ];
  const now = new Date();
  const getScreeningTime = (date: string) => new Date(date).getTime();
  const nowTime = now.getTime();
  const { upcomingScreenings, pastScreenings } = screenings.reduce(
    (acc, screening) => {
      if (getScreeningTime(screening.date) >= nowTime) {
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
    <Section>
      <div className="bg-honey w-full h-full flex flex-col gap-4 justify-start px-8 py-12 w-full">
        <SectionLabel label={t("label")} />
        <h2 className="font-semibold font-mono mt-8 mb-4 uppercase">
          {t("upcomingTitle")}
        </h2>
        {upcomingScreenings.length === 0 ? (
          <p className="text-foreground/60">{t("noUpcoming")}</p>
        ) : (
          <ul className="flex flex-col gap-4 m-0 p-0 mb-8 w-full border-t-2 border-bark py-4">
            {upcomingScreenings.map((screening) => (
              <li
                key={screening.title}
                className="w-fit py-2 grid md:grid-cols-4 gap-4 items-center w-full border-b-1 border-bark/40"
              >
                <span className="font-mono text-sm w-fit">
                  {screening.formattedDate}
                </span>
                <span className="text-md">{screening.title}</span>
                <span className="uppercase font-mono text-sm">
                  {screening.location}
                </span>
                {screening.url && (
                  <a
                    href={screening.url}
                    className="uppercase font-mono text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More info
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}

        <h2 className="font-mono uppercase mt-8 mb-4">{t("pastTitle")}</h2>
        <ul className="flex flex-col gap-4 m-0 p-0 border-t-2 border-bark/40 py-4">
          {pastScreenings.map((screening) => (
            <li
              key={screening.title}
              className="w-fit py-2 grid md:grid-cols-4 gap-4 items-center w-full text-foreground/60 border-b-1 border-bark/40"
            >
              <span className="font-mono text-sm w-fit">
                {screening.formattedDate}
              </span>
              <span className="text-md">{screening.title}</span>
              <span className="uppercase font-mono text-sm">
                {screening.location}
              </span>
              {screening.url && (
                <a
                  href={screening.url}
                  className="uppercase font-mono text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("moreInfoUrl")}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
