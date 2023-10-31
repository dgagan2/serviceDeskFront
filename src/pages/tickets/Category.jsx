import React from 'react'
import Header from '../../components/header/Header'
import AddCategory from '../../components/tickets/categories/AddCategory'
import CategoryManager from '../../components/tickets/categories/CategoryManager'
import { TicketProvider } from '../../context/TicketContext'

const Category = () => {
  return (
    <>
      <Header />
      <TicketProvider>
        <section className='container-manager-category m-4'>

          <AddCategory />
          <CategoryManager />
        </section>

      </TicketProvider>

    </>
  )
}

export default Category
