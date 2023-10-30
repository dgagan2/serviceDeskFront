/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import FormUser from './FormUser'
import useForm from '../../hooks/useForms'
import { validateFormUser } from './validateFormUser'

const UpdateUser = ({ user }) => {
  const [errorInput, setErrorInput] = useState({})
  const sendData = () => {
    const newErros = validateFormUser(input)
    setErrorInput(newErros)
    if (Object.keys(newErros).length === 0) {
      console.log('input', input)
    }
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    id: user?.id || '',
    name: user?.name || '',
    email: user?.email || '',
    idDepartment: user?.idDepartment || '',
    idRole: user?.idRole || '',
    idState: user?.idState || ''
  })

  return (
    <section>
      <FormUser
        errorInput={errorInput}
        setErrorInput={setErrorInput}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </section>

  )
}

export default UpdateUser
