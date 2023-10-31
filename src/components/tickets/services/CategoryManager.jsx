import React, { useEffect, useState } from 'react'
import StateTable from './CategoryTable'
import { toast } from 'react-toastify'
import { UseTicketContext } from '../../../hooks/UseTicketContext'
import { deleteCategory, getCategoryByName } from '../../../services/category'
import SearchComponent from '../../SearchComponent'
import UseHandleErrors from '../../../hooks/UseHandleErrors'

const CategoryManager = () => {
  const { getCategories, categories, setCategories } = UseTicketContext()
  const [input, setInput] = useState('')
  useEffect(() => {
    getCategories()
  }, [])
  const searchFunction = async () => {
    if (!input) {
      toast.error('No hay valores de busqueda')
    } else {
      const response = await getCategoryByName(input)
      if (response.status === 200) {
        setCategories(response.data)
      }
    }
  }

  const cleanFields = () => {
    setInput('')
    getCategories()
  }
  const Delete = async (id) => {
    try {
      const response = await deleteCategory(id)
      if (response.status === 200) {
        toast.success(response.data.message)
        getCategories()
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }

  return (
    <>
      <article className='container-search-role'>
        <label>Ingrese el nombre de la categoria a buscar</label>
        <div className='d-flex gap-3 p-3'>
          <input type='text' className='form-control' name='nameCategory' value={input} onChange={(e) => { setInput(e.target.value) }} />
          <SearchComponent searchFunction={searchFunction} cleanFields={cleanFields} />
        </div>

      </article>
      <article>
        <StateTable data={categories} Delete={Delete} />
      </article>
    </>
  )
}

export default CategoryManager
