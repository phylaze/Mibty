import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "label", maxLength: 64 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "substrate",
      title: "Substrate",
      type: "string",
      options: {
        list: [
          { title: "Bits", value: "bits" },
          { title: "Data", value: "data" },
          { title: "Cells", value: "cells" },
          { title: "Atoms", value: "atoms" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "oneLiner", title: "One-liner", type: "string" }),
    defineField({ name: "outcome", title: "Outcome statement", type: "text", rows: 3 }),
    defineField({
      name: "problem",
      title: "Problem (paragraphs)",
      type: "array",
      of: [{ type: "text", rows: 3 }],
    }),
    defineField({
      name: "workflow",
      title: "Workflow",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "step", type: "string", title: "Step number (e.g. 01)" },
            { name: "title", type: "string" },
            { name: "body", type: "text", rows: 3 },
          ],
        },
      ],
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "body", type: "text", rows: 3 },
            { name: "metric", type: "string", title: "Optional supporting metric" },
          ],
        },
      ],
    }),
    defineField({
      name: "industries",
      title: "Industries served",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "q", type: "string", title: "Question" },
            { name: "a", type: "text", rows: 3, title: "Answer" },
          ],
        },
      ],
    }),
    defineField({
      name: "adjacent",
      title: "Adjacent service slugs",
      type: "array",
      of: [{ type: "string" }],
      description: "Slugs of related services to surface as cross-links.",
    }),
    defineField({
      name: "caseStudy",
      title: "Featured case study",
      type: "reference",
      to: [{ type: "caseStudy" }],
    }),
  ],
});
