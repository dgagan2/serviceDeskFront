import axios from 'axios'

const URL = 'http://127.0.0.1:3000'
const Validatelogin = async (data) => {
  const response = await axios.post(`${URL}/account/login`, data)
  return response
}
const registerNewUser = async (data) => {
  const response = await axios.post(`${URL}/account/register`, data)
  console.log('response', response)
  return response
}
export { Validatelogin, registerNewUser }
