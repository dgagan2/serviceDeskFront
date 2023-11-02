import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import checkRoles from '../../hooks/chechkRole'
import { useUserContext } from '../../hooks/UseUserContext'
import NavbarItems from '../itemsAdmin/NavbarItems'
const Navbar = () => {
  const [role, setRole] = useState('customer')
  const { userLoggedIn } = useUserContext()

  const isAdmin = async () => {
    const response = await checkRoles(userLoggedIn.idRole)
    if (response) setRole(response)
  }

  useEffect(() => {
    isAdmin()
  }, [])

  return (
    <article className='navbar navbar-expand-md navbar-dark'>
      <div className='container-fluid'>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0' id='navbar-menu'>
            <li className='nav-item'>
              <Link className='nav-link' href='#'>Tickets</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/home/catalog'>Catalogo de Servicios</Link>
            </li>
            {role === 'admin'
              ? <NavbarItems />
              : null}

          </ul>

        </div>

      </div>
    </article>
  )
}

export default Navbar
