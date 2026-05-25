import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Configuration
export const sanityClient = createClient({
  projectId: 'ppvozpw5',
  dataset: 'production',
  useCdn: true, // Use CDN for fast response (stale-while-revalidate)
  apiVersion: '2024-05-25', // Use current date for latest API version
});

// Image Builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
