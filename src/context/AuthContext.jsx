/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
// eslint-disable-next-line camelcase
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isLoggin, setIsLoggin] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState('')
  const saveUserLocalStorage = (user) => {
    sessionStorage.setItem('user', user)
    setIsLoggin(true)
  }
  const logout = () => {
    localStorage.removeItem('token')
    setIsLoggin(false)
  }

  useEffect(() => {
    const user = sessionStorage.getItem('user')
    setUserLoggedIn(user)
  }, [isLoggin])

  return (
    <AuthContext.Provider value={{ saveUserLocalStorage, logout, isLoggin, userLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
