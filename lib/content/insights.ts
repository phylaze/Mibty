export type Insight = {
  slug: string;
  title: string;
  kind: "essay" | "field-note";
  date: string;
  author: string;
  readingTime: string;
  excerpt: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "the-four-substrates",
    title: "The four substrates",
    kind: "essay",
    date: "2025-10-02",
    author: "MIBTY",
    readingTime: "6 min",
    excerpt:
      "Why we organize the work — and the company — around bits, data, cells, and atoms, and what changes when you do.",
    body: [
      "There's a quiet shift underway in how the most interesting problems get solved. They no longer respect the boundaries between disciplines. A diagnostic that matters is one part biology, one part machine learning, one part field engineering, and one part regulatory craft. A pollution sensor that gets deployed at scale is one part materials science, one part embedded firmware, one part data infrastructure, and one part product design.",
      "We organize MIBTY around four substrates: bits, data, cells, and atoms. Not as departments — as states of one underlying field of intelligent matter. The team is small enough that a single project routinely touches three of them, and the people working on it are fluent enough in each that the handoffs disappear.",
      "What changes when you organize this way? Three things. First, the work that lives in the gaps — the work that conventional firms decline because no single practice owns it — becomes our specialty. Second, the senior engineers stop being siloed and start cross-pollinating, which is the single best lever on quality we've found. Third, the company's identity becomes a thesis, not a service menu.",
      "We are aware this is harder to sell. It is. The trade is that the work we do is harder to do, harder to copy, and harder to commoditize.",
    ],
  },
  {
    slug: "evaluation-first-engineering",
    title: "Evaluation-first AI engineering",
    kind: "essay",
    date: "2025-08-18",
    author: "MIBTY",
    readingTime: "9 min",
    excerpt:
      "The eval set is the only artifact in an AI product that survives the model. Build it first.",
    body: [
      "Most AI projects start with model selection. The conversation goes: which model do we use, which prompt do we try, which framework do we build on. This is precisely backwards.",
      "The eval set is the only artifact in an AI product that survives the model. Models will get cheaper, faster, and better at a cadence outside your control. The framework you chose this year will be the framework you regret next year. The harness that lets you swap models in a Tuesday afternoon, without panic, is the harness you wrote first.",
      "Concretely: before we choose a model, we choose what \"works\" means. We write the smallest set of examples that captures it — typically 30–60 to start. We grow that set by walking the space of inputs the system will actually see in production, not the space we hope it sees. And we write the runner that scores any candidate model against the set in under three minutes.",
      "Doing it in this order isn't ascetic. It's selfish. The eval set is what makes the next twelve months tractable. Without it, you ship a model and pray. With it, you ship a methodology — and the model is just this week's instantiation.",
    ],
  },
  {
    slug: "ship-the-spine",
    title: "Ship the spine",
    kind: "field-note",
    date: "2025-06-05",
    author: "MIBTY",
    readingTime: "3 min",
    excerpt:
      "When in doubt, ship the smallest end-to-end slice — fully instrumented — before you build anything wider.",
    body: [
      "When a project gets stuck, it's almost always because the team is building width before depth. Three half-finished features. Five empty database tables. A model with no consumer.",
      "Ship the spine instead: the smallest end-to-end slice that touches every layer the eventual system will touch. One feature, one user, one query, one model call, one observable trace. The spine is what teaches you which assumptions were wrong, and it teaches you while the project is still cheap to redirect.",
      "The spine is not a prototype. It's a load-bearing structure. Treat it as such — log it, test it, ship it. Then attach width to the spine, one feature at a time.",
    ],
  },
];

export function findInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}
