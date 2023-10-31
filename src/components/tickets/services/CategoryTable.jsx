/* eslint-disable react/prop-types */
import React from 'react'
import { TableBodyCategories, TableBodyHeader } from '../DataTable'

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
        <TableBodyCategories data={data} edit={edit} Delete={Delete} />
      </table>
    </div>

  )
}

export default RoleTable
