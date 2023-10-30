import { useContext } from 'react'
import { RoleContext } from '../context/RoleContext'

export const UseRoleContext = () => {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error('UseRoleContext debe ser usado dentro de SongProvider')
  }

  return context
}
