import type { Substrate } from "@/lib/site";

// MIBTY products. Distinct from `services` (work we do *for* clients) and
// `capabilities` (kinds of problems we can engineer). Products are
// shippable software MIBTY owns and operates.
//
// `logo` points to a file under /public/products/. The Twidii mark
// committed here is a reproduction from observation; swap with the
// official asset when available.

export type Product = {
  slug: string;
  name: string;
  /** Brand tagline. Short, expressive — sits as accent text above the elevator pitch. */
  tagline?: string;
  /** Elevator pitch — what it is and who it's for, one line. */
  oneLiner: string;
  /** What it does in 1–2 sentences. */
  description: string;
  url: string;
  substrate: Substrate;
  status: "live" | "beta" | "in-development";
  /** Path under /public, served as a static asset. Square aspect, ≥ 256px recommended. */
  logo?: string;
};

export const products: Product[] = [
  {
    slug: "twidii",
    name: "Twidii",
    tagline: "Create once, share everywhere.",
    oneLiner: "The ultimate cross-posting app for content creators.",
    description:
      "Record a video once and instantly share it to YouTube, TikTok, Instagram, and all your favorite platforms with a single tap.",
    url: "https://twidii.com",
    substrate: "bits",
    status: "beta",
    logo: "/products/twidii.svg",
  },
];

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
