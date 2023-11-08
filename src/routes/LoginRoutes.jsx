import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import NotFound from '../pages/notFound/NotFound'
import Prueba from '../pages/Prueba'
import User from '../pages/home/User'

import State from '../pages/home/State'
import Role from '../pages/home/Role'
import Department from '../pages/home/Department'
import Category from '../pages/tickets/Category'
import Servicios from '../pages/tickets/Servicios'
import TicketState from '../pages/tickets/TicketState'
import ServiceCatalog from '../pages/tickets/ServiceCatalog'
import NewTicket from '../pages/tickets/NewTicket'

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/home/catalog' element={<ServiceCatalog />} />
      <Route path='/ticket' element={<NewTicket />} />
      <Route path='/ticket/:id' element={<Prueba />} />
      <Route path='/user/manager' element={<User />} />
      <Route path='/user/manager/state' element={<State />} />
      <Route path='/user/manager/role' element={<Role />} />
      <Route path='/user/manager/department' element={<Department />} />

      <Route path='/ticket/manager/category' element={<Category />} />
      <Route path='/ticket/manager/item-service' element={<Servicios />} />
      <Route path='/ticket/manager/state' element={<TicketState />} />

      <Route path='/home/prueba' element={<Prueba />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>

  )
}

export default LoginRoutes
