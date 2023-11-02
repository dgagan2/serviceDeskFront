import React from 'react'
import { TicketProvider } from '../context/TicketContext'
import CategoryList from '../components/tickets/CategoryList'

const Prueba = () => {
  return (

    <TicketProvider>
      <CategoryList />
    </TicketProvider>

  )
}

export default Prueba
