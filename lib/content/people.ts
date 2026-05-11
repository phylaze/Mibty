// Leadership placeholders. The Memart records four subscribers — the
// actual people behind MIBTY. Names and bios are intentionally left as
// template tokens until the team approves what gets published. Fill in
// `name`, `role`, `bio`, and `credentials`, then add a portrait at
// `public/team/{slug}.jpg` (the portrait field is wired in /about).

export type Person = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  /** Set to true once the team has approved this person's bio for publication. */
  published: boolean;
};

export const people: Person[] = [
  {
    slug: "subscriber-1",
    name: "{{ Founder Name }}",
    role: "Chief Executive",
    bio: "Bio pending approval.",
    credentials: [],
    published: false,
  },
  {
    slug: "subscriber-2",
    name: "{{ Co-founder Name }}",
    role: "Co-founder",
    bio: "Bio pending approval.",
    credentials: [],
    published: false,
  },
  {
    slug: "subscriber-3",
    name: "{{ Director Name }}",
    role: "Director",
    bio: "Bio pending approval.",
    credentials: [],
    published: false,
  },
  {
    slug: "subscriber-4",
    name: "{{ Director Name }}",
    role: "Director",
    bio: "Bio pending approval.",
    credentials: [],
    published: false,
  },
];
