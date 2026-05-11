import type { Substrate } from "@/lib/site";

export type ResearchKind = "paper" | "preprint" | "project" | "talk" | "dataset";

export type ResearchEntry = {
  slug: string;
  title: string;
  kind: ResearchKind;
  substrate: Substrate;
  date: string;
  authors: string[];
  affiliations: string[];
  abstract: string;
  body: string;
  links?: { label: string; href: string }[];
  citation?: string;
};

export const research: ResearchEntry[] = [
  {
    slug: "low-data-nanopore-signal-classification",
    title: "On low-data regimes for nanopore signal classification",
    kind: "preprint",
    substrate: "atoms",
    date: "2025-09-12",
    authors: ["MIBTY Research", "C. Adesanya", "I. Bello"],
    affiliations: ["MIBTY NIG LTD", "University of Lagos, Genomics Lab"],
    abstract:
      "We study contrastive pretraining of nanopore squiggle data and demonstrate that a 14M-parameter model fine-tuned on 1,200 labeled events matches a 140M-parameter baseline on a held-out cohort. We release code, weights for non-clinical use, and the unlabeled pretraining corpus.",
    body:
      "Portable nanopore sequencing enables field-deployable detection but generates noisy, drifting signal that resists transfer from one device — or even one run — to the next. We propose a two-stage protocol: (i) contrastive pretraining on unlabeled squiggle data with augmentations chosen to mirror within-device drift, and (ii) cohort-specific fine-tuning with explicit calibration. Across two evaluation cohorts representing different geographic deployments, our compact model holds within 1.2 F1 points of a ten-fold larger commercial baseline while running on a $35 single-board computer.\n\nThis matters because the meaningful constraint in field nanopore is not parameter count but power and latency. A 14M-parameter model that can run on solar-powered edge hardware is qualitatively different from a 140M-parameter model that cannot.",
    links: [
      { label: "Preprint (PDF)", href: "#" },
      { label: "Code", href: "https://github.com/mibty" },
      { label: "Weights (non-clinical)", href: "#" },
    ],
    citation:
      "@article{mibty2025nanopore, title={On low-data regimes for nanopore signal classification}, author={MIBTY Research and Adesanya, C. and Bello, I.}, year={2025}}",
  },
  {
    slug: "federated-radiology-triage-evaluation",
    title: "Federated radiology triage: an evaluation framework",
    kind: "paper",
    substrate: "cells",
    date: "2025-05-22",
    authors: ["MIBTY Research", "O. Okeke", "P. Akinwale"],
    affiliations: ["MIBTY NIG LTD", "Regional Health Authority"],
    abstract:
      "We propose an evaluation framework for federated diagnostic-imaging triage systems that captures cross-site generalization, calibration drift, and prioritization fairness, and apply it to a twelve-site deployment.",
    body:
      "Most published triage models are evaluated on a single retrospective cohort. We argue this is inadequate for systems intended to operate across heterogeneous sites with different modality mixes, reader pools, and patient populations. We propose a three-layer evaluation: per-site accuracy, per-site calibration, and per-subgroup prioritization fairness. The framework is implemented as an open-source library that wraps any model conforming to a simple input/output contract.",
    links: [
      { label: "Paper", href: "#" },
      { label: "Eval library", href: "https://github.com/mibty" },
    ],
  },
  {
    slug: "metric-definitions-as-code",
    title: "Metric definitions as code: lessons from a ministry-scale rollout",
    kind: "talk",
    substrate: "data",
    date: "2025-03-08",
    authors: ["MIBTY Engineering"],
    affiliations: ["MIBTY NIG LTD"],
    abstract:
      "A practitioner talk on versioning, reviewing, and deprecating metric definitions like source code — and what we learned shipping this pattern across six government directorates.",
    body:
      "The hardest part of a multi-directorate data rollout isn't the warehouse — it's deciding what each metric *means*. We share the patterns we converged on: definitions in YAML, reviews via pull request, deprecation windows, and the social contract that holds it together.",
    links: [{ label: "Slides", href: "#" }, { label: "Recording", href: "#" }],
  },
  {
    slug: "edge-model-lifecycle-ui",
    title: "A UI for non-engineers to manage production models",
    kind: "project",
    substrate: "data",
    date: "2025-01-30",
    authors: ["MIBTY Research"],
    affiliations: ["MIBTY NIG LTD"],
    abstract:
      "We describe the design and open-source release of a model-lifecycle UI that lets risk-operations teams promote, A/B test, and retire ML models without engineering involvement.",
    body:
      "Production ML systems decay when the only people who can change them are the ones who built them. We describe a design pattern — model lifecycle as a domain object with promotion gates, traffic splits, and observable rollbacks — and release a reference implementation.",
    links: [{ label: "GitHub", href: "https://github.com/mibty" }],
  },
  {
    slug: "evaluation-set-construction",
    title: "Evaluation-set construction for LLM-driven products",
    kind: "preprint",
    substrate: "data",
    date: "2024-11-14",
    authors: ["MIBTY Research"],
    affiliations: ["MIBTY NIG LTD"],
    abstract:
      "We propose a workflow for constructing and maintaining evaluation sets that survives the model upgrade cycle, with concrete patterns for product teams.",
    body:
      "Eval sets are the only artifact in an LLM product that survives the model. We describe how to construct, curate, and version them — and the operational practices that keep them honest as the product evolves.",
    links: [{ label: "Preprint", href: "#" }],
  },
  {
    slug: "field-dataset-portable-radiology",
    title: "Open dataset: portable-radiology image quality in low-resource settings",
    kind: "dataset",
    substrate: "cells",
    date: "2024-09-04",
    authors: ["MIBTY Research", "Regional Health Authority"],
    affiliations: ["MIBTY NIG LTD"],
    abstract:
      "We release an open, de-identified dataset of portable-radiology images annotated for image-quality issues, intended to support model robustness research.",
    body:
      "Model-quality issues in deployed radiology often trace back not to disease prediction but to image-quality variation. We release a de-identified open dataset of 4,200 portable-radiology studies annotated for ten categories of image-quality issue. CC BY-SA 4.0.",
    links: [{ label: "Dataset (Zenodo)", href: "#" }],
  },
];

export function findResearch(slug: string) {
  return research.find((r) => r.slug === slug);
}
