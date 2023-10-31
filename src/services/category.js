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
  const response = await axios.get(`${URL}/category/name?nameCategory =${nameCategory}`)
  return response
}
const newCategory = async (nameCategory) => {
  const response = await axios.post(`${URL}/category/`, { nameCategory })
  return response
}

const deleteCategory = async (idCategory) => {
  const response = await axios.delete(`${URL}/category/${idCategory}`)
  return response
}

export { getAllCategories, getCategoryById, getCategoryByName, newCategory, deleteCategory }
