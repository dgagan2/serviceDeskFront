import React from 'react'
import Header from '../../components/header/Header'
import { RoleProvider } from '../../context/RoleContext'
import AddRole from '../../components/roleManager/AddRole'
import RoleManager from '../../components/roleManager/RoleManager'

const Role = () => {
  return (

    <>
      <Header />
      <RoleProvider>
        <section className='container-manager-state m-4'>

          <AddRole />
          <RoleManager />
        </section>
      </RoleProvider>

    </>

  )
}

export default Role
