import { Query } from "./strapi";
const { STRAPI_HOST } = process.env

export async function getHomeInfo() {
    return Query('home?populate=Cover')
        .then(res => {
            const { Titulo, Descripcion, Cover } = res.data
            const image = `${STRAPI_HOST}${Cover.url}`

            return { Titulo, Descripcion, image }
        })
}