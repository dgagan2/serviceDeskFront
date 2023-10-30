import React, { useEffect, useState } from 'react'
import SearchComponent from '../SearchComponent'
import StateTable from './RoleTable'
import { toast } from 'react-toastify'
import UseHandleErrors from '../../hooks/UseHandleErrors'
import { UseRoleContext } from '../../hooks/UseRoleContext'
import { deleteRole, getRoleByName } from '../../services/userRole'

const RoleManager = () => {
  const { getRole, role, setRole } = UseRoleContext()
  const [input, setInput] = useState('')
  useEffect(() => {
    getRole()
  }, [])
  const searchFunction = async () => {
    if (!input) {
      toast.error('No hay valores de busqueda')
    } else {
      const response = await getRoleByName(input)
      if (response.status === 200) {
        setRole(response.data)
      }
    }
  }

  const cleanFields = () => {
    setInput('')
    getRole()
  }
  const Delete = async (id) => {
    try {
      const response = await deleteRole(id)
      if (response.status === 200) {
        toast.success(response.data.message)
        getRole()
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }

  return (
    <>
      <article className='container-search-role'>
        <label>Ingrese el nombre del rol a buscar</label>
        <div className='d-flex gap-3 p-3'>
          <input type='text' className='form-control' name='nameRole' value={input} onChange={(e) => { setInput(e.target.value) }} />
          <SearchComponent searchFunction={searchFunction} cleanFields={cleanFields} />
        </div>

      </article>
      <article>
        <StateTable data={role} Delete={Delete} />
      </article>
    </>
  )
}

export default RoleManager
