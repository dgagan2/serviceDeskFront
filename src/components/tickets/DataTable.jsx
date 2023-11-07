/* eslint-disable react/prop-types */
import React from 'react'
import EditButton from '../buttons/EditButton'
import DeleteButton from '../buttons/DeleteButton'

const TableBodyHeader = ({ tableHeaders }) => {
  return (

    <thead>
      <tr>
        {tableHeaders && tableHeaders?.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>

  )
}

const TableBodyCategories = ({ data, edit, Delete }) => {
  return (
    <tbody>
      {data && data?.map((data) => (
        <tr key={data?.idCategory}>
          <td>{data?.nameCategory}</td>
          <td className='td-button-edit'><EditButton edit={edit} /></td>
          <td className='td-button-delete'><DeleteButton Delete={Delete} id={data.idCategory} /></td>
        </tr>
      ))}
    </tbody>
  )
}

const TableBodyServices = ({ data, edit, Delete }) => {
  return (
    <tbody>
      {data && data?.map((data) => (
        <tr key={data?.id}>
          <td>{data?.nameItem}</td>
          <td>
            <img src={data?.itemImage} alt='image-item' id='image-bodytable-service' />
          </td>
          <td>{data?.itemDescription}</td>
          <td>{data?.categoryService?.nameCategory}</td>
          <td className='td-button-edit'><EditButton edit={edit} /></td>
          <td className='td-button-delete'><DeleteButton Delete={Delete} id={data.id} /></td>
        </tr>
      ))}
    </tbody>
  )
}

const TableBodyTicketState = ({ data, edit, Delete }) => {
  return (
    <tbody>
      {data && data?.map((data) => (
        <tr key={data?.id}>
          <td>{data?.nameState}</td>
          <td className='td-button-edit'><EditButton edit={edit} /></td>
          <td className='td-button-delete'><DeleteButton Delete={Delete} id={data.id} /></td>
        </tr>
      ))}
    </tbody>
  )
}

export { TableBodyHeader, TableBodyCategories, TableBodyServices, TableBodyTicketState }
