/* eslint-disable react/prop-types */
import React from 'react'

const CloseButton = ({ close }) => {
  return (
    <button className='w-50 btn btn-lg' type='action' onClick={(e) => { close(e, '/home') }}>Salir</button>
  )
}

export default CloseButton
