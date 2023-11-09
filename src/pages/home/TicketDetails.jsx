import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { closeRequest } from '../../services/ticket'
import { newComment } from '../../services/commenTicket'
import { toast } from 'react-toastify'
import UseHandleErrors from '../../hooks/UseHandleErrors'

const TicketDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { numberTicket, description, itemService, stateTicket, creationDate } = location.state.data
  async function addCommnet () {
    try {
      const response = await newComment()
    } catch (error) {

    }
  }
  async function updateTicketState () {
    try {
      const response = await closeRequest(numberTicket)
      console.log(response)
      if (response.status === 200) {
        toast.success(response.data.message)
        navigate('/home')
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }
  return (
    <>
      <Header />
      <section>
        {stateTicket?.nameState !== 'cerrado'
          ? <button className='btn btn-dark' onClick={() => updateTicketState()}>Marcar Solicitud como resuelta</button>
          : null}
        <article>
          <b># Solicitud: {numberTicket}</b>
          <p>{itemService?.nameItem}</p>
        </article>
        <article>
          <p>{description}</p>
          <b>Estado: {stateTicket?.nameState}</b>
          <span>Creado: {creationDate.slice(0, -14)}</span>
        </article>
        {stateTicket?.nameState !== 'cerrado'
          ? <article>
            <span>Agregar Comentario</span>
            <textarea name='' id='' cols='30' rows='10' />
            <button className='btn btn-dark' onClick={() => addCommnet()}>Agregar </button>
            </article>
          : null}

      </section>
    </>

  )
}

export default TicketDetails
