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

const getTicketFeedback = async (numberTicket) => {
  const response = await axios.get(`${URL}/comment/${numberTicket}`, getToken())
  return response
}
const newComment = async (data) => {
  const response = await axios.post(`${URL}/comment`, data, getToken())
  return response
}

export { newComment, getTicketFeedback }
