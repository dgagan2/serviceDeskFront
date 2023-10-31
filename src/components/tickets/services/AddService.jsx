import React, { useState } from 'react'
import { toast } from 'react-toastify'
import UseHandleErrors from '../../../hooks/UseHandleErrors'
import { UseTicketContext } from '../../../hooks/UseTicketContext'
import { newService } from '../../../services/service'
import uploadImage from '../../../services/uploadImage'
import useForm from '../../../hooks/useForms'
import UserCategoriesOptions from '../../UserCategoriesOptions'

const AddService = () => {
  const [image, setImage] = useState(null)
  const [urlImage, setUrlImage] = useState('')
  const { getServices } = UseTicketContext()

  const sendData = async () => {
    if (!image) return toast.error('Debe cargar una imagen')
    try {
      const response = await uploadImage(image, 'service-item-images')
      if (response.status === 201) {
        setUrlImage(response.data)
      }
    } catch (error) {
      return UseHandleErrors(error)
    }
    console.log(input.nameItem.length > 0 && urlImage && input.idCategory.length > 0)
    if (input.nameItem.length > 0 && urlImage && input.idCategory.length > 0) {
      try {
        const response = await newService({ ...input, itemImage: urlImage })
        if (response.status === 201) {
          toast.success(response.data.message)
          setImage(null)
          setUrlImage('')
          getServices()
        }
      } catch (error) {
        console.log('error', error)
        UseHandleErrors(error)
      }
    } else {
      toast.error('Datos incompletos')
    }
  }

  const { input, handleInputChange } = useForm(sendData, {
    nameItem: '',
    idCategory: ''

  })

  return (

    <article className='container-new-service'>
      <label htmlFor=''>Ingrese el nombre del nuevo servicio</label>
      <div className='d-flex gap-3 p-3'>
        <input type='text' className='form-control' name='nameItem' value={input?.nameItem} onChange={handleInputChange} />
        <div className='col-sm-6'>
          <label htmlFor='image' className='form-label'>Imagen del Servicio</label>
          <input type='file' className='form-control' accept='.png, .jpg, .jpeg' id='image' onChange={(e) => { setImage(e.target.files[0]) }} />
        </div>
        <UserCategoriesOptions input={input} handleInputChange={handleInputChange} />
        <button type='button' className='btn btn-dark' onClick={() => { sendData() }}>Agregar</button>
      </div>

    </article>

  )
}

export default AddService
