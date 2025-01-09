import { Query } from "./strapi";

const { STRAPI_HOST } = process.env

export function getCategories() {
    return Query('product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url')
        .then(res => {
            return res.data.map((category: { name: string; slug: string; description: string; image: { url: string } }) => {
                const { name, slug, description, image: rawImage } = category
                const image = `${STRAPI_HOST}${rawImage.url}`

                return { name, slug, description, image }
            })
        })
        .catch(err => {
            console.log('Error: ', err)
            return []
        })
}