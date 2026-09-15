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

/**
 * Sanity encodes the uploaded asset's native pixel size in its _ref
 * (e.g. "image-<hash>-590x393-jpg"). Some team uploads are much smaller
 * than the cover slots we display them in; requesting a larger size than
 * the source has forces the CDN to upscale, which is what produces
 * visibly blurry covers. This caps the requested size to the asset's
 * native resolution so we only ever downscale, never upscale.
 */
function nativeImageSize(source: Image): { width: number; height: number } | null {
  const ref = (source.asset as { _ref?: string } | undefined)?._ref;
  const match = ref?.match(/-(\d+)x(\d+)-/);
  if (!match) return null;
  return { width: Number(match[1]), height: Number(match[2]) };
}

export function coverImageUrl(source: Image, targetWidth: number, targetHeight: number) {
  const native = nativeImageSize(source);
  const scale = native
    ? Math.min(1, native.width / targetWidth, native.height / targetHeight)
    : 1;
  return builder
    .image(source)
    .width(Math.round(targetWidth * scale))
    .height(Math.round(targetHeight * scale))
    .fit("crop")
    .url();
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
