import { Query } from "./strapi";

const { STRAPI_HOST } = process.env

export function getProducts({ sort }: { sort: string | undefined }, { category }: { category: string | undefined }) {

    let url = `products?fields[0]=name&fields[1]=slug&fields[2]=description&fields[3]=price&fields[4]=color&fields[5]=id&populate[images][fields][0]=url&populate[product_category][fields][0]=slug`

    if (sort) url += `&sort=${sort}`
    if (category) url += `&filters[product_category][slug][$contains]=${category}`

    return Query(url)
        .then(res => {
            const { data, meta } = res

            const products = data.map((product: { id: number; name: string; slug: string; description: string; color: string; images: { url: string }[]; price: number; product_category: { slug: string } }) => {
                const { id, name, slug, description, images: rawImages, price, product_category: category, color } = product
                const images = `${STRAPI_HOST}${rawImages[0].url}`

                return { id, name, slug, description, images, price, category, color }
            })

            return { products, pagination: meta.pagination }
        })
}

export function getSingleProduct({ slug }: { slug: string }) {
    return Query(`products?filters[slug][$eq]=${slug}&populate[images][fields][0]=url&populate[product_category][fields][0]=slug`)
        .then(res => {
            const { data } = res

            const product = data.map((signgleProduct: { id: number; name: string; slug: string; description: string; images: { url: string }[]; price: number; product_category: { slug: string } }) => {
                const { id, name, slug, description, images: rawImages, price, product_category: category } = signgleProduct
                const images = `${STRAPI_HOST}${rawImages[0].url}`

                return { id, name, slug, description, images, price, category }
            })

            return { product }
        })
}