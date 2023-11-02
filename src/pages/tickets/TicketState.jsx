import React from 'react'
import { TicketProvider } from '../../context/TicketContext'
import AddTicketState from '../../components/tickets/ticketState/AddTicketState'
import TicketStateManager from '../../components/tickets/ticketState/TicketStateManager'
import Header from '../../components/header/Header'

const TicketState = () => {
  return (
    <>
      <Header />
      <TicketProvider>
        <AddTicketState />
        <TicketStateManager />
      </TicketProvider>
    </>

  )
}

export default TicketState
