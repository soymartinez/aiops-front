export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Method not allowed' })
    return
  }
  const data = await fetch(process.env.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "instances": [
        [req.body]
      ]
    }),
  })

  if (data.status !== 200) {
    res.status(500).send({ message: 'Something went wrong' })
    return
  }

  res.status(200).send(await data.json())
}