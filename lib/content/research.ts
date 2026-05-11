import type { Substrate } from "@/lib/site";

// Research focus areas — domains MIBTY's research practice is positioned
// to work in, drawn from the Memart's chartered objects. These are
// areas of interest and capability, not published outputs. When
// publications, datasets, or talks exist, restructure this module to a
// `research` list of typed entries (paper / preprint / project / talk /
// dataset) and rehydrate the detail route under /research/[slug].

export type ResearchArea = {
  slug: string;
  title: string;
  substrate: Substrate;
  summary: string;
};

export const researchAreas: ResearchArea[] = [
  {
    slug: "ai-robotics-systems",
    title: "AI & robotics systems",
    substrate: "data",
    summary:
      "Evaluation-first AI development, robotics control and perception, and the systems work that makes both deployable beyond the demo.",
  },
  {
    slug: "data-mining-analytics",
    title: "Data mining and analytics",
    substrate: "data",
    summary:
      "Modeling, governance, and consumption patterns for organizations that need their data to be load-bearing — not decorative.",
  },
  {
    slug: "biotechnology",
    title: "Biotechnology",
    substrate: "cells",
    summary:
      "Computational biology, diagnostic decision support, and lab informatics for human and animal health.",
  },
  {
    slug: "nanotechnology",
    title: "Nanotechnology",
    substrate: "atoms",
    summary:
      "Materials characterization, advanced sensing, and the data infrastructure that lets nanoscale results compound across years.",
  },
  {
    slug: "software-systems",
    title: "Software systems for the long second half",
    substrate: "bits",
    summary:
      "Patterns for codebases, platforms, and digital products that stay maintainable through scale and turnover.",
  },
];
