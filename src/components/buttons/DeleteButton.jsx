import React from 'react'
import iconDelete from '../../assets/iconDelete.png'
const deleteButton = () => {
  const deleteObject = () => {

  }
  return (
    <button id='btn-delete' onClick={() => deleteObject()}><img src={iconDelete} alt='button to delete' /></button>
  )
}

export default deleteButton
