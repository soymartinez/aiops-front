import { baseUrl } from "config/baseUrl"

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Method not allowed' })
        return
    }
    const data = await fetch(process.env.API_URL_RESNET, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "instances": [
                {
                    "b64": req.body
                }
            ]
        }),
    })

    if (data.status !== 200) {
        res.status(500).send({ message: 'Something went wrong' })
        return
    }

    const result = await data.json().then((data) => data.predictions[0].classes)
    const slug = await fetch(`${baseUrl}/api/imagenet/${result}`)
    const slugData = await slug.json()

    res.status(200).send({ id: result, name: slugData.result[1]})
}