import axios from 'axios'

const URL = 'http://127.0.0.1:3000'

const checkRole = async (id) => {
  const response = await axios.get(`${URL}/user/role/${id}`)
  return response
}

const getAllRole = async () => {
  const response = await axios.get(`${URL}/user/role/`)
  return response
}

const getRoleByName = async (nameRole) => {
  const response = await axios.get(`${URL}/user/role/name?nameRole=${nameRole}`)
  return response
}
const newRole = async (nameRole) => {
  const response = await axios.post(`${URL}/user/role/`, { nameRole })
  return response
}

const deleteRole = async (id) => {
  const response = await axios.delete(`${URL}/user/role/${id}`)
  return response
}
export { checkRole, getAllRole, getRoleByName, newRole, deleteRole }
