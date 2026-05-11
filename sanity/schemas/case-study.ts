import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "client", type: "string" }),
    defineField({ name: "industry", type: "string" }),
    defineField({ name: "year", type: "number" }),
    defineField({
      name: "substrates",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Bits", value: "bits" },
          { title: "Data", value: "data" },
          { title: "Cells", value: "cells" },
          { title: "Atoms", value: "atoms" },
        ],
      },
    }),
    defineField({ name: "services", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({ name: "challenge", type: "text", rows: 5 }),
    defineField({ name: "approach", type: "array", of: [{ type: "text", rows: 3 }] }),
    defineField({ name: "outcome", type: "text", rows: 5 }),
    defineField({
      name: "metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "value", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "testimonial",
      type: "object",
      fields: [
        { name: "quote", type: "text", rows: 4 },
        { name: "name", type: "string" },
        { name: "role", type: "string" },
      ],
    }),
    defineField({ name: "techStack", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
  ],
});
