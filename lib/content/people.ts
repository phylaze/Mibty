export type Person = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
};

export const people: Person[] = [
  {
    slug: "founder",
    name: "Founder",
    role: "Chief Executive",
    bio: "Engineering leader with a decade of experience translating frontier research into deployed systems across software, AI, and biotech.",
    credentials: ["MSc, Engineering", "Open-source maintainer", "Published researcher"],
  },
  {
    slug: "head-of-ai",
    name: "Head of AI",
    role: "AI Systems Lead",
    bio: "ML engineer focused on evaluation-first model development and production systems that hold up under real users.",
    credentials: ["PhD, Computer Science", "Former research engineer, industry lab"],
  },
  {
    slug: "head-of-biotech",
    name: "Head of Biotech",
    role: "Biotechnology Lead",
    bio: "Computational biologist with experience deploying diagnostic and decision-support systems in hospital networks.",
    credentials: ["MD, Pathology", "Clinical informatics certification"],
  },
  {
    slug: "head-of-research",
    name: "Head of Research",
    role: "Research Director",
    bio: "Researcher and translator. Bridges academic output and deployable infrastructure across substrates.",
    credentials: ["PhD, Materials Science", "Multiple peer-reviewed publications"],
  },
];
