/* eslint-disable react/prop-types */
import React from 'react'
import { TableBodyHeader, TableBodyTicketState } from '../DataTable'

const RoleTable = ({ data, Delete }) => {
  const tableHeaders = ['Nombre', 'Editar', 'Eliminar']
  const edit = async () => {

  }
  return (
    <div className='table-responsive'>
      <table className='table align-middle'>
        <TableBodyHeader
          tableHeaders={tableHeaders}
        />
        <TableBodyTicketState data={data} edit={edit} Delete={Delete} />
      </table>
    </div>

  )
}

export default RoleTable
