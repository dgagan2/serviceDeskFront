/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React from 'react'
import UserDepartmentOptions from '../UserDepartmentOptions'
import UserRoleOptions from '../UserRoleOptions'
import UserStateOptions from '../UserStateOptions'
import SaveButton from '../buttons/SaveButton'
import { useNavigate } from 'react-router-dom'
import CloseButton from '../buttons/CloseButton'

const FormUser = ({ input, handleSubmit, handleInputChange, errorInput }) => {
  const navigate = useNavigate()
  const close = (e, destinaton) => {
    e.preventDefault()
    navigate(destinaton)
  }
  return (

    <form className='needs-validation' id='from-user' onSubmit={handleSubmit}>
      <div className='row g-3'>

        <div className='col-sm-6'>
          <label htmlFor='form-user-name' className='form-label'>Nombre</label>
          <input type='text' className='form-control' id='form-user-name' value={input?.name} name='name' onChange={handleInputChange} />
          {errorInput.name && <p className='errores'>{errorInput.name}</p>}
        </div>

        <div className='col-sm-6'>
          <label htmlFor='form-user-email' className='form-label'>Correo Electronico</label>
          <div className='input-group has-validation'>
            <span className='input-group-text'>@</span>
            <input
              type='text' className='form-control' id='form-user-email'
              value={input?.email} onChange={handleInputChange} name='email'
            />
          </div>
          {errorInput.email && <p className='errores'>{errorInput.email}</p>}
        </div>

        <div className='col-sm-6'>
          <label className='form-user-department'>Departamento</label>
          <UserDepartmentOptions input={input} handleInputChange={handleInputChange} />
          {errorInput.idDepartment && <p className='errores'>{errorInput.idDepartment}</p>}
        </div>

        <div className='col-sm-6'>
          <label className='form-user-role'>Rol</label>
          <UserRoleOptions input={input} handleInputChange={handleInputChange} />
          {errorInput.idRole && <p className='errores'>{errorInput.idRole}</p>}
        </div>

        <div className='col-sm-6'>
          <label className='form-user-state'>Estado</label>
          <UserStateOptions input={input} handleInputChange={handleInputChange} />
          {errorInput.idState && <p className='errores'>{errorInput.idState}</p>}
        </div>

        <div className='d-flex gap-3' id='container-buttons-modal-user'>
          <SaveButton />
          <CloseButton close={close} />
        </div>

      </div>

    </form>

  )
}

export default FormUser
