import React from 'react'
import searchIcon from '../../assets/iconoBuscar.png'
const SearchComponent = ({ searchFunction }) => {
  const searchObject = () => {
    searchFunction()
  }
  return (
    <div>
      <input type='text' />
      <button id='btn-search' onClick={() => searchObject()}><img src={searchIcon} alt='search button' /></button>
    </div>
  )
}

export default SearchComponent
