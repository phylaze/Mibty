import { createClient, type SanityClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";

// During Phase 2 the site renders entirely from local content modules in
// lib/content/. When Sanity is provisioned, set NEXT_PUBLIC_SANITY_PROJECT_ID
// and switch page loaders to call `sanity.fetch(...)`. Until then the client
// is exported but unused — typed and ready.

export const sanity: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
      perspective: "published",
    })
  : null;

export function requireSanity(): SanityClient {
  if (!sanity) {
    throw new Error(
      "Sanity client is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID in your env.",
    );
  }
  return sanity;
}
