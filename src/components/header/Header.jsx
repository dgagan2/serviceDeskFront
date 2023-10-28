import React from 'react'
import Navbar from './Navbar'

import './header.css'
import DropdownMenuUser from './DropdownMenuUser'
const Header = () => {
  return (
    <header>
      <section className='header-container'>

        <li><h1>ServiceDesk</h1></li>
        <DropdownMenuUser />

      </section>
      <section className='header-navbar'>
        <Navbar />
      </section>
    </header>

  )
}

export default Header
