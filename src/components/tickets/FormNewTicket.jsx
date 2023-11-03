/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getTicketStateByName } from '../../services/ticketState'
import UseHandleErrors from '../../hooks/UseHandleErrors'

const getStateTicket = async (setIdStateTicket) => {
  try {
    const response = await getTicketStateByName('abierto')
    if (response.status === 200) {
      setIdStateTicket(response.data)
    }
  } catch (error) {
    UseHandleErrors(error)
  }
}
const FormNewTicket = () => {
  const location = useLocation()
  const { id, categoryService, nameItem, itemImage } = location.state.service
  const [description, setDescription] = useState('')
  const [idStateTicket, setIdStateTicket] = useState('')
  useEffect(() => {
    getStateTicket(setIdStateTicket)
  }, [])
  console.log(location.state)
  const createTicket = (e) => {
    e.preventDefault()
    const data = {
      description,
      idDepartment: categoryService.idCategory,
      idItem: id,
      idStateTicket
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
