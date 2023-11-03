import React from 'react'
import Header from '../../components/header/Header'
import { TicketProvider } from '../../context/TicketContext'
import FormNewTicket from '../../components/tickets/FormNewTicket'

const NewTicket = () => {
  return (
    <>
      <Header />
      <TicketProvider>
        <FormNewTicket />
      </TicketProvider>

    </>
  )
}

export default NewTicket
