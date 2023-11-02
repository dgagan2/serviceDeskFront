import React from 'react'
import './ticket.css'
import { TicketProvider } from '../../context/TicketContext'
import CategoryList from '../../components/tickets/CategoryList'
import ServicesList from '../../components/tickets/ServicesList'
import Header from '../../components/header/Header'
const ServiceCatalog = () => {
  return (
    <>
      <Header />
      <TicketProvider>
        <section className='container-service-catalog d-flex m-3'>
          <CategoryList />
          <ServicesList />
        </section>

      </TicketProvider>
    </>

  )
}

export default ServiceCatalog
