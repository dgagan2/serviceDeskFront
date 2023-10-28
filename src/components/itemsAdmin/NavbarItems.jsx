import React from 'react'

const NavbarItems = () => {
  return (
    <>
      <div className='dropdown'>
        <button className='btn dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
          Usuarios
        </button>
        <ul className='dropdown-menu'>
          <li><a className='dropdown-item' href='#'>Administrar Usuarios</a></li>
          <li><a className='dropdown-item' href='#'>Administrar Rol</a></li>
          <li><a className='dropdown-item' href='#'>Administrar Estados</a></li>
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
