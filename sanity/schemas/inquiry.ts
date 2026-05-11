import { defineField, defineType } from "sanity";

export const inquiry = defineType({
  name: "inquiry",
  title: "Inquiry",
  type: "document",
  fields: [
    defineField({
      name: "intent",
      type: "string",
      options: {
        list: [
          { title: "Project", value: "project" },
          { title: "Research collaboration", value: "research" },
          { title: "Press / general", value: "press" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "email", type: "string", validation: (r) => r.required().email() }),
    defineField({ name: "organization", type: "string" }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "message", type: "text", rows: 5 }),
    defineField({ name: "scope", type: "string" }),
    defineField({ name: "timeline", type: "string" }),
    defineField({ name: "createdAt", type: "datetime", initialValue: () => new Date().toISOString() }),
  ],
});
