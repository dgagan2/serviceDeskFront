import React from 'react'
import { Collapse } from 'bootstrap'
const Navbar = () => {
  return (
    <article className='navbar navbar-expand-md navbar-dark'>
      <div className='container-fluid'>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
            {/* {genreHeader && genreHeader.map((item) => (

                <li className='nav-item' key={item._id}>
                  <Link className='nav-link active' aria-current='page' onClick={(e) => { search(e, 'genre', item.name) }}>{item.name}</Link>
                </li>

              ))} */}
          </ul>

        </div>

      </div>
    </article>
  )
}

export default Navbar
