import React, { useEffect, useState } from 'react'
import StateTable from './CategoryTable'
import { toast } from 'react-toastify'
import { UseTicketContext } from '../../../hooks/UseTicketContext'
import SearchComponent from '../../SearchComponent'
import UseHandleErrors from '../../../hooks/UseHandleErrors'
import { deleteTicketState, getTicketStateByName } from '../../../services/ticketState'

const TicketStateManager = () => {
  const { getTicketState, ticketState, setTicketState } = UseTicketContext()
  const [input, setInput] = useState('')
  useEffect(() => {
    getTicketState()
  }, [])
  const searchFunction = async () => {
    if (!input) {
      toast.error('No hay valores de busqueda')
    } else {
      const response = await getTicketStateByName(input)
      if (response.status === 200) {
        setTicketState(response.data)
      }
    }
  }

  const cleanFields = () => {
    setInput('')
    getTicketState()
  }
  const Delete = async (id) => {
    try {
      const response = await deleteTicketState(id)
      if (response.status === 200) {
        toast.success(response.data.message)
        getTicketState()
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }

  return (
    <>
      <article className='container-search-role'>
        <label>Ingrese el nombre del estado a buscar</label>
        <div className='d-flex gap-3 p-3'>
          <input type='text' className='form-control' value={input} onChange={(e) => { setInput(e.target.value) }} />
          <SearchComponent searchFunction={searchFunction} cleanFields={cleanFields} />
        </div>

      </article>
      <article>
        <StateTable data={ticketState} Delete={Delete} />
      </article>
    </>
  )
}

export default TicketStateManager
