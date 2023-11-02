import React from 'react'
import Header from '../../components/header/Header'
import { UseTicketContext } from '../../hooks/UseTicketContext'
import { TicketProvider } from '../../context/TicketContext'

const NewTicket = () => {
  const { service } = UseTicketContext()
  return (
    <>
      <Header />
      <TicketProvider>
        <section>
          <h3>{service?.nameItem}</h3>
          <img src={service?.itemImage} alt='' />
          <textarea name='' id='' cols='30' rows='10' />
        </section>
      </TicketProvider>

    </>
  )
}

export default NewTicket
