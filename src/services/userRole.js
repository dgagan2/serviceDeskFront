import axios from 'axios'

const URL = 'http://127.0.0.1:3000'

const getAllUserRole = async () => {
  const response = await axios.get(`${URL}/user/role/`)
  return response
}
const getUserRoleByName = async (name) => {
  const response = await axios.get(`${URL}/user/role/name?nameRole=${name}`)
  return response
}
const getUserRoleById = async (id) => {
  const response = await axios.get(`${URL}/user/role/${id}`)
  return response
}

export { getAllUserRole, getUserRoleByName, getUserRoleById }
