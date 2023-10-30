/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import UseHandleErrors from '../hooks/UseHandleErrors'
import { getAllState } from '../services/userState'

const getState = async (setState) => {
  try {
    const response = await getAllState()
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
