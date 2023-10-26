import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
    </Routes>

  )
}

export default LoginRoutes
