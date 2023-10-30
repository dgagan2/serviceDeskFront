/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import UseHandleErrors from '../hooks/UseHandleErrors'
import { getAllService } from '../services/service'

// eslint-disable-next-line camelcase
const TicketContext = createContext()

const TicketProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [service, setService] = useState([])
  const [ticketState, setTicketState] = useState([])

  async function getCategories () {
    // try {
    //   const response = await ()
    //   if (response.status === 200) {
    //     setCategories(response.data)
    //   }
    // } catch (error) {
    //   UseHandleErrors(error)
    // }
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
    // try {
    //   const response = await ()
    //   if (response.status === 200) {
    //     setTicketState(response.data)
    //   }
    // } catch (error) {
    //   UseHandleErrors(error)
    // }
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
      setService
    }}
    >
      {children}
    </TicketContext.Provider>
  )
}

export { TicketContext, TicketProvider }
