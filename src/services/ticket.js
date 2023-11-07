import axios from 'axios'

const URL = 'http://127.0.0.1:3000'

const getToken = () => {
  const user = JSON.parse(sessionStorage.getItem('user'))

  const { token } = user
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return config
}

const newTicket = async (data) => {
  const response = await axios.post(`${URL}/ticket/`, data, getToken())
  return response
}

const getTicket = async () => {
  const response = await axios.get(`${URL}/ticket/`, getToken())
  return response
}

export { newTicket, getTicket }
