import React, { useState } from 'react'
import UseHandleErrors from '../../hooks/UseHandleErrors'
import { getServiceById } from '../../services/service'

const ServicesList = ({ id }) => {
  const [service, setService] = useState('')
  async function searchServicesById () {
    try {
      const response = await getServiceById(id)
      if (response.status === 200) {
        setService(response.data)
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }
  return (
    <section>
      <ul>
        {service && service.map((service) => (
          <li key={service?.id}>{service?.nameCategory}</li>
        ))}
      </ul>
    </section>

  )
}

export default ServicesList
