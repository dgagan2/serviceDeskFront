/* eslint-disable react/prop-types */
import React from 'react'
import { UseTicketContext } from '../../hooks/UseTicketContext'

const FormNewTicket = () => {
  const { dataTicket } = UseTicketContext()
  console.log('serviceForm', dataTicket)
  return (
    <form action=''>
      <h3>{dataTicket?.nameItem}</h3>
      <img src={dataTicket?.itemImage} alt='' />
      <label htmlFor='' />
      <textarea name='' id='' cols='30' rows='10' />
    </form>
  )
}

export default FormNewTicket
