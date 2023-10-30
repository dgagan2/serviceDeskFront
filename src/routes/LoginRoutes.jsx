import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import NotFound from '../pages/notFound/NotFound'
import Prueba from '../pages/Prueba'
import User from '../pages/home/User'

import State from '../pages/home/State'
import Role from '../pages/home/Role'
import Department from '../pages/home/Department'
import { TicketProvider } from '../context/TicketContext'

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/user/manager' element={<User />} />
      <Route path='/user/manager/state' element={<State />} />
      <Route path='/user/manager/role' element={<Role />} />
      <Route path='/user/manager/department' element={<Department />} />
      <TicketProvider>
        <Route path='/ticket/manager/state' element={<Department />} />
      </TicketProvider>
      <Route path='/home/prueba' element={<Prueba />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>

  )
}

export default LoginRoutes
