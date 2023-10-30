import React, { useState } from 'react'
import { toast } from 'react-toastify'
import UseHandleErrors from '../../hooks/UseHandleErrors'
import { newRole } from '../../services/rol'
import { UseRoleContext } from '../../hooks/UseRoleContext'

const AddRole = () => {
  const { getRole } = UseRoleContext()
  const [nameRole, setNameRole] = useState('')
  const add = async () => {
    if (nameRole) {
      try {
        const response = await newRole(nameRole)
        if (response.status === 201) {
          toast.success(response.data.message)
          setNameRole('')
          getRole()
        }
      } catch (error) {
        UseHandleErrors(error)
      }
    } else {
      toast.error('Debe ingresar el nombre del Rol')
    }
  }
  return (

    <article className='container-new-role'>
      <label htmlFor=''>Ingrese el nombre del nuevo Rol</label>
      <div className='d-flex gap-3 p-3'>
        <input type='text' className='form-control' name='nameRole' value={nameRole} onChange={(e) => { setNameRole(e.target.value) }} />
        <button type='button' className='btn btn-dark' onClick={() => { add() }}>Agregar</button>
      </div>

    </article>

  )
}

export default AddRole
