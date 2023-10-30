import React, { useEffect, useState } from 'react'
import SearchComponent from '../SearchComponent'
import { toast } from 'react-toastify'
import UseHandleErrors from '../../hooks/UseHandleErrors'
import { UseDepartmentContext } from '../../hooks/UseDepartmentContext'
import { deleteDepartmentById } from '../../services/userDepartment'
import Departmenttable from './DepartmentTable'

const DepartmentManager = () => {
  const { getDepartment, department, setDepartment } = UseDepartmentContext()
  const [input, setInput] = useState('')
  useEffect(() => {
    getDepartment()
  }, [])
  const searchFunction = async () => {
    if (!input) {
      toast.error('No hay valores de busqueda')
    } else {
      const response = await (input)
      if (response.status === 200) {
        setDepartment(response.data)
      }
    }
  }

  const cleanFields = () => {
    setInput('')
    getDepartment()
  }
  const Delete = async (id) => {
    try {
      const response = await deleteDepartmentById(id)
      if (response.status === 200) {
        toast.success(response.data.message)
        getDepartment()
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }

  return (
    <>
      <article className='container-search-department'>
        <label>Ingrese el nombre del departamento a buscar</label>
        <div className='d-flex gap-3 p-3'>
          <input type='text' className='form-control' name='nameDepartment' value={input} onChange={(e) => { setInput(e.target.value) }} />
          <SearchComponent searchFunction={searchFunction} cleanFields={cleanFields} />
        </div>

      </article>
      <article>
        <Departmenttable data={department} Delete={Delete} />
      </article>
    </>
  )
}

export default DepartmentManager
