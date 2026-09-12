import { defineField, defineType } from "sanity";
import { Newspaper } from "lucide-react";

export const actualite = defineType({
  name: "actualite",
  title: "Actualité",
  type: "document",
  icon: Newspaper,
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eventDate",
      title: "Date",
      description:
        "Écrivez la date telle qu'elle doit apparaître sur le site, par exemple « Samedi 29 août 2026 ».",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Lieu",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "photoCaption",
      title: "Légende de la photo",
      type: "string",
      hidden: ({ document }) => !document?.image,
    }),
    defineField({
      name: "body",
      title: "Texte",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "eventDate",
      media: "image",
    },
  },
});
