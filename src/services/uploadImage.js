import axios from 'axios'
import UseHandleErrors from '../hooks/UseHandleErrors'

const URL = 'http://127.0.0.1:3000'

const uploadImage = async (image, nameFolder) => {
  try {
    const response = await newImage(image, nameFolder)
    return response
  } catch (error) {
    UseHandleErrors(error)
  }
}

const newImage = async (image, nameFolder) => {
  const response = await axios.post(`${URL}/uploadImage/`, { image, nameFolder }, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
  return response
}

export default uploadImage
