import { defineField, defineType } from "sanity";

export const person = defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name", maxLength: 64 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "bio", type: "text", rows: 4 }),
    defineField({ name: "credentials", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "portrait", type: "image", options: { hotspot: true } }),
    defineField({ name: "orcid", type: "url" }),
    defineField({ name: "scholar", type: "url" }),
  ],
});
