export type Substrate = "bits" | "data" | "cells" | "atoms";

export const site = {
  name: "MIBTY",
  legalName: "MIBTY NIG LTD",
  tagline: "Engineering the next layer of reality.",
  description:
    "MIBTY builds software, AI & robotics, biotechnology, and nanotechnology systems out of Lagos, Nigeria.",
  url: "https://mibty.com",
  email: "hello@mibty.com",
  hq: "Lagos, Nigeria",
  incorporated: "2024-02-02",
  registrationNote:
    "Incorporated under the Companies and Allied Matters Act, 2020 (CAMA).",
  social: {
    linkedin: "https://www.linkedin.com/company/mibty",
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
    description: "Software, e-commerce, web and cloud platforms.",
    accent: "text-cyan-400",
    halo: "halo-cyan",
  },
  data: {
    label: "Data",
    description: "AI & robotics, data mining and analytics.",
    accent: "text-violet-300",
    halo: "halo-violet",
  },
  cells: {
    label: "Cells",
    description: "Biotechnology for human and animal health.",
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
  { slug: "ai", label: "AI & robotics", substrate: "data" as const },
  { slug: "software", label: "Software engineering", substrate: "bits" as const },
  { slug: "biotech", label: "Biotechnology innovation", substrate: "cells" as const },
  { slug: "nanotech", label: "Nanotechnology", substrate: "atoms" as const },
  { slug: "data", label: "Data analytics & mining", substrate: "data" as const },
  { slug: "digital-marketing", label: "Digital marketing", substrate: "bits" as const },
  { slug: "ecommerce", label: "E-commerce platforms", substrate: "bits" as const },
  { slug: "research-consulting", label: "Research consulting", substrate: "cells" as const },
];

export const nav = {
  primary: [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Capabilities" },
    { href: "/research", label: "Research" },
    { href: "/about", label: "About" },
  ],
  footer: {
    services: services.map((s) => ({ href: `/services/${s.slug}`, label: s.label })),
    company: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Capabilities" },
      { href: "/research", label: "Research" },
      { href: "/contact", label: "Contact" },
    ],
    legal: [
      { href: "/legal/privacy", label: "Privacy" },
      { href: "/legal/terms", label: "Terms" },
    ],
  },
};
