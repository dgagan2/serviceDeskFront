import axios from 'axios'

const URL = 'http://127.0.0.1:3000'

const checkRole = async (id) => {
  const response = await axios.get(`${URL}/user/role/${id}`)
  return response
}

export { checkRole }
