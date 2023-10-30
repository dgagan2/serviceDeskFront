import { useContext } from 'react'
import { TicketContext } from '../context/TicketContext'

export const UseTicketContext = () => {
  const context = useContext(TicketContext)
  if (context === undefined) {
    throw new Error('UseTicketContext debe ser usado dentro de SongProvider')
  }

  return context
}
