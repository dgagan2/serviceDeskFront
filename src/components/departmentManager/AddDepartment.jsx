import React, { useState } from 'react'
import { toast } from 'react-toastify'
import UseHandleErrors from '../../hooks/UseHandleErrors'
import { newDepartment } from '../../services/userDepartment'
import { UseDepartmentContext } from '../../hooks/UseDepartmentContext'

const AddDepartment = () => {
  const { getDepartment } = UseDepartmentContext()
  const [nameDepartment, setNameDepartment] = useState('')
  const add = async () => {
    if (nameDepartment) {
      try {
        const response = await newDepartment(nameDepartment)
        if (response.status === 201) {
          toast.success(response.data.message)
          setNameDepartment('')
          getDepartment()
        }
      } catch (error) {
        UseHandleErrors(error)
      }
    } else {
      toast.error('Debe ingresar el nombre del Departamento')
    }
  }
  return (

    <article className='container-new-role'>
      <label htmlFor=''>Ingrese el nombre del nuevo Departamento</label>
      <div className='d-flex gap-3 p-3'>
        <input type='text' className='form-control' name='nameDepartment ' value={nameDepartment} onChange={(e) => { setNameDepartment(e.target.value) }} />
        <button type='button' className='btn btn-dark' onClick={() => { add() }}>Agregar</button>
      </div>

    </article>

  )
}

export default AddDepartment
