import { defineField, defineType } from "sanity";

export const research = defineType({
  name: "research",
  title: "Research entry",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "kind",
      type: "string",
      options: {
        list: [
          { title: "Paper", value: "paper" },
          { title: "Preprint", value: "preprint" },
          { title: "Project", value: "project" },
          { title: "Talk", value: "talk" },
          { title: "Open dataset", value: "dataset" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "substrate",
      type: "string",
      options: {
        list: [
          { title: "Bits", value: "bits" },
          { title: "Data", value: "data" },
          { title: "Cells", value: "cells" },
          { title: "Atoms", value: "atoms" },
        ],
      },
    }),
    defineField({ name: "date", type: "date" }),
    defineField({ name: "authors", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "affiliations", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "abstract", type: "text", rows: 5 }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "href", type: "url" },
          ],
        },
      ],
    }),
    defineField({ name: "citation", type: "text", rows: 3, description: "BibTeX" }),
  ],
});
