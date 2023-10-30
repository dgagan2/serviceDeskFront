import axios from 'axios'

const URL = 'http://127.0.0.1:3000'

const getCategoryById = async (id) => {
  const response = await axios.get(`${URL}/category/${id}`)
  return response
}

const getAllCategories = async () => {
  const response = await axios.get(`${URL}/category/`)
  return response
}

const getCategoryByName = async (nameCategory) => {
  const response = await axios.get(`${URL}/ticket/service/name?nameCategory =${nameCategory}`)
  return response
}
const newService = async (nameCategory) => {
  const response = await axios.post(`${URL}/ticket/service/`, { nameCategory })
  return response
}

const deleteService = async (idCategory) => {
  const response = await axios.delete(`${URL}/ticket/service/${idCategory}`)
  return response
}

export { getAllService, getServiceById, getServiceByName, deleteService, newService }
