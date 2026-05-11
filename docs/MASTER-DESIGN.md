# MIBTY — Master Design & Architecture Blueprint

> **One-line positioning:** *Engineering the next layer of reality — across code, cells, and atoms.*
>
> **Strategic mission of this document:** the single source of truth for brand, product, design system, content architecture, motion, technical stack, and build sequencing for the MIBTY NIG LTD website. Treat every section as a contract for implementation.

---

## 0. Executive summary

MIBTY operates across four substrates of intelligent matter — **bits** (software, AI), **data** (analytics, mining), **cells** (biotech), and **atoms** (nanotechnology) — and applies them as services, research, and products. The brand problem is *legibility*: a multi-disciplinary technology company easily reads as unfocused. The brand solution is a **single conceptual armature** ("intelligent matter / structured intelligence") expressed through one consistent visual field, with each discipline rendered as a distinct *state* of that field.

The website is the primary instrument for three audiences:

| Audience | Goal | Conversion event |
|---|---|---|
| Enterprise / Government / Healthcare | Hire MIBTY for a project | Book consultation |
| Investors / Partners | Evaluate credibility & trajectory | Download capability deck / contact |
| Researchers / Universities | Collaborate on R&D | Submit collaboration brief |

Every page below is engineered backward from one of those events.

---

## 1. Brand strategy

### 1.1 Positioning statement

> For organizations operating at the frontier of what technology and science can do, MIBTY is the multidisciplinary innovation partner that engineers solutions across software, AI, biotech, and nanotech — because the hardest problems no longer respect the boundaries between disciplines.

### 1.2 Brand pillars (the "four substrates")

1. **BITS** — Software engineering, AI systems, web/cloud platforms, e-commerce.
2. **DATA** — Mining, analytics, intelligence pipelines, automation.
3. **CELLS** — Biotechnology, life-science computation, healthtech.
4. **ATOMS** — Nanotechnology, materials, advanced sensing.

These pillars are how the website organizes services, research, case studies, and even visual treatments. A user landing on any page should be able to locate themselves on this 4-pillar grid within 2 seconds.

### 1.3 Personality

| Dimension | Setting |
|---|---|
| Voice | Precise, confident, curious. Sentences are short. Verbs do the work. |
| Tone | Senior, low-ego, technically literate. Never breathless. Never jargon-heavy. |
| Visual character | Obsidian, luminous, scientific, generous whitespace, restrained color. |
| What we are not | A flashy "AI startup" template. Not playful, not corporate-stock, not chaotic. |

### 1.4 Tagline candidates (rank-ordered)

1. **"Engineering the next layer of reality."** *(primary recommendation — broad, true, ambitious)*
2. "Intelligence, in every substrate."
3. "Across code, cells, and atoms."
4. "Where research becomes infrastructure."
5. "From frontier science to working systems."

### 1.5 Messaging hierarchy

- **H1 (hero):** Engineering the next layer of reality.
- **H2 (sub-hero):** MIBTY builds AI, software, biotech, and nanotech systems for organizations operating at the frontier.
- **Proof line (under hero):** Trusted by research institutions, healthcare leaders, and enterprises across [N] countries.
- **CTA primary:** *Book a consultation* — opens Cal.com modal.
- **CTA secondary:** *See our work* — anchors to portfolio strip.

---

## 2. Information architecture & sitemap

```
/
├── /                              Homepage
├── /about                         Company, philosophy, leadership
├── /services                      Index of capabilities
│   ├── /services/ai
│   ├── /services/software
│   ├── /services/biotech
│   ├── /services/nanotech
│   ├── /services/data
│   ├── /services/digital-marketing
│   ├── /services/ecommerce
│   └── /services/research-consulting
├── /research                      Lab — publications, ongoing work
│   └── /research/[slug]           Individual paper / project
├── /work                          Case studies & portfolio
│   └── /work/[slug]               Case study
├── /insights                      Long-form articles, technical writing
│   └── /insights/[slug]
├── /contact                       Forms, booking, locations
├── /careers                       (Phase 2) culture, openings
├── /press                         (Phase 2) media kit, logos
└── /legal/[privacy|terms|cookies]
```

### 2.1 Navigation system

**Primary nav (sticky, glass surface):**
`Logo · Services ▾ · Research · Work · About · Insights · [Book a call]`

- `Services` opens a **mega-menu** with the 4 substrates as columns. Each column lists its services with a one-line description and a tiny animated glyph.
- `[Book a call]` is the only filled button in the nav — drives the primary conversion.
- On scroll-down → nav contracts (height shrinks 72→56px, label opacity → 0.85). On scroll-up → re-expands. Never disappears.
- Mobile: hamburger → full-screen sheet with staggered reveal of nav items.

**Footer (advanced):**
- Column 1: brand block, address (Lagos / global), short manifesto.
- Column 2: Services (full list).
- Column 3: Research, Work, Insights, Careers.
- Column 4: Newsletter ("The MIBTY Field" — monthly research dispatch). Email + opt-in.
- Sub-footer: socials, legal, current local time at HQ ("Lagos · 14:32 UTC+1") as a live element, theme toggle, language switcher (EN baseline; FR/ES Phase 2).

---

## 3. UX flows & conversion strategy

### 3.1 Primary flows

**Flow A — Enterprise client (highest value)**
`Homepage hero → Industries strip → Services overview → click Service detail → Case study → Book consultation`
- Time-to-CTA target: < 90 seconds.
- Friction point to remove: don't make them read everything before booking — `[Book a call]` is sticky in the right rail on service detail pages.

**Flow B — Investor**
`Homepage → About → Research → Capability deck download (gated by email)`
- Investors scan; design accordingly. About page leads with metrics and trajectory, not narrative.

**Flow C — Researcher / collaborator**
`Research → Specific publication → Collaboration brief form`
- Form is *not* a generic contact form — fields are: institution, research domain, proposed collaboration scope, timeline, funding status.

### 3.2 Conversion optimization principles

1. **One primary CTA per viewport.** Never compete two filled buttons in the same fold.
2. **Social proof early.** Logo strip within 600px of fold-1 on every entry page.
3. **Specificity beats adjectives.** "Reduced diagnostic latency 43% across 12 hospitals" > "We deliver excellent solutions."
4. **Forms have escape velocity.** First field is short and easy. Multi-step where >5 fields. Each step has a progress indicator.
5. **Mobile thumbs.** Primary CTAs sit in the natural thumb zone on mobile (bottom 40% of viewport).
6. **Trust ladder.** Logos → metrics → quoted testimonials → named case studies → research output → leadership credentials.
7. **No dark patterns.** No "Do you really want to leave?" modals. No hidden unsubscribes.

### 3.3 Key metrics (instrumented from day 1)

- Consultation booking rate (bookings / unique sessions).
- Service-page → case-study traversal rate.
- Time-to-first-meaningful-paint (target < 1.2s).
- Newsletter conversion (target > 2.5% of unique visitors).
- Bounce on hero (target < 35%).
- Capability deck download rate (proxy for investor interest).

---

## 4. Visual identity system

### 4.1 Color system

The system has **one obsidian base, one luminous primary, four substrate accents, and one warm investor tone.** Restraint is the signature.

| Token | Hex | Role |
|---|---|---|
| `--ink-900` | `#06070A` | Page base (dark mode) |
| `--ink-800` | `#0A0B10` | Surface base |
| `--ink-700` | `#10131B` | Elevated surface |
| `--ink-600` | `#1A1E2A` | Card border / hairline |
| `--ink-500` | `#2A2F3D` | Divider |
| `--mist-100` | `#FAFAF7` | Page base (light mode) |
| `--mist-200` | `#F1F1EC` | Surface (light) |
| `--mist-300` | `#E4E4DD` | Border (light) |
| `--text-hi` | `#F5F5F2` | Primary text on dark |
| `--text-mid` | `#B5B7BD` | Secondary text |
| `--text-low` | `#7A7E89` | Tertiary text |
| `--violet-500` | `#7C5CFF` | **Primary brand — innovation plasma** |
| `--violet-300` | `#A99BFF` | Hover / glow |
| `--cyan-400` | `#22D3EE` | Signal accent (BITS, DATA) |
| `--mint-400` | `#5EEAD4` | Substrate: CELLS (biotech) |
| `--amber-300` | `#F5C97A` | Substrate: ATOMS (nano) — warm metallic |
| `--cream-100` | `#F5E6C8` | Investor warmth (used sparingly in editorial typesetting) |
| `--danger-500` | `#FF5470` | Destructive only |
| `--success-500` | `#42D392` | Confirmation only |

**Signature gradients (use ≤ 1 per viewport):**

```
--gradient-plasma:   linear-gradient(135deg, #7C5CFF 0%, #22D3EE 100%);
--gradient-substrate: conic-gradient(from 220deg at 50% 50%, #7C5CFF, #22D3EE, #5EEAD4, #F5C97A, #7C5CFF);
--gradient-veil:      radial-gradient(60% 60% at 50% 0%, rgba(124,92,255,0.18), transparent 70%);
```

Substrate-coding: every service card / case study / research entry carries a 2px luminous border-top in its substrate accent. This is the single most important wayfinding signal in the system — users learn within 30 seconds that violet=AI, cyan=software/data, mint=biotech, amber=nano.

### 4.2 Typography system

**Type families (recommended — all production-ready):**

| Role | Font | Fallback | Why |
|---|---|---|---|
| Display & UI | **Geist Sans** | Inter, system-ui | Vercel's typeface. Geometric, precise, premium-feel, free. |
| Mono / technical | **Geist Mono** | JetBrains Mono | Pairs natively with Geist Sans. |
| Editorial / research serif | **Fraunces** (opsz, soft) | Tiempos, Georgia | Variable serif. Adds scientific gravitas to research and long-form. |

Paid upgrades when budget allows: **Söhne** (display+text) and **GT Sectra Display** (research). Architecture below is family-agnostic.

**Type scale (modular, 1.250 ratio at desktop, fluid via `clamp`):**

| Token | Size (desktop) | Size (mobile) | Tracking | Use |
|---|---|---|---|---|
| `display-xl` | 96px / 0.95 | 56px / 1.02 | -0.04em | Hero H1 only |
| `display-l`  | 72px / 1.0  | 44px / 1.05 | -0.035em | Page H1 |
| `display-m`  | 56px / 1.05 | 36px / 1.1  | -0.03em | Section H2 |
| `display-s`  | 40px / 1.1  | 28px / 1.15 | -0.025em | Sub-section |
| `headline`   | 28px / 1.2  | 22px / 1.25 | -0.015em | Card titles |
| `title`      | 20px / 1.3  | 18px / 1.35 | -0.01em | Component titles |
| `body-l`     | 18px / 1.55 | 17px / 1.6  | 0 | Marketing body |
| `body`       | 16px / 1.6  | 16px / 1.6  | 0 | Default body |
| `body-s`     | 14px / 1.55 | 14px / 1.55 | 0.005em | Captions, meta |
| `eyebrow`    | 12px / 1.0  | 12px / 1.0  | 0.16em UPPERCASE | Section labels |
| `mono-s`     | 13px / 1.5  | 13px / 1.5  | 0 | Code, badges, technical |

**Pairing rules:**
- Hero: `display-xl` Geist Sans, weight 500. Never bold-bold-bold; weight 500–600 reads more premium than 700+ at large sizes.
- Research / long-form: `display-l` Fraunces, opsz 144, italic for emphasis lines.
- Eyebrows above headings — *always*, in `--violet-300` for brand sections, in substrate color for service sections.

### 4.3 Spacing & layout

**Spacing scale (4px base):** `0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 200`.

**Grid:**
- Desktop ≥1440: 12-col, 96px outer margin, 32px gutter, 1248px max content width.
- Laptop 1024–1439: 12-col, 64px margin, 24px gutter.
- Tablet 768–1023: 8-col, 40px margin, 20px gutter.
- Mobile <768: 4-col, 20px margin, 16px gutter.
- Section vertical rhythm: 160px desktop / 96px mobile between sections. 80px / 56px within section.

**Container hierarchy:**
- `container-prose` (max 720px) — long-form text.
- `container-default` (max 1248px) — most marketing sections.
- `container-wide` (max 1440px) — hero, immersive sections.
- `container-bleed` (100vw) — full-bleed visuals only.

### 4.4 Border-radius & elevation

| Token | Value | Use |
|---|---|---|
| `radius-xs` | 4px | Pills, inline tags |
| `radius-s` | 8px | Inputs, small buttons |
| `radius-m` | 12px | Cards, mid-buttons |
| `radius-l` | 20px | Feature cards, modals |
| `radius-xl` | 32px | Hero cards, immersive panels |
| `radius-full` | 999px | Avatar, pill CTA |

**Shadow system (dark-mode-aware; in dark mode shadows become luminous *halos*, not greyscale drops):**

```
--shadow-sm:   0 1px 2px rgba(0,0,0,0.4);
--shadow-md:   0 6px 24px -8px rgba(0,0,0,0.5);
--shadow-lg:   0 24px 48px -12px rgba(0,0,0,0.55);
--halo-violet: 0 0 0 1px rgba(124,92,255,0.18), 0 12px 48px -12px rgba(124,92,255,0.45);
--halo-cyan:   0 0 0 1px rgba(34,211,238,0.18), 0 12px 48px -12px rgba(34,211,238,0.40);
--halo-mint:   0 0 0 1px rgba(94,234,212,0.18), 0 12px 48px -12px rgba(94,234,212,0.40);
--halo-amber:  0 0 0 1px rgba(245,201,122,0.18), 0 12px 48px -12px rgba(245,201,122,0.40);
```

### 4.5 Iconography

- **Stroke icons** at 1.5px on a 24px grid — Lucide as base library, custom set (~24 glyphs) for substrate metaphors: neural mesh, double helix, lattice, signal field, particle, wave, node, edge, orbit, microscope.
- All custom icons drawn from a single 2px-on-24 grid system so they look like a family, not an assortment.
- No filled icons in nav — filled only for status indicators.

### 4.6 Illustration & imagery direction

Three layered imagery registers — never mix two on the same page:

1. **Field renders** *(primary)* — generative dark backdrops: noise fields, particle flows, fluid lattices, bloom-lit volumetric meshes. Built procedurally in WebGL/R3F so they animate. Aesthetic touchpoints: Refik Anadol, NVIDIA marketing renders, Apple's late-WWDC backdrops, Linear's mesh gradients — but cooler, more scientific, less candy.
2. **Specimen photography** *(research / biotech)* — high-contrast macro stills: chips, cells under microscope, lab glass, sensor arrays. Always shot or treated to a unified palette (cool obsidian + a single substrate accent as rim-light).
3. **Editorial portraits** *(team / leadership)* — black-and-white, single warm rim light from `--cream-100`, subjects looking just off-camera. Never smiling team-photo stock.

**Hard rules:**
- No stock people in suits with laptops.
- No "globe with circuit lines."
- No neon-blue circuit boards.
- No emoji-style 3D illustrations.

### 4.7 Logo system (recommendations)

The wordmark `MIBTY` should be set in **Geist Sans, weight 600, tracking -0.04em**, with the `I` replaced by a vertical 2px rule that pulses on hover (1.5s ease-in-out, 30% opacity ↔ 100%) — the rule is the brand's secondary "field signal." The logomark (favicon, app icon) is a 28×28 monogram: a square with one full-bleed vertical line dividing it 1:2 — symbolizing the boundary between substrates. Wordmark and mark must work in a single ink color (no gradient logo).

---

## 5. Component system

Build with **shadcn/ui patterns + Radix primitives** on Tailwind. Below is the canonical inventory; each must exist before page composition begins.

### 5.1 Atoms

- `Button` — variants: `primary | secondary | ghost | link`; sizes: `sm | md | lg`. Primary has plasma gradient on hover, otherwise solid `--violet-500` with 1px luminous inner stroke.
- `Tag` / `Badge` — substrate-coded.
- `Input`, `Textarea`, `Select`, `Combobox`, `DatePicker` — Radix-based, with floating labels and luminous focus ring (2px outer + 1px inner).
- `Switch`, `Checkbox`, `Radio`.
- `Tooltip`, `Popover` — glass surface, 12px blur, 1px hairline border.
- `Avatar`, `AvatarGroup`.
- `Spinner`, `Skeleton` — Skeletons use shimmer aligned to the plasma gradient.
- `Kbd` — for technical pages.

### 5.2 Molecules

- `LogoCloud` — auto-marqueed on mobile, static grid on desktop.
- `MetricCard` — animated counter (intersection observer, 1.2s ease-out, integers tween, decimals tween separately for typographic stability).
- `ServiceCard` — substrate-coded, hover lifts (-2px Y) + halo glow + reveals a chevron with a 12px translate.
- `CaseStudyCard` — image-led; hover plays a 2-second silent loop preview if asset present.
- `Testimonial` — quote + portrait + meta line.
- `BreadcrumbBar` — used on detail pages.
- `Pagination`, `Tabs`, `Accordion`, `Stepper`.
- `Dialog` / `Sheet` — for forms, mobile nav, capability deck gate.

### 5.3 Organisms

- `Header` (sticky, glass, mega-menu).
- `Footer` (advanced, with newsletter + live local time).
- `HeroImmersive` — R3F canvas + headline + dual CTA.
- `SubstrateGrid` — 4-up cards introducing the four pillars.
- `ProcessTimeline` — horizontal scroll-locked on desktop, vertical on mobile (GSAP ScrollTrigger).
- `ResearchFeed` — masonry with mixed cards (paper, project, news).
- `WorkShowcase` — cinematic 1-up case study scroll section.
- `IndustriesStrip` — horizontal logo + label band.
- `MetricsBar` — 3–5 animated stats.
- `CTASection` — full-bleed, gradient veil, single H2 + button pair.
- `ConsultationForm` — multi-step, Cal.com fallback.
- `CollaborationForm` — researcher-specific.

### 5.4 Templates

- `MarketingPage`, `ServiceDetail`, `CaseStudyDetail`, `ResearchDetail`, `LongformArticle`, `LegalPage`, `FormPage`, `ErrorPage`.

---

## 6. Motion & interaction strategy

> **Principle:** Motion has to *say* something. If a transition could be a cut, it should be a cut. Reserve motion for moments of wayfinding, payoff, or proof.

### 6.1 Motion tokens

| Token | Duration | Easing | Use |
|---|---|---|---|
| `dur-instant` | 80ms | `ease-out` | Press states |
| `dur-fast` | 160ms | `cubic-bezier(.2,.8,.2,1)` | Hover, focus |
| `dur-base` | 280ms | `cubic-bezier(.2,.8,.2,1)` | Component reveals |
| `dur-slow` | 520ms | `cubic-bezier(.16,1,.3,1)` *(expo-out)* | Section reveals |
| `dur-cinematic` | 900–1400ms | `cubic-bezier(.16,1,.3,1)` | Hero entrance, cinematic moments |

### 6.2 Choreography rules

- **Stagger** child reveals at 60–80ms intervals, max 6 children before collapsing to a single reveal.
- **Respect `prefers-reduced-motion`** — replace transforms with opacity-only fades, disable parallax and R3F idle motion.
- **Scroll-driven animation** uses GSAP ScrollTrigger pinned to a single section; never lock more than one section at once.
- **Page transitions** — *no* full-page fades. Use shared-element transitions (View Transitions API where available, Framer Motion `layoutId` fallback) to morph hero text into page H1 on Service → Service detail.
- **Hover states** lift by max 2px Y, gain 6–12% halo, and reveal one micro-detail (e.g., chevron, secondary line). Never animate text size on hover.

### 6.3 Signature moments

1. **Hero "field"** — R3F particle field reacts subtly to cursor (vector field offset, max 24px), idles with 0.3 noise. On first paint, headline characters reveal in 60ms staggered uplift; CTA fades in last.
2. **Substrate transition** — when user hovers a substrate card, the page background's gradient veil shifts hue toward that substrate's accent over `dur-slow`. Single source of color truth = the active substrate.
3. **Process timeline** — 4-step horizontal scrub on desktop. Each step pin-locks for 1.2 viewport heights; numbers count up; a single thin line draws across the screen connecting steps.
4. **Metrics counter** — counts from 0 to value over 1.2s with `expo-out`; thousands separator typeset before tween starts to avoid layout shift.
5. **Logo strip** — 50% opacity baseline, 100% on row-hover (not item-hover, which feels chaotic).

---

## 7. Page-by-page blueprints

Each blueprint specifies: **goal · sections · content directives · primary CTA · success metric.**

### 7.1 Homepage `/`

**Goal:** in 90 seconds, convince a senior decision-maker that MIBTY is credible, multidisciplinary, and worth a 30-minute call.

**Sections (in vertical order):**

1. **Hero** — `HeroImmersive`. R3F field. H1 `display-xl`. Sub-hero `body-l` (≤ 22 words). Dual CTA: `Book a consultation` + `See our work`. Trust microline below CTA: *"Trusted by 40+ research, healthcare, and enterprise teams."*
2. **Logo cloud** — 8–12 logos. Greyscale, 60% opacity. Anchored < 600px below fold edge.
3. **The four substrates** — `SubstrateGrid`. Eyebrow: `WHAT WE BUILD`. H2: *"Across four substrates of intelligent matter."* Four cards: Bits / Data / Cells / Atoms. Each card → `/services/...`.
4. **Featured work** — 3 case study cards in an editorial layout (1 large + 2 small). Hover reveals 2-second silent video loop.
5. **Metrics bar** — 4 stats: countries served, research papers, projects shipped, partner institutions.
6. **Process** — `ProcessTimeline` 4 steps: *Frame · Prototype · Validate · Scale*. Each step pinned + animated.
7. **Industries** — horizontal strip: Healthcare · Government · Universities · Enterprise · Startups · Biotech · Energy.
8. **Research highlight** — single editorial card pulling latest research entry. Serif H3 (Fraunces).
9. **Testimonial** — single, large, named, with portrait.
10. **CTA section** — full-bleed gradient veil. *"Have a frontier problem? We've probably modeled something like it."* Dual CTA.
11. **Footer.**

**Primary CTA:** Book a consultation (Cal.com modal).
**Success metric:** booking rate from `/`.

### 7.2 About `/about`

**Goal:** establish credibility and trajectory in 60 seconds for an investor or partner.

**Sections:**
1. Hero — *"We started with a question: what becomes possible when no discipline has to win?"*
2. **Trajectory bar** — founded year → milestones → today. Horizontal scrub.
3. Mission, Vision, Innovation Philosophy — 3-up editorial blocks. Serif H3s.
4. **Leadership** — portrait grid, click → bio sheet. Each bio includes credentials, prior affiliations, ORCID/Scholar where relevant.
5. **Research focus areas** — links to `/research`.
6. **Global footprint** — interactive but lightweight: a dot-map (Three.js sphere or static SVG with animated arcs), with HQ + collaboration nodes.
7. **Capability deck CTA** — gated download (email + role).
8. CTA + Footer.

**Primary CTA:** Download capability deck.

### 7.3 Services index `/services`

**Goal:** orient buyers to the 4 substrates and route them to depth.

**Sections:**
1. Hero — *"Engineering services across four substrates."*
2. **Substrate filter bar** — pills: All · Bits · Data · Cells · Atoms (substrate-coded).
3. **Service grid** — 9 service cards, substrate-coded, with one-line outcome statement (not feature list) on each.
4. **How we engage** — 3 engagement models: *Project · Embedded · Research partnership*.
5. **Cross-substrate case study** — single feature: a project that used multiple substrates (e.g., AI + biotech). This is the highest-leverage narrative the company has — never miss the opportunity to show it.
6. CTA + Footer.

### 7.4 Service detail `/services/[slug]`

**Template (same for every service):**

1. **Hero band** — service name (`display-l`), one-sentence outcome, substrate tag, sticky right-rail `[Book a call]` CTA.
2. **Problem** — 2 short paragraphs. What MIBTY is *for* in this discipline.
3. **Workflow** — `ProcessTimeline` specialized to this service.
4. **Technologies** — pill grid of stack/tools/methods. Hover → tooltip with one-line rationale.
5. **Benefits** — 3–4 outcome statements, each with a small substrate glyph and a single supporting metric.
6. **Industries served** — small chip set.
7. **Case study** — embedded card linking to `/work/[slug]`.
8. **FAQ** — 4–6 buyer-objection FAQs (timeline, IP, pricing model, security, data residency).
9. **Adjacent services** — 2 other services that pair with this one. Drives intra-site traversal.
10. **CTA section.**

### 7.5 Research & Innovation `/research`

**Goal:** signal scientific seriousness; create a recruiting and collaboration surface.

**Sections:**
1. Editorial hero — Fraunces serif H1, italic accent. *"The MIBTY Lab — work in progress, in public."*
2. **Filter bar** — tags by substrate + by output type (`Paper · Preprint · Project · Talk · Open dataset`).
3. **Research feed** — masonry. Mixed cards.
4. **Roadmap** — current → near-term → exploratory horizon, displayed as a 3-band timeline.
5. **Collaboration callout** — *"Working on something adjacent? Tell us."* → CollaborationForm.
6. Footer.

**Detail page `/research/[slug]`:**
- Article-style. Body sets in `container-prose` with Fraunces.
- Sidebar: authors, affiliations, DOI / arXiv link, citation block (BibTeX).
- Footnote-style references.
- "Cite this" button (clipboard).

### 7.6 Work `/work`

**Goal:** evidence.

1. Hero — *"What we've shipped."*
2. **Substrate + industry filter.**
3. **Case study grid** — image-led, substrate-coded.
4. CTA + Footer.

**Detail `/work/[slug]`:**
- Cinematic 1-up scroll: hero image → context → challenge → approach → outcome → metrics → testimonial → tech stack → next case study.
- Right-rail sticky meta panel (client, year, substrate, services).

### 7.7 Insights `/insights`

Long-form articles. Magazine-style index. Distinguishes "Field notes" (short) from "Essays" (long) with type ornament.

### 7.8 Contact `/contact`

**Sections:**
1. Hero — *"Let's talk."*
2. **Three intent cards** — each opens its own form: *Project inquiry · Research collaboration · Press / general*.
3. Office block — Lagos HQ, satellite locations, hours, map (static MapLibre, no Google).
4. Cal.com embed.
5. Footer.

### 7.9 Legal

Plain `container-prose`, Fraunces optional, last-updated date in footer of page, anchor TOC on the right.

### 7.10 404 / 500

Custom. *"This region of the field is uncharted."* Single subtle animated noise plane. Search box + 6 suggested destinations.

---

## 8. Content strategy

### 8.1 Voice rules

- Sentences begin with verbs or subjects, never with "We are excited to..."
- Numbers are specific (`43%`, not `nearly half`).
- Every claim has a referent (case study, paper, partner). If it doesn't, cut it.
- "Solutions" is banned as a noun. Use "systems," "platforms," "instruments," "tools."
- "Cutting-edge" is banned. Show, don't claim.

### 8.2 Naming conventions

- Cases studies titled as outcomes: *"Cutting diagnostic latency 43% across 12 hospitals"* — not *"Hospital Project."*
- Service names use plain English: *"AI systems"* — not *"AI-Powered Solutions."*
- Research titled like papers: *"On low-data regimes for nanopore signal classification."*

### 8.3 Content matrix (what to write for launch)

| Surface | Min content for launch |
|---|---|
| Homepage | All sections fully written |
| About | Mission/vision/philosophy + 4 leader bios |
| Services × 9 | Full detail page each |
| Research | 6 entries (mix paper/project/talk) |
| Work | 4 case studies (≥1 cross-substrate) |
| Insights | 3 essays |
| Contact | All 3 intent forms wired |

---

## 9. Technical architecture

### 9.1 Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js 15 (App Router) + React 19 + TypeScript (strict)** | RSC for static perf, route-level streaming, native edge support, image/font optimization, View Transitions hooks. |
| Styling | **Tailwind CSS v4** + CSS variables for tokens | Tokens authored in CSS, consumed by Tailwind v4 native CSS-config. Theming via `data-theme="dark|light"`. |
| Component primitives | **Radix UI** + shadcn-style local components | Accessible primitives, locally owned source — no vendor lock-in. |
| Motion | **Framer Motion** (component-level) + **GSAP ScrollTrigger** (cinematic sections) | Framer for declarative state animation; GSAP only where pinning/scrub is required. |
| 3D | **React Three Fiber + drei + postprocessing** | Hero field, dot-map, occasional product 3D. Lazy-loaded; non-blocking. |
| CMS | **Sanity** (recommended) — alt: Contentlayer (MDX-only) | Sanity gives studio for non-eng content editors, structured content, GROQ. Use draft mode for previews. |
| Forms | **React Hook Form + Zod** validation; submission via Server Action → **Resend** for email + write to Sanity `inquiry` doc | Server-side validation, single source of truth. |
| Booking | **Cal.com** embed | Reliable, white-labelable, free tier. |
| Search | **Algolia DocSearch** (Phase 2) | Strong relevance for research index. |
| Auth (Phase 2 portal) | **Supabase Auth** | Cheap, OSS, Postgres. |
| Analytics | **Plausible** (privacy-first) + **Vercel Analytics** + **Vercel Speed Insights** | No cookie banner needed; real-user perf data. |
| Error tracking | **Sentry** | Source-maps + tracing. |
| Hosting | **Vercel** | Edge runtime, image optimization, ISR, preview branches. |
| DNS / CDN | Cloudflare in front (cache static, security) | Optional but recommended at scale. |
| Email | **Resend** + **React Email** | Transactional + design parity. |

### 9.2 Performance budget

| Metric | Budget |
|---|---|
| LCP (mobile, p75) | < 2.0s (target 1.2s) |
| INP (p75) | < 200ms |
| CLS | < 0.05 |
| JS first-load (homepage) | < 170 KB gz |
| Total transfer (homepage, mobile) | < 900 KB gz |
| Font payload | ≤ 2 families × 2 weights served via `next/font`, subset latin + latin-ext |
| Hero R3F payload | Lazy-loaded behind `IntersectionObserver`, < 80 KB gz code, deferred until idle |

Enforced via `lighthouse-ci` on every PR + `bundlesize` checks.

### 9.3 Accessibility

- WCAG 2.2 AA baseline; AAA for body text contrast where feasible.
- Focus visible always, plasma 2px ring with 2px offset.
- All interactive elements ≥ 44×44px tap target.
- Reduced motion respected globally.
- Semantic HTML; one `<h1>` per route; landmarks (`<main>`, `<nav>`, `<footer>`).
- Forms: visible labels (no placeholder-only), error text linked via `aria-describedby`, server-side errors echoed to screen reader via `aria-live="polite"`.
- 3D scenes have a static fallback image and never block content.
- All images carry meaningful `alt`; decorative renders use `alt=""` and `aria-hidden`.

### 9.4 SEO strategy

- Per-route `generateMetadata` with title, description, OG image (auto-generated via `@vercel/og`).
- `robots.txt` + `sitemap.xml` generated at build (sitemap source = Sanity).
- Structured data (`schema.org`): `Organization`, `WebSite`, `BreadcrumbList`, `Article` (insights), `ScholarlyArticle` (research), `Service` (service pages), `FAQPage` (service FAQs).
- Canonical URLs, hreflang readiness for Phase-2 i18n.
- OG images: dynamic, substrate-tinted, with title rendered in Geist 600.
- Internal linking: every service detail links to ≥ 2 case studies and ≥ 1 research entry.
- Editorial content lives at `/insights`, not `/blog`, to telegraph seriousness.

### 9.5 Security & compliance

- HTTPS only, HSTS, strict CSP (`script-src` self + Plausible + Vercel + Cal.com), `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`.
- Form rate-limiting at the edge (Vercel KV / Upstash Redis token bucket).
- Honeypot + invisible Turnstile (Cloudflare) on every form — no Google reCAPTCHA.
- PII handling documented in `/legal/privacy`. GDPR-ready (DSAR contact, retention policy).
- Sanity: role-scoped editors, 2FA enforced.
- Secrets in Vercel env, not in repo.

### 9.6 Repository layout

```
app/
  (marketing)/
    page.tsx                    # /
    about/page.tsx
    services/page.tsx
    services/[slug]/page.tsx
    research/page.tsx
    research/[slug]/page.tsx
    work/page.tsx
    work/[slug]/page.tsx
    insights/page.tsx
    insights/[slug]/page.tsx
    contact/page.tsx
  legal/[slug]/page.tsx
  api/
    inquiry/route.ts
    newsletter/route.ts
    revalidate/route.ts
components/
  ui/                            # primitives
  marketing/                     # organisms (Hero, SubstrateGrid, ...)
  three/                         # R3F scenes
lib/
  sanity/                        # client + queries
  motion/                        # variants, easings
  seo/
  validation/                    # zod schemas
  analytics/
content/                         # MDX fallback
public/
  fonts/
  og/
styles/
  tokens.css                     # CSS variables (the system)
  globals.css
sanity/
  schemas/
docs/
  MASTER-DESIGN.md               # this file
  design-tokens.json
  ...
```

---

## 10. Implementation roadmap

### Phase 0 — Foundations (Week 1)

- Init Next.js 15 + TS strict + Tailwind v4 + ESLint + Prettier + Husky.
- Wire `tokens.css` from `design-tokens.json` (build-time generation).
- Configure `next/font` for Geist Sans, Geist Mono, Fraunces.
- Set up Vercel project, preview branches, env scaffolding.
- Plausible + Sentry + Speed Insights.
- Build `Button`, `Tag`, form atoms, `Header`, `Footer`, theme toggle.

### Phase 1 — Marketing skeleton (Weeks 2–3)

- Homepage with placeholder copy + non-3D hero (static gradient field).
- Services index + 1 service detail (template).
- Contact page with all forms + Cal.com.
- Sanity studio + schemas: `service`, `caseStudy`, `research`, `insight`, `person`, `inquiry`.
- All routes scoring ≥ 95 Lighthouse on mobile.

### Phase 2 — Depth (Weeks 4–5)

- Remaining 8 service detail pages.
- Research + Work index + detail templates.
- Insights template.
- About page with leadership.
- Capability-deck gated download.
- Editorial copy passes (real, not Lorem).

### Phase 3 — Signature motion & 3D (Week 6)

- R3F hero field + reduced-motion fallback.
- GSAP ScrollTrigger process timeline.
- View-transition shared elements (services index → detail).
- Metrics counter + logo cloud polish.
- Dynamic OG image generator.

### Phase 4 — Hardening (Week 7)

- A11y audit (axe + manual keyboard pass on every route).
- SEO audit (structured data validation, canonical, sitemap).
- Performance audit against budgets, code-split tightening.
- Form abuse hardening (Turnstile, rate limit, honeypot).
- Sentry release tracking + source maps.

### Phase 5 — Launch (Week 8)

- Final content review with leadership.
- DNS cutover, HSTS preload submission.
- Press kit at `/press` (logos, headshots, boilerplate).
- Post-launch: weekly metrics review, conversion experiments backlog.

### Phase 6 — Post-launch (ongoing)

- Client portal under `/portal` (Supabase auth).
- i18n (FR / ES first).
- Algolia DocSearch on `/research`.
- Newsletter automation (Resend audiences).

---

## 11. Inspiration references (study, don't imitate)

| Reference | What to learn from |
|---|---|
| openai.com | Hero restraint; one idea per viewport |
| linear.app | Mesh gradients; eyebrow → headline → CTA cadence |
| vercel.com | Type-driven layouts; Geist as system font |
| stripe.com | Density of trust signals without clutter |
| anthropic.com | Editorial seriousness; serif accents |
| nvidia.com (developer pages) | Technical depth surfaced cleanly |
| deepmind.google | Research storytelling format |
| apple.com (product pages) | Cinematic scroll; payoff per section |
| spacex.com | Dark gravitas; restrained motion |
| ibm.com/research | Long-form research presentation |
| notion.so | Friendly editorial in a technical context |
| spline.design | Tasteful 3D in marketing |
| field.io | The "field" aesthetic done right |

---

## 12. Risks & decisions to confirm

These need a human decision before Phase 1 ends:

1. **Logo & identity:** does MIBTY have a logo we must preserve, or are we redesigning the wordmark? Recommendation: redesign per §4.7.
2. **CMS:** Sanity vs. Contentlayer (MDX-only). Recommendation: Sanity, because non-eng editors will own research/insights.
3. **Hero 3D vs. static:** 3D field is the signature, but adds ~80 KB and requires QA. Recommendation: ship with 3D + static fallback gated by reduced-motion and slow-network.
4. **Capability deck:** does the deck exist in PDF? If not, we'll need a 12–16 page document built in parallel.
5. **Photography:** do we have leadership portraits? If not, schedule a 1-day shoot before launch.
6. **Languages:** EN at launch. FR/ES as Phase 6. Confirm.
7. **Domain:** `mibty.com` vs. `mibty.ng` vs. both. Recommend `mibty.com` canonical, `mibty.ng` 301.
8. **Cookies / consent:** with Plausible (cookieless) + no third-party trackers, no banner is required in EU. Confirm we're not adding GA later.

---

## 13. Definition of done (launch gate)

- [ ] All pages in §2 sitemap exist with real (non-Lorem) copy.
- [ ] Lighthouse ≥ 95 perf / 100 a11y / 100 SEO / 100 best-practices on `/`, `/services`, `/services/ai`, `/research`, `/work`.
- [ ] All forms send to inbox + write to Sanity + return user-visible confirmation.
- [ ] Cal.com booking flow tested end-to-end.
- [ ] OG images render correctly for every route.
- [ ] `prefers-reduced-motion` disables all non-essential motion.
- [ ] Keyboard-only navigation completes the homepage → service → booking flow.
- [ ] Sentry receives test error.
- [ ] Plausible receives test event.
- [ ] DNS, HTTPS, HSTS, CSP verified.
- [ ] Sanity has ≥ 4 case studies, ≥ 6 research entries, ≥ 3 insights, all 9 services, 4 leader bios.
- [ ] Capability deck downloadable via gated form.

---

*This is a living document. When implementation diverges from spec, update this file in the same PR — the spec is the contract.*
