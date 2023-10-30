import React, { useEffect, useState } from 'react'
import SearchComponent from '../SearchComponent'
import './state.css'
import StateTable from './StateTable'
import { toast } from 'react-toastify'
import UseHandleErrors from '../../hooks/UseHandleErrors'
import { UseStateContext } from '../../hooks/UseStateContext'
import { deleteState, getStateByName } from '../../services/userState'

const StateManager = () => {
  const { getState, state, setState } = UseStateContext()
  const [input, setInput] = useState('')
  useEffect(() => {
    getState()
  }, [])
  const searchFunction = async () => {
    if (!input) {
      toast.error('No hay valores de busqueda')
    } else {
      const response = await getStateByName(input)
      if (response.status === 200) {
        setState(response.data)
      }
    }
  }

  const cleanFields = () => {
    setInput('')
    getState()
  }
  const Delete = async (id) => {
    try {
      const response = await deleteState(id)
      if (response.status === 200) {
        toast.success(response.data.message)
        getState()
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }

  return (
    <>
      <article className='container-search-state'>
        <label>Ingrese el nombre del estado a buscar</label>
        <div className='d-flex gap-3 p-3'>
          <input type='text' className='form-control' name='nameState' value={input} onChange={(e) => { setInput(e.target.value) }} />
          <SearchComponent searchFunction={searchFunction} cleanFields={cleanFields} />
        </div>

      </article>
      <article>
        <StateTable data={state} Delete={Delete} />
      </article>
    </>
  )
}

export default StateManager
