export type Substrate = "bits" | "data" | "cells" | "atoms";

export const site = {
  name: "MIBTY",
  legalName: "MIBTY NIG LTD",
  tagline: "Engineering the next layer of reality.",
  description:
    "MIBTY builds AI, software, biotech, and nanotech systems for organizations operating at the frontier.",
  url: "https://mibty.com",
  email: "hello@mibty.com",
  hq: "Lagos, Nigeria",
  social: {
    linkedin: "https://linkedin.com/company/mibty",
    x: "https://x.com/mibty",
    github: "https://github.com/mibty",
  },
} as const;

export const substrates: Record<
  Substrate,
  { label: string; description: string; accent: string; halo: string }
> = {
  bits: {
    label: "Bits",
    description: "Software, AI systems, web and cloud platforms.",
    accent: "text-cyan-400",
    halo: "halo-cyan",
  },
  data: {
    label: "Data",
    description: "Mining, analytics, intelligence pipelines, automation.",
    accent: "text-violet-300",
    halo: "halo-violet",
  },
  cells: {
    label: "Cells",
    description: "Biotechnology, life-science computation, healthtech.",
    accent: "text-mint-400",
    halo: "halo-mint",
  },
  atoms: {
    label: "Atoms",
    description: "Nanotechnology, materials, advanced sensing.",
    accent: "text-amber-300",
    halo: "halo-amber",
  },
};

export const services = [
  { slug: "ai", label: "AI systems", substrate: "data" as const },
  { slug: "software", label: "Software engineering", substrate: "bits" as const },
  { slug: "biotech", label: "Biotechnology innovation", substrate: "cells" as const },
  { slug: "nanotech", label: "Nanotechnology", substrate: "atoms" as const },
  { slug: "data", label: "Data analytics & mining", substrate: "data" as const },
  { slug: "digital-marketing", label: "Digital transformation", substrate: "bits" as const },
  { slug: "ecommerce", label: "E-commerce platforms", substrate: "bits" as const },
  { slug: "research-consulting", label: "Research consulting", substrate: "cells" as const },
];

export const nav = {
  primary: [
    { href: "/services", label: "Services" },
    { href: "/research", label: "Research" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/insights", label: "Insights" },
  ],
  footer: {
    services: services.map((s) => ({ href: `/services/${s.slug}`, label: s.label })),
    company: [
      { href: "/about", label: "About" },
      { href: "/research", label: "Research" },
      { href: "/work", label: "Work" },
      { href: "/insights", label: "Insights" },
      { href: "/careers", label: "Careers" },
      { href: "/press", label: "Press" },
    ],
    legal: [
      { href: "/legal/privacy", label: "Privacy" },
      { href: "/legal/terms", label: "Terms" },
      { href: "/legal/cookies", label: "Cookies" },
    ],
  },
};
