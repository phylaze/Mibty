// GROQ queries for the Sanity content model. Imported by future page loaders
// when Sanity is provisioned. Kept colocated with the schemas so the contract
// between read and write is obvious.

export const allServicesQuery = /* groq */ `
  *[_type == "service"] | order(label asc) {
    "slug": slug.current,
    label, substrate, oneLiner, outcome
  }
`;

export const serviceBySlugQuery = /* groq */ `
  *[_type == "service" && slug.current == $slug][0]{
    label, "slug": slug.current, substrate, oneLiner, outcome,
    problem, workflow, technologies, benefits, industries, faq, adjacent,
    caseStudy->{ "slug": slug.current, title, excerpt }
  }
`;

export const allCaseStudiesQuery = /* groq */ `
  *[_type == "caseStudy"] | order(year desc) {
    "slug": slug.current, title, client, industry, year,
    substrates, services, excerpt
  }
`;

export const caseStudyBySlugQuery = /* groq */ `
  *[_type == "caseStudy" && slug.current == $slug][0]
`;

export const allResearchQuery = /* groq */ `
  *[_type == "research"] | order(date desc) {
    "slug": slug.current, title, kind, substrate, date, authors, affiliations, abstract
  }
`;

export const researchBySlugQuery = /* groq */ `
  *[_type == "research" && slug.current == $slug][0]
`;

export const allInsightsQuery = /* groq */ `
  *[_type == "insight"] | order(date desc) {
    "slug": slug.current, title, kind, date, author, readingTime, excerpt
  }
`;

export const insightBySlugQuery = /* groq */ `
  *[_type == "insight" && slug.current == $slug][0]
`;

export const allPeopleQuery = /* groq */ `
  *[_type == "person"] | order(name asc)
`;
