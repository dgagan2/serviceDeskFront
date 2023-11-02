import axios from 'axios'

const URL = 'http://127.0.0.1:3000'

const getTicketStateById = async (id) => {
  const response = await axios.get(`${URL}/ticket/state/${id}`)
  return response
}

const getAllTicketState = async () => {
  const response = await axios.get(`${URL}/ticket/state/`)
  return response
}

const getTicketStateByName = async (nameState) => {
  const response = await axios.get(`${URL}/ticket/state/name?nameState=${nameState}`)
  return response
}
const newTicketState = async (nameState) => {
  const response = await axios.post(`${URL}/ticket/state/`, { nameState })
  return response
}

const deleteTicketState = async (id) => {
  const response = await axios.delete(`${URL}/ticket/state/${id}`)
  return response
}
export { getAllTicketState, getTicketStateByName, getTicketStateById, newTicketState, deleteTicketState }
