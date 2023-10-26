import React from 'react'
import Header from '../../components/Header'
import { useUserContext } from '../../hooks/UseUserContext'

const Home = () => {
  const { userLoggedIn } = useUserContext()
  console.log('userLoggedIn', userLoggedIn)
  return (
    <Header />
  )
}

export default Home
