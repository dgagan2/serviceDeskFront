import React, { useEffect, useState } from 'react'
import SearchComponent from '../SearchComponent'
import UserTable from './UserTable'
import OptionToRender from './OptionToRender'
import useForm from '../../hooks/useForms'
import { toast } from 'react-toastify'
import { deleteUserById, getAllUser, getUserByDepartment, getUserByEmail, getUserByName, getUserByRole, getUserByState } from '../../services/user'
import UseHandleErrors from '../../hooks/UseHandleErrors'
import './user.css'

// Funcion para obtener todos los usuarios y pasarlo al State User
async function getUser (setUsers) {
  try {
    const response = await getAllUser()
    if (response.status === 200) {
      setUsers(response.data)
    }
  } catch (error) {
    UseHandleErrors(error)
  }
}
// Funcion que realiza la busqueda de un usuario dependiendo del tipo de filtro
async function searchFunction (input, optionSearch, setUsers) {
  switch (optionSearch) {
    case 'email':
      try {
        console.log('paso')
        const response = await getUserByEmail(input.dataToSearch)
        if (response.status === 200) {
          console.log('response.data', response.data)
          setUsers(response.data)
        }
      } catch (error) {
        UseHandleErrors(error)
      }
      break
    case 'name':
      try {
        const response = await getUserByName(input.dataToSearch)
        if (response.status === 200) {
          setUsers(response.data)
        }
      } catch (error) {
        UseHandleErrors(error)
      }
      break
    case 'role':
      try {
        const response = await getUserByRole(input.idRole)
        if (response.status === 200) {
          setUsers(response.data)
        }
      } catch (error) {
        UseHandleErrors(error)
      }
      break
    case 'state':
      try {
        const response = await getUserByState(input.idState)
        if (response.status === 200) {
          setUsers(response.data)
        }
      } catch (error) {
        UseHandleErrors(error)
      }
      break
    case 'department':
      try {
        const response = await getUserByDepartment(input.idDepartment)
        if (response.status === 200) {
          setUsers(response.data)
        }
      } catch (error) {
        UseHandleErrors(error)
      }
      break
  }
}
// Funcion principal donde se busca, edita y elimina un usuario
const ManageUser = () => {
  const [optionSearch, setOptionSearch] = useState('email')
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUser(setUsers)
  }, [])

  const Delete = async (id) => {
    try {
      const response = await deleteUserById(id)
      if (response.status === 200) {
        toast.success(response.data.message)
        getUser(setUsers)
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }
  const sendData = () => {
    if (!input.dataToSearch && !input.idDepartment && !input.idRole && !input.idState) {
      toast.error('Debe ingresar el usario a buscar')
    } else {
      searchFunction(input, optionSearch, setUsers)
    }
  }
  const { input, handleInputChange, setInput } = useForm(sendData, {
    dataToSearch: ''
  })

  const cleanFields = () => {
    getUser(setUsers)
    setOptionSearch('email')
    setInput('')
  }

  return (
    <>
      <article className='container-search-user'>
        <div className='d-flex flex-row gap-2' id='container-search-user-items'>
          <select id='search-options' className='form-select' value={optionSearch} onChange={(e) => { setOptionSearch(e.target.value) }}>
            <option value='email'>Correo</option>
            <option value='name'>Nombre</option>
            <option value='role'>Rol</option>
            <option value='state'>Estado</option>
            <option value='department'>Departamento</option>
          </select>

          <OptionToRender optionSearch={optionSearch} input={input} handleInputChange={handleInputChange} />
          <SearchComponent searchFunction={sendData} cleanFields={cleanFields} />
        </div>

      </article>
      <article className='container-user-table'>
        <UserTable data={users} Delete={Delete} />
      </article>

    </>

  )
}

export default ManageUser
