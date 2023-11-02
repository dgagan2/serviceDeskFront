import React, { useEffect } from 'react'
import { UseTicketContext } from '../../hooks/UseTicketContext'
import UseHandleErrors from '../../hooks/UseHandleErrors'
import { getServiceByCategory } from '../../services/service'

const CategoryList = () => {
  const { getCategories, categories, setService } = UseTicketContext()
  useEffect(() => {
    getCategories()
  }, [])
  async function searchServicesByCategory (idCategory) {
    try {
      const response = await getServiceByCategory(idCategory)
      if (response.status === 200) {
        setService(response.data)
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }
  return (
    <article className='container-categories-list'>
      <ul>
        {categories && categories.map((category) => (
          <li key={category.idCategory}><button onClick={() => { searchServicesByCategory(category.idCategory) }}>{category.nameCategory}</button></li>
        ))}
      </ul>
    </article>
  )
}

export default CategoryList
