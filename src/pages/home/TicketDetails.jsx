/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-var */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { closeRequest } from '../../services/ticket'
import { getTicketFeedback, newComment } from '../../services/commenTicket'
import { toast } from 'react-toastify'
import UseHandleErrors from '../../hooks/UseHandleErrors'

const getComments = async (numberTicket, setComments) => {
  try {
    const response = await getTicketFeedback(numberTicket)
    if (response.status === 200) {
      setComments(response.data)
    }
  } catch (error) {
    UseHandleErrors(error)
  }
}

async function updateTicketState (navigate, numberTicket) {
  try {
    const response = await closeRequest(numberTicket)
    if (response.status === 200) {
      toast.success(response.data.message)
      navigate('/home')
    }
  } catch (error) {
    UseHandleErrors(error)
  }
}

const TicketDetails = () => {
  const location = useLocation()
  const [comments, setComments] = useState([])
  const { numberTicket, description, itemService, stateTicket, creationDate } = location.state.data

  return (
    <>
      <Header />
      <section>
        <ButtonCloseTickets stateTicket={stateTicket} numberTicket={numberTicket} />
        <article>
          <b># Solicitud: {numberTicket}</b>
          <p>{itemService?.nameItem}</p>
        </article>
        <article>
          <p>{description}</p>
          <b>Estado: {stateTicket?.nameState}</b>
          <span>Creado: {creationDate.slice(0, -14)}</span>
        </article>
        <AddComment stateTicket={stateTicket} numberTicket={numberTicket} setComments={setComments} />
        <RenderComments numberTicket={numberTicket} setComments={setComments} comments={comments} />
      </section>
    </>

  )
}

const AddComment = ({ stateTicket, numberTicket, setComments }) => {
  const [descriptionComment, setDescriptionComment] = useState('')
  async function add () {
    try {
      const response = await newComment({ numberTicket, descriptionComment })
      if (response.status === 201) {
        setDescriptionComment('')
        getComments(numberTicket, setComments)
      }
    } catch (error) {
      UseHandleErrors(error)
    }
  }
  return (
    <>
      {stateTicket?.nameState !== 'cerrado'
        ? <article>
          <span>Agregar Comentario</span>
          <textarea name='descriptionComment' id='descriptionComment' cols='30' rows='10' value={descriptionComment} onChange={(e) => setDescriptionComment(e.target.value)} />
          <button
            className='btn btn-dark'
            onClick={() => add(descriptionComment, numberTicket, setDescriptionComment, setComments)}
          >Agregar
          </button>
          </article>
        : null}
    </>

  )
}

const RenderComments = ({ numberTicket, setComments, comments }) => {
  useEffect(() => {
    getComments(numberTicket, setComments)
  }, [])
  return (
    <>
    <article id='container-comments'>
      {comments && comments.map((comment) => (
        <div key={comment.id}>
          <b>{comment?.person?.name}</b>
          <div>
          <p>{comment?.descriptionComment}</p>
          </div>
        </div>
      ))}
    </article>
    </>
  )
}

const ButtonCloseTickets = ({ stateTicket, numberTicket }) => {
  const navigate = useNavigate()
  return (
    <>
      {stateTicket?.nameState !== 'cerrado'
        ? <button className='btn btn-dark' onClick={() => updateTicketState(navigate, numberTicket)}>Marcar Solicitud como resuelta</button>
        : null}
    </>
  )
}
export default TicketDetails
