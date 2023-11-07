/* eslint-disable no-useless-catch */
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import UseHandleErrors from '../../../hooks/UseHandleErrors'
import { UseTicketContext } from '../../../hooks/UseTicketContext'
import { newService } from '../../../services/service'
import uploadImage from '../../../services/uploadImage'
import useForm from '../../../hooks/useForms'
import UserCategoriesOptions from '../../UserCategoriesOptions'

const uploadImageToFirebase = async (image) => {
  try {
    const response = await uploadImage(image, 'service-item-images')
    if (response.status === 201) {
      return response.data
    } else {
      throw new Error('Error al cargar la imagen en Firebase')
    }
  } catch (error) {
    throw error
  }
}
const AddService = () => {
  const [image, setImage] = useState(null)

  const { getServices } = UseTicketContext()

  const sendData = async () => {
    if (!image) return toast.error('Debe cargar una imagen')
    if (input.nameItem.length && input.idCategory.length <= 0) return toast.error('Datos incompletos')

    try {
      const urlImage = await uploadImageToFirebase(image, 'service-item-images')

      if (urlImage) {
        try {
          const response = await newService({ ...input, itemImage: urlImage })
          if (response.status === 201) {
            toast.success(response.data.message)
            setImage(null)
            setInput({
              nameItem: '',
              idCategory: '',
              itemDescription: ''
            })
            getServices()
          }
        } catch (error) {
          UseHandleErrors(error)
        }
      } else {
        toast.error('Datos incompletos')
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }

  const { input, handleInputChange, setInput } = useForm(sendData, {
    nameItem: '',
    idCategory: '',
    itemDescription: ''

  })
  console.log('input', input)
  return (

    <article className='container-new-service'>
      <label htmlFor=''>Ingrese el nombre del nuevo servicio</label>
      <div className='d-flex gap-3 p-3'>
        <input type='text' className='form-control' name='nameItem' placeholder='Nombre del servicio' value={input?.nameItem} onChange={handleInputChange} />
        <div className='col-sm-6'>
          <label htmlFor='image' className='form-label'>Imagen del Servicio</label>
          <input type='file' className='form-control' accept='.png, .jpg, .jpeg' id='image' onChange={(e) => { setImage(e.target.files[0]) }} />
        </div>
        <UserCategoriesOptions input={input} handleInputChange={handleInputChange} />
        <input type='text' className='form-control' placeholder='Descripction' value={input?.itemDescription} name='itemDescription' onChange={handleInputChange} />
        <button type='button' className='btn btn-dark' onClick={() => { sendData() }}>Agregar</button>
      </div>

    </article>

  )
}

export default AddService
