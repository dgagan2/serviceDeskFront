/* eslint-disable react/prop-types */
import React from 'react'
import { TableBodyHeader, TableBodyServices } from '../DataTable'

const ServiceTable = ({ data, Delete }) => {
  const tableHeaders = ['Nombre', 'Imagen', 'Descipción', 'Categoria', 'Editar', 'Eliminar']
  const edit = async () => {

  }
  return (
    <div className='table-responsive'>
      <table className='table align-middle'>
        <TableBodyHeader
          tableHeaders={tableHeaders}
        />
        <TableBodyServices data={data} edit={edit} Delete={Delete} />
      </table>
    </div>

  )
}

export default ServiceTable
