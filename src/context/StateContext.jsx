/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import UseHandleErrors from '../hooks/UseHandleErrors'
import { getAllState } from '../services/state'
// eslint-disable-next-line camelcase
const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [state, setState] = useState([])

  async function getState () {
    try {
      const response = await getAllState()
      if (response.status === 200) {
        setState(response.data)
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }

  useEffect(() => {
    getState()
  }, [])

  return (
    <StateContext.Provider value={{ getState, state, setState }}>
      {children}
    </StateContext.Provider>
  )
}

export { StateContext, StateProvider }
