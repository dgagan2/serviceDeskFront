/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import UseHandleErrors from '../hooks/UseHandleErrors'
import { getAllUserDeparment } from '../services/userDepartment'

// eslint-disable-next-line camelcase
const DepartmentContext = createContext()

const DepartmentProvider = ({ children }) => {
  const [department, setDepartment] = useState([])

  async function getDepartment () {
    try {
      const response = await getAllUserDeparment()
      if (response.status === 200) {
        setDepartment(response.data)
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }

  useEffect(() => {
    getDepartment()
  }, [])

  return (
    <DepartmentContext.Provider value={{ getDepartment, department, setDepartment }}>
      {children}
    </DepartmentContext.Provider>
  )
}

export { DepartmentContext, DepartmentProvider }
