/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import UseHandleErrors from '../../hooks/UseHandleErrors'
import { newTicket } from '../../services/ticket'
import { toast } from 'react-toastify'

const FormNewTicket = () => {
  const location = useLocation()
  const { id, categoryService, nameItem, itemImage, itemDescription } = location.state.service
  const [description, setDescription] = useState('')
  const navigate = useNavigate()
  const createTicket = async (e) => {
    e.preventDefault()
    const data = {
      description,
      idDepartment: categoryService.idCategory,
      idItem: id,
      itemDescription
    }

    try {
      const response = await newTicket(data)
      if (response.status === 201) {
        toast.success(response.data.message)
        navigate('/home')
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }
  return (
    <>
      <article className='d-flex'>
        <div><img id='image-service' src={itemImage} alt={`Imagen servicio ${nameItem}`} /></div>
        <form onSubmit={(e) => createTicket(e)}>
          <h3>{nameItem}</h3>
          <div className='d-flex flex-column gap-4'>
            <label htmlFor=''>Descripción Solicitud</label>
            <textarea name='' id='' cols='40' rows='5' onChange={(e) => { setDescription(e.target.value) }} />
            <button>Colocar Solicitud</button>

          </div>

        </form>
      </article>

    </>

  )
}

export default FormNewTicket
