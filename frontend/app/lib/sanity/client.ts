import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: "production",
  apiVersion: "v2026-04-13",
  useCdn: true,
});

export const sanityClientWithToken = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: "production",
  apiVersion: "v2026-04-13",
  useCdn: true,
  token: process.env.SANITY_VIEWER_TOKEN!,
});
