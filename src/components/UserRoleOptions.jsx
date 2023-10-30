/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { getAllUserRole } from '../services/userRole'
import UseHandleErrors from '../hooks/UseHandleErrors'

const getRole = async (setRole) => {
  try {
    const response = await getAllUserRole()
    if (response.status === 200) {
      setRole(response.data)
    }
  } catch (error) {
    UseHandleErrors(error)
  }
}
const UserRoleOptions = ({ input, handleInputChange }) => {
  const [role, setRole] = useState([])

  useEffect(() => {
    getRole(setRole)
  }, [])

  return (
    <select id='role-user' className='form-select' name='idRole' value={input?.idRole} onChange={handleInputChange}>
      <option>Seleccione...</option>
      {role && role.map((role) => (
        <option key={role.idRole} value={role.idRole}>{role.nameRole}</option>
      ))}
    </select>

  )
}

export default UserRoleOptions
