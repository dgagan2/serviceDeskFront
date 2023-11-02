import React from 'react'
import { TicketProvider } from '../context/TicketContext'
import CategoryList from '../components/tickets/CategoryList'
import ServicesList from '../components/tickets/ServicesList'

const Prueba = () => {
  return (

    <TicketProvider>
      <CategoryList />
      <ServicesList />
    </TicketProvider>

  )
}

export default Prueba
