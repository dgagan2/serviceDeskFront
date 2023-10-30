import axios from 'axios'

const URL = 'http://127.0.0.1:3000'

const getAllUser = async () => {
  const response = await axios.get(`${URL}/user/`)
  return response
}

const getUserByName = async (name) => {
  const response = await axios.get(`${URL}/user/search?name=${name}`)
  return response
}

const getUserByEmail = async (email) => {
  const response = await axios.get(`${URL}/user/search?email=${email}`)
  return response
}

const getUserByRole = async (idRole) => {
  const response = await axios.get(`${URL}/user/search?idRole=${idRole}`)
  return response
}

const getUserByState = async (idState) => {
  const response = await axios.get(`${URL}/user/search?idState=${idState}`)
  return response
}

const getUserByDepartment = async (idDepartment) => {
  const response = await axios.get(`${URL}/user/search?idDepartment=${idDepartment}`)
  return response
}
const getUserById = async (id) => {
  const response = await axios.get(`${URL}/user/${id}`)
  return response
}

const deleteUserById = async (id) => {
  const response = await axios.delete(`${URL}/user/${id}`)
  return response
}
export {
  getAllUser,
  getUserByEmail,
  getUserByDepartment,
  getUserByName,
  getUserByRole,
  getUserByState,
  getUserById,
  deleteUserById
}
