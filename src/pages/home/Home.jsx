import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import { getTicket } from '../../services/ticket'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [ticket, setTicket] = useState([])
  const navigate = useNavigate()
  const getTicekts = async () => {
    const response = await getTicket()
    if (response.status === 200) {
      setTicket(response.data)
    }
  }
  useEffect(() => {
    getTicekts()
  }, [])
  const ticketUpdate = (data) => {
    navigate(`/support/ticket/${data.numberTicket}`, { state: { data } })
  }
  return (
    <>
      <Header />
      <section>
        <article className='d-flex justify-content-center'>
          <ul style={{ width: '70%' }}>
            {ticket && ticket.map((ticket) => (
              <li key={ticket?.numberTicket} style={{ padding: '10px' }}>
                <div className='d-flex justify-content-between'>
                  <button
                    style={{ backgroundColor: 'transparent', borderStyle: 'none' }}
                    onClick={() => ticketUpdate(ticket)}
                  >N Solicitud: {ticket?.numberTicket}
                  </button>
                  <b>{ticket.creationDate.slice(0, -14)}</b>
                </div>
                <div className='d-flex gap-3'>
                  <button
                    style={{ backgroundColor: 'transparent', borderStyle: 'none' }}
                    onClick={() => ticketUpdate(ticket)}
                  >Servicio Solicitado: {ticket?.itemService?.nameItem}
                  </button>
                  <p>Asignado a: {ticket?.person_ticket_idAgentToperson?.name}</p>
                  <p>Estado: {ticket?.stateTicket?.nameState}</p>

                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>

  )
}

export default Home
