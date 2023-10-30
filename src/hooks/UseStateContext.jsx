import { useContext } from 'react'
import { StateContext } from '../context/StateContext'

export const UseStateContext = () => {
  const context = useContext(StateContext)
  if (context === undefined) {
    throw new Error('UseStateContext debe ser usado dentro de SongProvider')
  }

  return context
}
