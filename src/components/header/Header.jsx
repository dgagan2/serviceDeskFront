import React from 'react'
import Navbar from './Navbar'

import './header.css'
import DropdownMenuUser from './DropdownMenuUser'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='main-header'>
      <section className='header-container'>

        <h1>
          <Link to='/home'>ServiceDesk</Link>
        </h1>
        <DropdownMenuUser />

      </section>
      <section className='header-navbar'>
        <Navbar />
      </section>
    </header>

  )
}

export default Header
