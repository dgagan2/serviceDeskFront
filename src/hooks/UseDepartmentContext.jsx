import { useContext } from 'react'
import { DepartmentContext } from '../context/DepartmentContext'

export const UseDepartmentContext = () => {
  const context = useContext(DepartmentContext)
  if (context === undefined) {
    throw new Error('UseDepartmentContext debe ser usado dentro de SongProvider')
  }

  return context
}
