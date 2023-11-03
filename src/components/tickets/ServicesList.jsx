import React from 'react'
import { UseTicketContext } from '../../hooks/UseTicketContext'
import { useNavigate } from 'react-router-dom'

const ServicesList = () => {
  const { service } = UseTicketContext()

  const navigate = useNavigate()

  return (
    <section className='container-service-list'>
      <ul id='list-service' className='d-flex gap-4'>
        {service && service.map((service) => (
          <li key={service?.id}>
            <div id='container-items-service'>
              <img id='image-service' src={service?.itemImage} alt={`Image service ${service?.nameItem}`} />
              <b> {service?.nameItem}</b>
              <button onClick={() => {
                navigate('/ticket', { state: { service } })
              }}
              >Solicitar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>

  )
}

export default ServicesList
