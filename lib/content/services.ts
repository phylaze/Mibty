import type { Substrate } from "@/lib/site";

export type Service = {
  slug: string;
  label: string;
  substrate: Substrate;
  oneLiner: string;
  outcome: string;
  problem: string[];
  workflow: { step: string; title: string; body: string }[];
  technologies: string[];
  benefits: { title: string; body: string; metric?: string }[];
  industries: string[];
  faq: { q: string; a: string }[];
  adjacent: string[];
  caseStudy?: string;
};

export const services: Service[] = [
  {
    slug: "ai",
    label: "AI systems",
    substrate: "data",
    oneLiner: "Production AI, not demos.",
    outcome:
      "We build AI systems that ship — from custom models to retrieval, evaluation, and the surrounding infrastructure that turns intelligence into reliable software.",
    problem: [
      "Most AI projects stall between the notebook and the system. The model works; the product doesn't.",
      "MIBTY exists for the second half: turning model behavior into infrastructure that holds up under real users, real edge cases, and real cost constraints.",
    ],
    workflow: [
      {
        step: "01",
        title: "Frame",
        body: "We map the decision the AI has to make, the data it can see, and the constraints — latency, cost, audit. No model selection before this.",
      },
      {
        step: "02",
        title: "Prototype",
        body: "Smallest end-to-end system that touches every layer: retrieval, model, eval, UX. Measured against a baseline.",
      },
      {
        step: "03",
        title: "Evaluate",
        body: "We build the eval set first. Models get swapped; the eval stays. This is what makes the system improvable.",
      },
      {
        step: "04",
        title: "Scale",
        body: "Observability, fallbacks, caching, cost ceilings, on-call. The boring infrastructure that lets the interesting model run for years.",
      },
    ],
    technologies: [
      "Claude",
      "GPT-5",
      "Open-weights (Llama, Mistral)",
      "vLLM",
      "PyTorch",
      "LangGraph",
      "Weights & Biases",
      "DSPy",
      "Pydantic",
      "Modal",
      "Vercel AI SDK",
      "pgvector",
    ],
    benefits: [
      {
        title: "Evaluation-first",
        body: "We build the test set before we choose the model. That's the difference between AI that improves and AI that drifts.",
        metric: "10× model swaps with zero regressions in a typical engagement",
      },
      {
        title: "Latency you can quote",
        body: "P95 budgets enforced at the architecture level — streaming, caching, parallel calls — not hoped for at runtime.",
      },
      {
        title: "Cost ceilings, not surprises",
        body: "Per-call cost tracked from day one. We design for the unit economics, not against them.",
      },
    ],
    industries: ["Healthcare", "Government", "Enterprise", "Research", "Startups"],
    faq: [
      {
        q: "Do you train custom models or use frontier models?",
        a: "Both — and the choice is the work. Frontier models for breadth and pace, fine-tuned or distilled models where latency, cost, or privacy demand it. We don't have a religion.",
      },
      {
        q: "How do you handle hallucination and reliability?",
        a: "Evaluation harnesses for every behavior we ship, deterministic fallbacks for high-stakes paths, structured outputs validated at the boundary, and audit logs by default.",
      },
      {
        q: "Who owns the IP?",
        a: "You do — code, weights of fine-tunes, eval sets. We retain only generic methodology.",
      },
      {
        q: "What's the engagement model?",
        a: "Fixed-scope projects (6–16 weeks), embedded teams (3–12 months), or research partnerships. We'll recommend a fit on the first call.",
      },
    ],
    adjacent: ["data", "software"],
  },
  {
    slug: "software",
    label: "Software engineering",
    substrate: "bits",
    oneLiner: "Web and cloud platforms that don't decay.",
    outcome:
      "End-to-end product engineering — TypeScript, edge, Postgres, queues, observability — built with the kind of care that compounds for years.",
    problem: [
      "Most codebases get worse on a schedule. The first feature ships fast; the tenth fights the architecture.",
      "We build for the tenth feature. That means investment up-front in modeling, types, tests, and observability — and ruthlessness about what doesn't need to exist.",
    ],
    workflow: [
      {
        step: "01",
        title: "Model the domain",
        body: "Types and database schema before screens. If the model is right, half the bugs never get written.",
      },
      {
        step: "02",
        title: "Spine first",
        body: "The smallest end-to-end slice: one critical user flow, fully instrumented. Then everything else attaches to that spine.",
      },
      {
        step: "03",
        title: "Surface area at the edges",
        body: "Validation, authn, rate limits, and observability live at the boundary — not scattered through the app.",
      },
      {
        step: "04",
        title: "Ship and watch",
        body: "Real-user monitoring, error tracing, perf budgets enforced in CI. Regressions caught before users complain.",
      },
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "React Server Components",
      "Tailwind",
      "Postgres",
      "Drizzle / Prisma",
      "tRPC",
      "Zod",
      "Vercel / Cloudflare",
      "Sentry",
      "OpenTelemetry",
      "GitHub Actions",
    ],
    benefits: [
      {
        title: "Type safety end-to-end",
        body: "Database column to React component, one inferred type. Refactors complete in hours, not weeks.",
      },
      {
        title: "Performance budgets in CI",
        body: "Every PR runs Lighthouse and bundle-size checks. Slow code can't ship by accident.",
        metric: "p75 LCP under 1.5s on our reference deployments",
      },
      {
        title: "Observability by default",
        body: "Errors, traces, and real-user metrics flow from day one — not bolted on after the first outage.",
      },
    ],
    industries: ["Healthcare", "Enterprise", "Government", "Education", "Fintech"],
    faq: [
      {
        q: "Can you work on existing codebases?",
        a: "Yes — most of our work is. We audit, stabilize, and incrementally refactor. We don't pitch rewrites unless the math is unambiguous.",
      },
      {
        q: "What's your testing philosophy?",
        a: "Type system first, integration tests second, unit tests where logic justifies them. We don't chase coverage; we chase confidence.",
      },
      {
        q: "Do you do mobile?",
        a: "React Native for cross-platform; native iOS/Android via partner studios when the use case demands it.",
      },
    ],
    adjacent: ["ai", "data"],
  },
  {
    slug: "biotech",
    label: "Biotechnology innovation",
    substrate: "cells",
    oneLiner: "Computation that respects biology.",
    outcome:
      "Software, models, and data infrastructure for life-science teams — diagnostics, omics, lab informatics — built with researchers, not at them.",
    problem: [
      "Biology breaks software's favorite assumptions: data is messy, biased, expensive, and ethically constrained. Off-the-shelf tools don't survive contact with it.",
      "MIBTY builds with biotech, healthtech, and academic teams to ship systems that hold up in the wet lab, the clinic, and the regulator's hands.",
    ],
    workflow: [
      {
        step: "01",
        title: "Embed",
        body: "We sit with the scientists. The interesting variables aren't in the spec.",
      },
      {
        step: "02",
        title: "Pipeline",
        body: "Reproducible data pipelines first — Nextflow / Snakemake — because every downstream model is downstream of the pipeline's integrity.",
      },
      {
        step: "03",
        title: "Model with bounds",
        body: "Models with explicit uncertainty, validation across cohorts, and refusal modes for out-of-distribution inputs.",
      },
      {
        step: "04",
        title: "Hand-off",
        body: "Documentation, audit trails, and a clinician/scientist-facing UI that someone who didn't build it can actually use.",
      },
    ],
    technologies: [
      "Nextflow",
      "Snakemake",
      "PyTorch",
      "scikit-learn",
      "HuggingFace",
      "DVC",
      "AnnData / Scanpy",
      "BioPython",
      "FHIR",
      "DICOM",
      "OMOP-CDM",
      "Postgres",
    ],
    benefits: [
      {
        title: "Reproducibility, audited",
        body: "Every run versioned: data, code, environment, parameters. Replays in one command.",
      },
      {
        title: "Validation across cohorts",
        body: "Performance reported per subgroup before per-population. We don't hide model failure modes in averages.",
      },
      {
        title: "Built for regulators",
        body: "Documentation aligned with FDA Pre-Cert / CE-IVDR / GxP from the start, not retrofitted at submission.",
      },
    ],
    industries: ["Hospitals", "Pharma", "Diagnostics", "Universities", "Biotech startups"],
    faq: [
      {
        q: "Do you handle clinical data?",
        a: "Yes, under HIPAA / NDPR / GDPR depending on jurisdiction. Data residency and processing addenda are part of the engagement scope.",
      },
      {
        q: "Can MIBTY support a regulatory submission?",
        a: "We build the technical documentation, validation reports, and traceability matrices. Regulatory strategy stays with your QA/RA team or partner consultancy.",
      },
      {
        q: "What domains have you worked in?",
        a: "Diagnostic imaging, single-cell omics, EHR-driven decision support, and nanopore-based detection. Ask us about specifics under NDA.",
      },
    ],
    adjacent: ["ai", "nanotech"],
  },
  {
    slug: "nanotech",
    label: "Nanotechnology",
    substrate: "atoms",
    oneLiner: "From molecule to working sensor.",
    outcome:
      "R&D and translation services for nanoscale materials and sensing — characterization workflows, lab automation, and the data infrastructure that makes results reusable.",
    problem: [
      "Nanotech results often live in lab notebooks, spreadsheets, and one researcher's head. Reproducing a result a year later means rebuilding the experiment.",
      "We build the digital substrate for nano: characterization pipelines, sensor data acquisition, and a knowledge base that compounds.",
    ],
    workflow: [
      {
        step: "01",
        title: "Map the workflow",
        body: "Where does the data come from, where does it die, and what decisions does it inform?",
      },
      {
        step: "02",
        title: "Instrument",
        body: "Acquisition, automated metadata capture, calibration tracking — at the instrument, not after.",
      },
      {
        step: "03",
        title: "Pipeline & store",
        body: "Reproducible processing, versioned datasets, queryable knowledge graph.",
      },
      {
        step: "04",
        title: "Decide",
        body: "Dashboards, models, and alerts surfaced where the researcher actually works.",
      },
    ],
    technologies: [
      "Python",
      "Jupyter",
      "Pandas",
      "scikit-image",
      "MATLAB integration",
      "OPC-UA",
      "MQTT",
      "TimescaleDB",
      "Apache Arrow",
      "Materials Project APIs",
    ],
    benefits: [
      {
        title: "Metadata at acquisition",
        body: "Calibration, environment, operator, instrument config — captured automatically, not transcribed from memory.",
      },
      {
        title: "Cross-instrument queryable",
        body: "Datasets from SEM, AFM, Raman, and XRD living in one schema. New experiments stand on every prior one.",
      },
      {
        title: "From lab to field",
        body: "Sensor prototypes promoted to production-grade firmware with the same data model end to end.",
      },
    ],
    industries: ["Materials science", "Energy", "Environmental sensing", "Medical devices"],
    faq: [
      {
        q: "Do you fabricate?",
        a: "We partner with foundries and university labs for fabrication. MIBTY's contribution is software, data, and characterization workflows.",
      },
      {
        q: "Can you work with a small research group?",
        a: "Yes. Most of our nano engagements start at the 1–3 researcher scale. The platform we build grows with the group.",
      },
    ],
    adjacent: ["biotech", "data"],
  },
  {
    slug: "data",
    label: "Data analytics & mining",
    substrate: "data",
    oneLiner: "From raw logs to decisions executives trust.",
    outcome:
      "Modern data stacks — warehouses, models, dashboards, and the governance to keep them honest.",
    problem: [
      "Most companies have more data than insight. Dashboards proliferate; trust evaporates.",
      "We build the spine: warehouse → modeling → governance → consumption — and we cut what doesn't earn its place.",
    ],
    workflow: [
      {
        step: "01",
        title: "Audit",
        body: "Where does data come from, which numbers do leaders trust, and which numbers are quietly contradicting each other?",
      },
      {
        step: "02",
        title: "Warehouse + model",
        body: "ELT into a single warehouse, dbt models with tests, lineage from source to dashboard.",
      },
      {
        step: "03",
        title: "Govern",
        body: "Definitions versioned, SLAs on freshness, access policies in code.",
      },
      {
        step: "04",
        title: "Enable",
        body: "Self-serve analytics for the teams that need it — with guardrails, not chaos.",
      },
    ],
    technologies: [
      "Snowflake / BigQuery / Postgres",
      "dbt",
      "Fivetran / Airbyte",
      "Metabase / Hex / Lightdash",
      "Dagster",
      "Great Expectations",
      "Cube",
      "DuckDB",
    ],
    benefits: [
      {
        title: "One source of truth",
        body: "Metrics defined once, consumed everywhere. The CEO and the analyst see the same number for the same word.",
      },
      {
        title: "Tested transformations",
        body: "dbt tests run on every model. Bad data fails the build, not the boardroom.",
      },
      {
        title: "Cost-aware by design",
        body: "Warehouse cost monitored per query and per dashboard. No silent six-figure surprises.",
      },
    ],
    industries: ["Enterprise", "Fintech", "Government", "Healthcare", "Retail"],
    faq: [
      {
        q: "Do you replace existing BI?",
        a: "Rarely. Most of the time we strengthen the layer underneath — the existing dashboards become more trustworthy without anyone re-learning a tool.",
      },
      {
        q: "What about ML on top of this?",
        a: "A clean warehouse is the prerequisite for useful ML. We do both, but in that order.",
      },
    ],
    adjacent: ["ai", "software"],
  },
  {
    slug: "digital-marketing",
    label: "Digital transformation",
    substrate: "bits",
    oneLiner: "Modernization with a measurable line at the end.",
    outcome:
      "Operations, internal tools, and customer-facing platforms rebuilt around current technology — with measured outcomes, not deliverables.",
    problem: [
      "\"Digital transformation\" is usually a slide deck. Useful transformation is a re-engineered process with the metric to prove it.",
      "MIBTY scopes engagements around the metric: time-to-decision, throughput, error rate, customer activation — and ships the systems that move it.",
    ],
    workflow: [
      {
        step: "01",
        title: "Find the metric",
        body: "Which number moves, by how much, and what's the path? If we can't answer, we don't take the engagement.",
      },
      {
        step: "02",
        title: "Re-engineer the process",
        body: "Before tools, the workflow. Most digital projects fail because they automate the wrong sequence.",
      },
      {
        step: "03",
        title: "Build & integrate",
        body: "New systems plug into existing identity, finance, and operational tooling. No greenfield islands.",
      },
      {
        step: "04",
        title: "Measure & iterate",
        body: "Six-week and six-month checkpoints against the metric. We don't disappear after launch.",
      },
    ],
    technologies: [
      "Next.js",
      "Postgres",
      "Temporal",
      "Auth0 / WorkOS",
      "Segment",
      "Customer.io",
      "Retool",
      "Airtable APIs",
      "n8n",
      "Zapier",
    ],
    benefits: [
      {
        title: "Outcome-anchored scope",
        body: "Scopes are written against the metric, not the feature list. If it doesn't move the metric, it doesn't ship.",
      },
      {
        title: "Integrated, not bolted-on",
        body: "Identity, billing, support, and analytics stitched together so handoffs disappear.",
      },
      {
        title: "Six-month accountability",
        body: "We commit to the metric at six months, not at handover.",
      },
    ],
    industries: ["Enterprise", "Government", "Healthcare", "Education", "Logistics"],
    faq: [
      {
        q: "Is this consulting or build?",
        a: "Build, with the strategy work compressed into the first 2–3 weeks. We don't sell PowerPoint.",
      },
      {
        q: "Can you work with internal IT?",
        a: "Yes — most of our work runs alongside existing teams. We integrate; we don't replace.",
      },
    ],
    adjacent: ["data", "software"],
  },
  {
    slug: "ecommerce",
    label: "E-commerce platforms",
    substrate: "bits",
    oneLiner: "Commerce that scales without compromise.",
    outcome:
      "Composable storefronts and back-office tooling — fast, instrumented, and aligned with how the business actually sells.",
    problem: [
      "Templated storefronts break at the edges of what a real business needs: bundling, tax complexity, multi-region, returns, B2B pricing.",
      "We build composable commerce that bends to the business — not the other way around.",
    ],
    workflow: [
      {
        step: "01",
        title: "Model the catalog",
        body: "Products, variants, bundles, regions, channels. Get this right and the rest follows.",
      },
      {
        step: "02",
        title: "Headless storefront",
        body: "Next.js + commerce engine (Shopify Hydrogen, Medusa, or Commerce Layer). Fast at p75, accessible by default.",
      },
      {
        step: "03",
        title: "Operations",
        body: "Order ops, fulfillment, returns, fraud, finance reconciliation — instrumented, not improvised.",
      },
      {
        step: "04",
        title: "Growth surfaces",
        body: "PDP / PLP / checkout experimentation; first-party analytics; lifecycle automation.",
      },
    ],
    technologies: [
      "Shopify Hydrogen",
      "Medusa",
      "Commerce Layer",
      "Stripe",
      "Paystack",
      "Klaviyo",
      "Algolia",
      "Sanity / Contentful",
      "Cloudflare Workers",
    ],
    benefits: [
      {
        title: "p75 sub-1.5s on mobile",
        body: "Storefront performance budget enforced in CI. Page speed is conversion.",
      },
      {
        title: "Composable, not coupled",
        body: "CMS, search, payment, analytics — swappable layers, not a monolith.",
      },
      {
        title: "Operations that match growth",
        body: "Back-office tooling built alongside the storefront so ops doesn't become the bottleneck at 10×.",
      },
    ],
    industries: ["DTC brands", "B2B distributors", "Marketplaces", "Subscription"],
    faq: [
      {
        q: "Shopify or custom?",
        a: "Shopify when the business fits the model; headless or custom when it doesn't. Most of our wins are headless on top of Shopify.",
      },
      {
        q: "Africa-specific payment rails?",
        a: "Yes — Paystack, Flutterwave, mobile money. Engagements out of Lagos default to a multi-rail payment design.",
      },
    ],
    adjacent: ["data", "software"],
  },
  {
    slug: "research-consulting",
    label: "Research consulting",
    substrate: "cells",
    oneLiner: "Frontier science, translated.",
    outcome:
      "Strategy and technical support for research teams, foundations, and ministries moving science into deployable systems.",
    problem: [
      "There's a gulf between the lab and the deployed system. Most consultancies can only stand on one side of it.",
      "MIBTY's research practice sits in the gulf — between principal investigators, ministries, and engineering teams — translating scientific output into actionable infrastructure.",
    ],
    workflow: [
      {
        step: "01",
        title: "Map the science",
        body: "Read the papers, talk to the PIs, write what's actually known vs. claimed.",
      },
      {
        step: "02",
        title: "Define translation paths",
        body: "Which findings have a path to deployment, with which partners, under which constraints?",
      },
      {
        step: "03",
        title: "Prototype",
        body: "Smallest deployable instance of the science — usually with a research partner co-author.",
      },
      {
        step: "04",
        title: "Publish & open",
        body: "Open methodology, open code where possible, peer-reviewed where it sharpens the work.",
      },
    ],
    technologies: [
      "LaTeX / Typst",
      "Quarto",
      "Jupyter",
      "Zenodo",
      "ORCID",
      "OSF",
      "GitHub research workflows",
    ],
    benefits: [
      {
        title: "Translated, not summarized",
        body: "Outputs are deployable artifacts — code, datasets, protocols — not 50-page reports.",
      },
      {
        title: "Open by default",
        body: "Where IP permits, we publish methodology and code. The compounding effect is real.",
      },
      {
        title: "Multi-stakeholder fluency",
        body: "We speak to PIs, ministries, foundations, and engineering teams in their own register.",
      },
    ],
    industries: [
      "Universities",
      "Government agencies",
      "Foundations",
      "Research institutes",
      "Multilateral organizations",
    ],
    faq: [
      {
        q: "Do you write grants?",
        a: "We co-author technical sections and budgets. Strategy stays with your grants office.",
      },
      {
        q: "What's a typical engagement length?",
        a: "Three to twelve months. Research timelines don't compress well.",
      },
    ],
    adjacent: ["biotech", "ai"],
  },
];

export function findService(slug: string) {
  return services.find((s) => s.slug === slug);
}
