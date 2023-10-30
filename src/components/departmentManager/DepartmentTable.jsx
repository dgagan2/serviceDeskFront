/* eslint-disable react/prop-types */
import React from 'react'
import { TableBodyDepartment, TableBodyHeader } from '../DataTable'

const Departmenttable = ({ data, Delete }) => {
  const tableHeaders = ['Nombre', 'Editar', 'Eliminar']
  const edit = async () => {

  }
  return (
    <div className='table-responsive'>
      <table className='table align-middle'>
        <TableBodyHeader
          tableHeaders={tableHeaders}
        />
        <TableBodyDepartment data={data} edit={edit} Delete={Delete} />
      </table>
    </div>

  )
}

export default Departmenttable
