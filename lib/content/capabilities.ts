import type { Substrate } from "@/lib/site";

// Capability statements — illustrative *kinds* of problems MIBTY is
// chartered and equipped to engineer, drawn from the Memart's stated
// business objects. These are capabilities, not completed engagements.
// When real case studies are ready, replace this module with a
// `caseStudies` array (see git history for the prior shape).

export type Capability = {
  substrate: Substrate;
  title: string;
  body: string;
};

export const capabilities: Capability[] = [
  {
    substrate: "bits",
    title: "Web, e-commerce, and cloud platforms",
    body: "Headless storefronts, web applications, and the cloud infrastructure they run on — designed for the long second half of a product's life, not the first launch.",
  },
  {
    substrate: "bits",
    title: "Digital marketing and growth surfaces",
    body: "Acquisition, conversion, and retention surfaces built into the product — analytics, lifecycle automation, and experimentation under one roof.",
  },
  {
    substrate: "data",
    title: "AI & robotics systems",
    body: "Production AI — custom models, retrieval, evaluation, and the surrounding infrastructure. Robotics control and perception where the engagement calls for it.",
  },
  {
    substrate: "data",
    title: "Data mining and analytics",
    body: "Modern data stacks: warehouse, modeling, governance, consumption. One source of truth, tested transformations, cost-aware by design.",
  },
  {
    substrate: "cells",
    title: "Biotechnology innovation",
    body: "Computational biology, lab informatics, and decision-support systems for human and animal health — built with researchers, not at them.",
  },
  {
    substrate: "atoms",
    title: "Nanotechnology",
    body: "Workflows, characterization pipelines, and sensing systems for nanoscale materials — from molecule to working sensor.",
  },
  {
    substrate: "cells",
    title: "Research consulting and translation",
    body: "Bridging research output and deployable infrastructure for universities, ministries, and foundations. Open methodology where IP permits.",
  },
];
