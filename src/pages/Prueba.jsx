import React from 'react'
import AddService from '../components/tickets/services/AddService'
import ServiceManager from '../components/tickets/services/ServiceManager'
import { TicketProvider } from '../context/TicketContext'

const Prueba = () => {
  return (

    <TicketProvider>
      <AddService />
      <ServiceManager />
    </TicketProvider>

  )
}

export default Prueba
