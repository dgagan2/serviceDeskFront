/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { getAllUserState } from '../services/userState'
import UseHandleErrors from '../hooks/UseHandleErrors'

const getState = async (setState) => {
  try {
    const response = await getAllUserState()
    if (response.status === 200) {
      setState(response.data)
    }
  } catch (error) {
    UseHandleErrors(error)
  }
}
const UserStateOptions = ({ input, handleInputChange }) => {
  const [state, setState] = useState([])

  useEffect(() => {
    getState(setState)
  }, [])

  return (
    <select id='state-user' className='form-select' name='idState' value={input?.idState} onChange={handleInputChange}>
      <option>Seleccione...</option>
      {state && state.map((state) => (
        <option key={state.idState} value={state.idState}>{state.nameState}</option>
      ))}
    </select>

  )
}

export default UserStateOptions
