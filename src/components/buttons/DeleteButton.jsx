/* eslint-disable react/prop-types */
import React from 'react'
import iconDelete from '../../assets/iconDelete.png'
const DeleteButton = ({ Delete, id }) => {
  const deleteObject = () => {
    Delete(id)
  }
  return (
    <button id='btn-delete' onClick={() => deleteObject()}><img src={iconDelete} alt='button to delete' /></button>
  )
}

export default DeleteButton
