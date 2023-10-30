/* eslint-disable react/prop-types */
import React from 'react'
import { TableBodyHeader, TableBodyState } from '../DataTable'

const StateTable = ({ data, Delete }) => {
  const tableHeaders = ['Nombre', 'Editar', 'Eliminar']
  const edit = async () => {

  }
  return (
    <div className='table-responsive'>
      <table className='table align-middle'>
        <TableBodyHeader
          tableHeaders={tableHeaders}
        />
        <TableBodyState data={data} edit={edit} Delete={Delete} />
      </table>
    </div>

  )
}

export default StateTable
