/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { getAllUserDeparment } from '../services/userDepartment'
import UseHandleErrors from '../hooks/UseHandleErrors'

const getDepartment = async (setDepartment) => {
  try {
    const response = await getAllUserDeparment()
    if (response.status === 200) {
      setDepartment(response.data)
    }
  } catch (error) {
    UseHandleErrors(error)
  }
}
const UserDepartmentOptions = ({ input, handleInputChange }) => {
  const [department, setDepartment] = useState([])
  useEffect(() => {
    getDepartment(setDepartment)
  }, [])

  return (
    <select id='department-user' className='form-select' name='idDepartment' value={input?.idDepartment} onChange={handleInputChange}>
      <option>Seleccione...</option>
      {department && department.map((department) => (
        <option key={department.id} value={department.id}>{department.nameDepartment}</option>
      ))}
    </select>

  )
}

export default UserDepartmentOptions
