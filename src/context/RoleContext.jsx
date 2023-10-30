/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import UseHandleErrors from '../hooks/UseHandleErrors'
import { getAllRole } from '../services/rol'
// eslint-disable-next-line camelcase
const RoleContext = createContext()

const RoleProvider = ({ children }) => {
  const [role, setRole] = useState([])

  async function getRole () {
    try {
      const response = await getAllRole()
      if (response.status === 200) {
        setRole(response.data)
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }

  useEffect(() => {
    getRole()
  }, [])

  return (
    <RoleContext.Provider value={{ getRole, role, setRole }}>
      {children}
    </RoleContext.Provider>
  )
}

export { RoleContext, RoleProvider }
