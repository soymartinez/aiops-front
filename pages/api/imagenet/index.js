import imagenet from '../../../imagenet_class_index.json'

export default function handler(_, res) {
    return res.status(200).json(imagenet)
}