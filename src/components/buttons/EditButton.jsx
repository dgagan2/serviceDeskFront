/* eslint-disable react/prop-types */
import React from 'react'
import iconEdit from '../../assets/editIcon.png'
import './buttons.css'
const EditButton = ({ edit }) => {
  const editObject = () => {
    edit()
  }
  return (
    <button id='btn-edit' onClick={() => editObject()}><img src={iconEdit} alt='button to edit' /></button>
  )
}

export default EditButton
