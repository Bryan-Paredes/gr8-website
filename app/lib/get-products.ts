import { Query } from "./strapi";

const { STRAPI_HOST } = process.env

export function getProducts() {
    return Query(`products?fields[0]=name&fields[1]=slug&fields[2]=description&fields[3]=price&fields[4]=color&fields[5]=id&populate[images][fields][0]=url`)
        .then(res => {
            const { data, meta } = res

            const products = data.map(product => {
                const { id, name, slug, description, images: rawImages, price } = product
                const images = `${STRAPI_HOST}${rawImages[0].url}`

                return { id, name, slug, description, images, price }
            })

            return { products, pagination: meta.pagination }
        })
}