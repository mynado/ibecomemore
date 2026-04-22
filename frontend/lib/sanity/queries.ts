import { sanityClientWithToken } from "./client";
import { HomePageData, Screening } from "./types";

export async function getHomePageContent(
  locale: string,
): Promise<HomePageData | null> {
  return sanityClientWithToken
    .fetch(`*[_type == "homePage" && language == $locale][0]`, { locale })
    .catch((error) => {
      return null;
    });
}

export async function getScreenings(locale: string): Promise<Screening[]> {
  return sanityClientWithToken
    .fetch(
      `*[_type == "screening" && language == $locale] | order(start asc)`,
      { locale },
    )
    .catch((error) => {
      return [];
    });
}
