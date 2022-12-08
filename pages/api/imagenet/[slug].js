import { baseUrl } from 'config/baseUrl'
export default async function (req, res) {
    const { slug } = req.query

    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const images = await fetch(`${baseUrl}/api/imagenet`)
    const data = await images.json()
    const result = data[slug]

    return res.status(200).json({result})
}