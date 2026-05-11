import type { Substrate } from "@/lib/site";

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: number;
  substrates: Substrate[];
  services: string[];
  excerpt: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  testimonial?: { quote: string; name: string; role: string };
  techStack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "diagnostic-latency-12-hospitals",
    title: "Cutting diagnostic latency 43% across 12 hospitals",
    client: "West African regional health authority",
    industry: "Healthcare",
    year: 2025,
    substrates: ["cells", "data", "bits"],
    services: ["AI systems", "Biotechnology innovation", "Data analytics"],
    excerpt:
      "A federated diagnostic-imaging triage system shared across twelve hospitals, integrated into existing PACS and reading workflows.",
    challenge:
      "Twelve hospitals across two countries were operating overlapping radiology workflows with non-overlapping waitlists. Average time-to-read for non-urgent imaging sat north of six days. Patient outcomes — and the reputational risk to the regional authority — were on the line.",
    approach: [
      "Audited radiology workflows at each site, mapping the variations that mattered (modality mix, reader availability, network constraints) versus the variations that didn't.",
      "Built a federated triage model trained on retrospective de-identified studies, with explicit per-modality and per-site evaluation gates. Models were retrained per region; the eval harness was shared.",
      "Integrated with each hospital's PACS via DICOM, preserving existing reader UX. The triage system surfaces a priority and a confidence — never a diagnosis.",
      "Operationalized with on-call rotations, audit trails, and a per-site dashboard that radiology leads check in under two minutes.",
    ],
    outcome:
      "Median time-to-read dropped from 6.4 days to 3.6 days within the first 90 days. Urgent cases — defined by the triage system and confirmed by the reading radiologist — saw a 71% reduction in time-to-read. Zero adverse events attributed to the system in the first year.",
    metrics: [
      { label: "Reduction in median time-to-read", value: "43%" },
      { label: "Reduction in urgent-case latency", value: "71%" },
      { label: "Sites integrated", value: "12" },
      { label: "Adverse events attributed to system (year 1)", value: "0" },
    ],
    testimonial: {
      quote:
        "MIBTY built the system the way our team would have built it if we had the engineering bench. The validation rigor was not negotiable, and they brought it.",
      name: "Director of Clinical Informatics",
      role: "Regional Health Authority",
    },
    techStack: [
      "PyTorch",
      "MONAI",
      "ONNX Runtime",
      "DICOM",
      "FHIR R4",
      "Postgres",
      "Temporal",
      "Sentry",
      "Grafana",
    ],
  },
  {
    slug: "ministry-data-platform",
    title: "A ministry-scale data platform delivered in 100 days",
    client: "National ministry, undisclosed",
    industry: "Government",
    year: 2024,
    substrates: ["data", "bits"],
    services: ["Data analytics", "Software engineering", "Digital transformation"],
    excerpt:
      "Replacing a fleet of Excel spreadsheets and ad-hoc reports with a governed data platform serving six directorates.",
    challenge:
      "A ministry's six directorates each ran their own data shop — spreadsheets, ad-hoc queries, and contradictory monthly reports. Cabinet briefings carried four different numbers for the same metric. Trust was the casualty.",
    approach: [
      "Embedded with each directorate for ten days to learn what they actually measured and where their numbers came from.",
      "Built a warehouse on Postgres + dbt, with metric definitions versioned and reviewed like code.",
      "Migrated reports one at a time. Each migration shipped with the old number and the new number side by side until the old one was retired.",
      "Trained two analysts per directorate to maintain dbt models, so the platform didn't become MIBTY-shaped after handover.",
    ],
    outcome:
      "The ministry's monthly briefing now runs from a single source. Reports that took eight days now take under an hour. Two of six directorates have started running their own quarterly analyses without engineering support — the most important outcome we could have asked for.",
    metrics: [
      { label: "Briefing-cycle compression", value: "8 days → < 1 hour" },
      { label: "Directorates onboarded", value: "6 of 6" },
      { label: "Analysts trained to maintain platform", value: "12" },
    ],
    techStack: ["Postgres", "dbt", "Dagster", "Metabase", "Airbyte", "Cloudflare Tunnel"],
  },
  {
    slug: "nanopore-detection-pipeline",
    title: "Open-source nanopore detection in low-data regimes",
    client: "University research collaboration",
    industry: "Research",
    year: 2025,
    substrates: ["atoms", "cells", "data"],
    services: ["Nanotechnology", "Research consulting", "AI systems"],
    excerpt:
      "A reproducible signal-classification pipeline for portable nanopore sequencing, published with code and weights.",
    challenge:
      "A research group running portable nanopore sequencers needed to classify low-abundance signals under realistic field conditions — limited compute, limited labeled data, and constant drift in signal characteristics across runs.",
    approach: [
      "Built a reproducible Nextflow pipeline from raw squiggle to classified call, with per-run calibration baked in.",
      "Designed a low-data training protocol: contrastive pretraining on unlabeled signal, then fine-tuning on small labeled cohorts.",
      "Open-sourced the codebase under MIT, with weights released for non-clinical use and methodology published as a preprint.",
    ],
    outcome:
      "Detection F1 on the validation cohort matched a much larger commercial baseline at one-tenth the parameter count. The preprint has been cited by three follow-up groups within four months of release.",
    metrics: [
      { label: "F1 vs. commercial baseline", value: "On par at 0.1× params" },
      { label: "Downstream citations (4 mo)", value: "3+" },
      { label: "Code & weights", value: "MIT-licensed" },
    ],
    techStack: [
      "Nextflow",
      "PyTorch",
      "HuggingFace Transformers",
      "Lightning",
      "DVC",
      "Quarto",
      "Zenodo",
    ],
  },
  {
    slug: "fintech-fraud-platform",
    title: "Real-time fraud scoring for a pan-African fintech",
    client: "Pan-African fintech, undisclosed",
    industry: "Fintech",
    year: 2024,
    substrates: ["bits", "data", "cells"],
    services: ["AI systems", "Software engineering", "Data analytics"],
    excerpt:
      "Sub-100ms transaction scoring serving five countries, with a model lifecycle that doesn't require a research scientist on call.",
    challenge:
      "Fraud losses were growing faster than transaction volume. The existing rules engine had become unmanageable — 1,400 rules, no one fully in charge. Latency budgets ruled out cloud-bound model serving.",
    approach: [
      "Built a feature store on top of the existing warehouse with strict point-in-time correctness, eliminating training-serving skew.",
      "Trained a gradient-boosted model with explicit cost-sensitive loss reflecting per-rail recovery economics.",
      "Deployed on edge runtimes co-located with payment endpoints; sub-50ms p95 inference.",
      "Built a model-lifecycle UI so risk operations — not data scientists — can promote and retire models.",
    ],
    outcome:
      "Fraud losses fell 38% in the first quarter post-launch, while false-positive rate held steady. The risk-ops team now ships a new model roughly every three weeks, without engineering involvement.",
    metrics: [
      { label: "Reduction in fraud losses (Q1)", value: "38%" },
      { label: "p95 inference latency", value: "< 50 ms" },
      { label: "Model promotion cadence", value: "~3 weeks" },
    ],
    techStack: [
      "Python",
      "XGBoost",
      "Feast",
      "Postgres",
      "Cloudflare Workers",
      "Kafka",
      "Grafana",
    ],
  },
];

export function findCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
