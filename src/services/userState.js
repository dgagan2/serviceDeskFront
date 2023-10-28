import axios from 'axios'

const URL = 'http://127.0.0.1:3000'

const getAllUserState = async () => {
  const response = await axios.get(`${URL}/user/state/`)
  return response
}
const getUserStateByName = async (name) => {
  const response = await axios.get(`${URL}/user/state/name?nameState=${name}`)
  return response
}
const getUserStateById = async (id) => {
  const response = await axios.get(`${URL}/user/state/${id}`)
  return response
}

export { getAllUserState, getUserStateById, getUserStateByName }
