import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { UseTicketContext } from '../../../hooks/UseTicketContext'
import SearchComponent from '../../SearchComponent'
import UseHandleErrors from '../../../hooks/UseHandleErrors'
import { deleteService, getServiceByName } from '../../../services/service'
import ServiceTable from './ServiceTable'

const ServiceManager = () => {
  const { getServices, service, setService } = UseTicketContext()
  const [input, setInput] = useState('')
  useEffect(() => {
    getServices()
  }, [])
  const searchFunction = async () => {
    if (!input) {
      toast.error('No hay valores de busqueda')
    } else {
      const response = await getServiceByName(input)
      if (response.status === 200) {
        setService(response.data)
      }
    }
  }

  const cleanFields = () => {
    setInput('')
    getServices()
  }
  const Delete = async (id) => {
    try {
      const response = await deleteService(id)
      if (response.status === 200) {
        toast.success(response.data.message)
        getServices()
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }

  return (
    <>
      <article className='container-search-service'>
        <label>Ingrese el nombre del servicio a buscar</label>
        <div className='d-flex gap-3 p-3'>
          <input type='text' className='form-control' value={input} onChange={(e) => { setInput(e.target.value) }} />
          <SearchComponent searchFunction={searchFunction} cleanFields={cleanFields} />
        </div>

      </article>
      <article>
        <ServiceTable data={service} Delete={Delete} />
      </article>
    </>
  )
}

export default ServiceManager
