/* eslint-disable react/prop-types */
import React from 'react'
import searchIcon from '../assets/iconoBuscar.png'
import './components.css'
const SearchComponent = ({ searchFunction, cleanFields }) => {
  const searchObject = () => {
    searchFunction()
  }
  return (
    <>
      <button id='btn-search' onClick={() => searchObject()}><img src={searchIcon} alt='search button' /></button>
      <button type='button' className='btn btn-dark' onClick={() => { cleanFields() }}>Borrar</button>
    </>

  )
}

export default SearchComponent
