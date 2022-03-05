import Cors from 'cors'

function initMiddleware(middleware) {
    return (req, res) =>
        new Promise((resolve, reject) => {
            middleware(req, res, (result) => {
                if (result instanceof Error) {
                    return reject(result)
                }
                return resolve(result)
            })
        })
}


// Initialize the cors middleware
const cors = initMiddleware(
    Cors({
        methods: ['POST', 'OPTIONS'],
        origin: ['http:localhost:3000', 'https://patchwork-kingdoms.com', 'https://pathwork-kingdom-git-feature-whitelist-craft-clarity.vercel.app'],

    })
)


export default async function getGallery(req, res) {

    await cors(req, res)

    let ret = [{key: "123", image: "/a1.jpg"}, {key: "321", image: "/a2.jpg"}, {key: "456", image: "/a3.jpg"}]
    return res.status(200).json({ data: ret, code: 200 })


}