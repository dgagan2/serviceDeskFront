import React, { useEffect } from 'react'
import { UseTicketContext } from '../../hooks/UseTicketContext'

const CategoryList = () => {
  const { getCategories, categories } = UseTicketContext()
  useEffect(() => {
    getCategories()
  }, [])
  return (
    <section>
      <ul>
        {categories && categories.map((category) => (
          <li key={category.idCategory}><button>{category.nameCategory}</button></li>
        ))}
      </ul>
    </section>
  )
}

export default CategoryList
