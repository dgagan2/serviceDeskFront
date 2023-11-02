import React from 'react'
import Header from '../../components/header/Header'
import { TicketProvider } from '../../context/TicketContext'

import ServiceManager from '../../components/tickets/services/ServiceManager'
import AddService from '../../components/tickets/services/AddService'

const Servicios = () => {
  return (
    <>
      <Header />
      <TicketProvider>
        <section className='container-manager-service m-4'>

          <AddService />
          <ServiceManager />
        </section>

      </TicketProvider>

    </>
  )
}

export default Servicios
