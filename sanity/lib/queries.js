import {defineQuery} from 'next-sanity'

export const Products_QUERY = defineQuery(`*[_type == "product" ][0...12]{
   title, slug, description, images, tags
}`)
