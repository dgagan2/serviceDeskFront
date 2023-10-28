import axios from 'axios'

const URL = 'http://127.0.0.1:3000'

const getAllUserDeparment = async () => {
  const response = await axios.get(`${URL}/department/`)
  return response
}
const getUserDepartmentByName = async (name) => {
  const response = await axios.get(`${URL}/department/name?nameDepartment=${name}`)
  return response
}
const getUserDepartmentById = async (id) => {
  const response = await axios.get(`${URL}/user/role/${id}`)
  return response
}

export { getAllUserDeparment, getUserDepartmentByName, getUserDepartmentById }
