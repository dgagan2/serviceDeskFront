/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import { validateToken } from '../services/login'
// eslint-disable-next-line camelcase
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isLoggin, setIsLoggin] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState('')
  const saveUserLocalStorage = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user))
    setUserLoggedIn(user)
    setIsLoggin(true)
  }
  const logout = () => {
    sessionStorage.removeItem('user')
    setIsLoggin(false)
  }
  const tokenIsValid = async (token, user) => {
    const response = await validateToken(token)
    if (response.status === 200) {
      setUserLoggedIn(user)
      setIsLoggin(true)
    }
  }

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    if (user) {
      const { token } = user
      tokenIsValid(token, user)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ saveUserLocalStorage, logout, isLoggin, userLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
