import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { newCategory } from '../../../services/category'
import UseHandleErrors from '../../../hooks/UseHandleErrors'
import { UseTicketContext } from '../../../hooks/UseTicketContext'

const AddCategory = () => {
  const { getCategories } = UseTicketContext()
  const [nameCategory, setNameCategory] = useState('')
  const add = async () => {
    if (nameCategory) {
      try {
        const response = await newCategory(nameCategory)
        if (response.status === 201) {
          toast.success(response.data.message)
          setNameCategory('')
          getCategories()
        }
      } catch (error) {
        UseHandleErrors(error)
      }
    } else {
      toast.error('Debe ingresar el nombre de la categoria')
    }
  }
  return (

    <article className='container-new-category'>
      <label htmlFor=''>Ingrese el nombre dela nueva categoria</label>
      <div className='d-flex gap-3 p-3'>
        <input type='text' className='form-control' name='nameCategory' value={nameCategory} onChange={(e) => { setNameCategory(e.target.value) }} />
        <button type='button' className='btn btn-dark' onClick={() => { add() }}>Agregar</button>
      </div>

    </article>

  )
}

export default AddCategory
