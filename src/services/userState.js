import axios from 'axios'

const URL = 'http://127.0.0.1:3000'

const getStateById = async (id) => {
  const response = await axios.get(`${URL}/user/state/${id}`)
  return response
}

const getAllState = async () => {
  const response = await axios.get(`${URL}/user/state/`)
  return response
}

const getStateByName = async (nameState) => {
  const response = await axios.get(`${URL}/user/state/name?nameState=${nameState}`)
  return response
}
const newState = async (nameState) => {
  const response = await axios.post(`${URL}/user/state/`, { nameState })
  return response
}

const deleteState = async (id) => {
  const response = await axios.delete(`${URL}/user/state/${id}`)
  return response
}
export { getAllState, getStateById, getStateByName, deleteState, newState }
