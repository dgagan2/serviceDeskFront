/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { UseTicketContext } from '../hooks/UseTicketContext'

const UserCategoriesOptions = ({ input, handleInputChange }) => {
  const { getCategories, categories } = UseTicketContext()

  useEffect(() => {
    getCategories()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <select id='ticket-categories' className='form-select' name='idCategory' value={input?.idCategory} onChange={handleInputChange}>
      <option>Seleccione...</option>
      {categories && categories.map((categories) => (
        <option key={categories.idCategory} value={categories.idCategory}>{categories.nameCategory}</option>
      ))}
    </select>

  )
}

export default UserCategoriesOptions
