import axios from 'axios'

const URL = 'http://127.0.0.1:3000'

const ValidateConnection = async () => {
  const response = await axios.get(`${URL}/`)
  return response
}

const Validatelogin = async (data) => {
  const response = await axios.post(`${URL}/account/login`, data)
  return response
}
const registerNewUser = async (data) => {
  const response = await axios.post(`${URL}/account/register`, data)
  return response
}
const validateToken = async (token) => {
  const response = await axios.post(`${URL}/validateToken`, { token })
  return response
}
export { Validatelogin, registerNewUser, validateToken, ValidateConnection }
