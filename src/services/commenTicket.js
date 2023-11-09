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

const newComment = async (data) => {
  const response = await axios.post(`${URL}/ticket/comment`, data, getToken())
  return response
}

export { newComment }
