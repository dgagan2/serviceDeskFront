import React, { useState } from 'react'
import { toast } from 'react-toastify'
import UseHandleErrors from '../../hooks/UseHandleErrors'
import { UseStateContext } from '../../hooks/UseStateContext'
import { newState } from '../../services/userState'

const AddState = () => {
  const { getState } = UseStateContext()
  const [nameState, setNameState] = useState('')
  const add = async () => {
    if (nameState) {
      try {
        const response = await newState(nameState)
        if (response.status === 201) {
          toast.success(response.data.message)
          setNameState('')
          getState()
        }
      } catch (error) {
        UseHandleErrors(error)
      }
    } else {
      toast.error('Debe ingresar el nombre del estado')
    }
  }
  return (

    <article className='container-new-state'>
      <label htmlFor=''>Ingrese el nombre del nuevo estado</label>
      <div className='d-flex gap-3 p-3'>
        <input type='text' className='form-control' name='nameState' value={nameState} onChange={(e) => { setNameState(e.target.value) }} />
        <button type='button' className='btn btn-dark' onClick={() => { add() }}>Agregar</button>
      </div>

    </article>

  )
}

export default AddState
