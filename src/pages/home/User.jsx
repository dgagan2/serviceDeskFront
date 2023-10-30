import React from 'react'
import ManageUser from '../../components/userManager/ManageUser'
import Header from '../../components/header/Header'
import './user.css'
const User = () => {
  return (
    <>
      <Header />
      <section className='container-manager-user'>
        <h2 id='title'>Administrador de Usuarios</h2>
        <ManageUser />
      </section>

    </>

  )
}

export default User
