import { sanityClientWithToken } from "./client";
import { Screening } from "./types";

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
