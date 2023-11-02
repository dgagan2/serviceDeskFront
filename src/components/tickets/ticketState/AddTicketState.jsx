import React, { useState } from 'react'
import { toast } from 'react-toastify'
import UseHandleErrors from '../../../hooks/UseHandleErrors'
import { UseTicketContext } from '../../../hooks/UseTicketContext'
import { newTicketState } from '../../../services/ticketState'

const AddTicketState = () => {
  const { getTicketState } = UseTicketContext()
  const [state, setState] = useState('')
  const add = async () => {
    if (state) {
      try {
        const response = await newTicketState(state)
        if (response.status === 201) {
          toast.success(response.data.message)
          setState('')
          getTicketState()
        }
      } catch (error) {
        UseHandleErrors(error)
      }
    } else {
      toast.error('Debe ingresar el nombre del estado')
    }
  }
  return (

    <article className='container-new-ticket-state'>
      <label htmlFor=''>Ingrese el nombre del nuevo Estado</label>
      <div className='d-flex gap-3 p-3'>
        <input type='text' className='form-control' value={state} onChange={(e) => { setState(e.target.value) }} />
        <button type='button' className='btn btn-dark' onClick={() => { add() }}>Agregar</button>
      </div>

    </article>

  )
}

export default AddTicketState
