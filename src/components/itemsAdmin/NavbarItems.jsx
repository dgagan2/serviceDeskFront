import React from 'react'
import { Link } from 'react-router-dom'

const NavbarItems = () => {
  return (
    <>
      <div className='dropdown'>
        <button className='btn dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
          Usuarios
        </button>
        <ul className='dropdown-menu'>
          <li><Link to='/user/manager' className='dropdown-item'>Administrar Usuarios</Link></li>
          <li><Link className='dropdown-item' to='/user/manager/role'>Administrar Rol</Link></li>
          <li><Link className='dropdown-item' to='/user/manager/state'>Administrar Estados</Link></li>
          <li><Link className='dropdown-item' to='/user/manager/department'>Administrar Departamentos</Link></li>
        </ul>
      </div>
      <div className='dropdown'>
        <button className='btn dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
          Tickets
        </button>
        <ul className='dropdown-menu'>
          <li><a className='dropdown-item' href='#'>Administrar Servicios</a></li>
          <li><a className='dropdown-item' href='#'>Administrar Categorias</a></li>
          <li><a className='dropdown-item' href='#'>Administrar Estados</a></li>
          <li><a className='dropdown-item' href='#'>Administrar </a></li>
        </ul>
      </div>

    </>
  )
}

export default NavbarItems
