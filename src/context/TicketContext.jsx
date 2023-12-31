/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import UseHandleErrors from '../hooks/UseHandleErrors'
import { getAllService } from '../services/service'
import { getAllCategories } from '../services/category'
import { getAllTicketState } from '../services/ticketState'

// eslint-disable-next-line camelcase
const TicketContext = createContext()

const TicketProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [service, setService] = useState([])
  const [ticketState, setTicketState] = useState([])
  const [idService, setIdService] = useState('')

  async function getCategories () {
    try {
      const response = await getAllCategories()
      if (response.status === 200) {
        setCategories(response.data)
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }

  async function getServices () {
    try {
      const response = await getAllService()
      if (response.status === 200) {
        setService(response.data)
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }

  async function getTicketState () {
    try {
      const response = await getAllTicketState()
      if (response.status === 200) {
        setTicketState(response.data)
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }

  return (
    <TicketContext.Provider value={{
      getCategories,
      getServices,
      getTicketState,
      setCategories,
      categories,
      ticketState,
      setTicketState,
      service,
      setService,
      idService,
      setIdService
    }}
    >
      {children}
    </TicketContext.Provider>
  )
}

export { TicketContext, TicketProvider }
