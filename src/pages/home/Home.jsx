import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import { getTicket } from '../../services/ticket'

const Home = () => {
  const [ticket, setTicekt] = useState([])
  const getTicekts = async () => {
    const response = await getTicket()
    if (response.status === 200) {
      setTicekt(response.data)
    }
  }
  useEffect(() => {
    getTicekts()
  }, [])
  return (
    <>
      <Header />
      <section>
        <article>
          <ul>
            {ticket && ticket.map((ticket) => (
              <li key={ticket?.numberTicket}>
                <div className='d-flex '>
                  <p>N Solicitud: {ticket?.numberTicket}</p>
                  <b>{ticket.creationDate.slice(0, -14)}</b>
                </div>
                <div>
                  <p>Asignado a: {ticket?.person_ticket_idAgentToperson?.name}</p>
                  <p>Estado: {ticket?.stateTicket?.nameState}</p>
                  <b>Servicio Solicitado: {ticket?.itemService?.nameItem}</b>
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
