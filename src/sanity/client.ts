import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { Image } from "sanity";
import type { PortableTextBlock } from "@portabletext/react";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlForImage(source: Image) {
  return builder.image(source);
}

export type Actualite = {
  _id: string;
  title: string;
  eventDate: string;
  location?: string;
  photoCaption?: string;
  image?: Image;
  body: PortableTextBlock[];
};

const ACTUALITES_QUERY = `*[_type == "actualite"] | order(_createdAt desc){
  _id, title, eventDate, location, photoCaption, image, body
}`;

export async function getActualites(): Promise<Actualite[]> {
  return client.fetch(ACTUALITES_QUERY);
}
