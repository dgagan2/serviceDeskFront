import axios from 'axios'

const URL = 'http://127.0.0.1:3000'

const getServiceById = async (id) => {
  const response = await axios.get(`${URL}/ticket/service/${id}`)
  return response
}

const getAllService = async () => {
  const response = await axios.get(`${URL}/ticket/service/`)
  return response
}

const getServiceByName = async (nameItem) => {
  const response = await axios.get(`${URL}/ticket/service/name?nameItem=${nameItem}`)
  return response
}
const newService = async (data) => {
  const response = await axios.post(`${URL}/ticket/service/`, data)
  return response
}

const deleteService = async (idCategory) => {
  const response = await axios.delete(`${URL}/ticket/service/${idCategory}`)
  return response
}

export { getAllService, getServiceById, getServiceByName, deleteService, newService }
