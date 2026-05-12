import type { Substrate } from "@/lib/site";

// MIBTY products. Distinct from `services` (work we do *for* clients) and
// `capabilities` (kinds of problems we can engineer). Products are
// shippable software MIBTY owns and operates.
//
// Tagline / oneLiner / description remain template tokens until the
// team confirms the public-facing copy. Replace the {{ ... }}
// placeholders inline; the route, design, and surfaces don't need to
// change.
//
// `logo` points to a file under /public/products/. The Twidii mark
// committed here is a reproduction from observation; swap with the
// official asset when available.

export type Product = {
  slug: string;
  name: string;
  oneLiner: string;
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
    oneLiner: "{{ Twidii one-line positioning — pending team approval }}",
    description:
      "{{ A short paragraph describing what Twidii is, who it's for, and what it does. Pending the team's approved copy from twidii.com. }}",
    url: "https://twidii.com",
    substrate: "bits",
    status: "live",
    logo: "/products/twidii.svg",
  },
];

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
