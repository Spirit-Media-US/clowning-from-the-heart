import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'zvhqn0sn',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2026-03-11',
})

const builder = imageUrlBuilder(sanityClient)
export function urlFor(source: any) {
  return builder.image(source)
}
