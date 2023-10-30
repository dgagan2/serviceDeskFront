/* eslint-disable react/prop-types */
import React from 'react'
import { TableBodyHeader, TableBodyUser } from '../DataTable'

const UserTable = ({ data, Delete }) => {
  const tableHeaders = ['Nombre', 'Correo', 'Departamento', 'Rol', 'Estado', 'Editar', 'Eliminar']
  const edit = async () => {

  }

  return (

    <div className='table-responsive'>
      <table className='table align-middle'>
        <TableBodyHeader
          tableHeaders={tableHeaders}
        />

        <TableBodyUser data={data} edit={edit} Delete={Delete} />
      </table>
    </div>

  )
}

export default UserTable
