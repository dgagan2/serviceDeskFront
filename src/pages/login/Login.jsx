import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForms'
import validateFormLogin from './validateFormLogIn'
import { Validatelogin } from '../../services/login'
import { useUserContext } from '../../hooks/UseUserContext'
import UseHandleErrors from '../../hooks/UseHandleErrors'

const Login = () => {
  const [errorsLogin, setErrorsLogin] = useState({})
  const { saveUserLocalStorage } = useUserContext()
  const navigate = useNavigate()
  const sendData = async () => {
    const newErros = validateFormLogin(input)
    setErrorsLogin(newErros)
    if (Object.keys(newErros).length === 0) {
      try {
        const response = await Validatelogin(input)
        if (response.status === 200) {
          const { user, token } = response.data
          saveUserLocalStorage({ ...user, token })
          navigate('/home')
        }
      } catch (error) {
        UseHandleErrors(error)
      }
    }
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    email: '',
    password: ''
  }
  )

  return (
    <>
      <main className='login'>
        <article className='container-login'>

          <form className='form-floating' onSubmit={handleSubmit}>

            <h1 className='text-center'>ServiceDesk</h1>
            <h4 className='text-center mt-4'>Login</h4>
            <div className='form-login d-flex flex-column gap-2'>
              <label htmlFor='email'>Usuario</label>
              <input type='text' id='email' name='email' className='form-control' value={input.email} onChange={handleInputChange} />
              {errorsLogin.email && <p className='errores'>{errorsLogin.email}</p>}
              <label htmlFor='password'>Contraseña</label>
              <input type='password' id='password' name='password' className='form-control' value={input.password} onChange={handleInputChange} />
              {errorsLogin.password && <span className='errores'>{errorsLogin.password}</span>}
            </div>
            <div className='container-button-login'>
              <button className='w-100 btn btn-lg btn-primary' type='submit' onSubmit={handleSubmit}>Iniciar sesión</button>
            </div>

          </form>
          <Link to='/account/registration'>Regístrese</Link>
        </article>
      </main>
    </>
  )
}

export default Login
