import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForms'
import { useState } from 'react'

import { validateForm } from './validateFormSingUp'
import { registerNewUser } from '../../services/login'
import { toast } from 'react-toastify'

const SignUp = () => {
  const [errorsRegitrerUser, setErrorsRegitrerUser] = useState({})

  const navigate = useNavigate()
  const sendData = async () => {
    const newErros = validateForm(input)
    setErrorsRegitrerUser(newErros)
    if (Object.keys(newErros).length === 0) {
      try {
        const response = await registerNewUser(input)
        if (response.status === 200) {
          toast.success(response.data.message)
          navigate('/home')
        }
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    name: '',
    email: '',
    password: '',
    password_two: ''
  })

  return (
    <>
      <main className='container-sign-up'>
        <div className='row g-5 d-flex justify-content-center'>
          <div className='col-md-7 col-lg-8'>
            <h3 className='mb-3 text-center'>Registrarte</h3>
            <form className='needs-validation' onSubmit={handleSubmit}>
              <div className='row g-3'>
                <div className='col-sm-6'>
                  <label htmlFor='name' className='form-label'>Nombre<span className='text-muted'>(Obligatorio)</span></label>
                  <input type='text' className='form-control' id='name' value={input.name} onChange={handleInputChange} name='name' />
                  {errorsRegitrerUser.name && <p className='errores'>{errorsRegitrerUser.name}</p>}
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='email' className='form-label'>Correo Electronico<span className='text-muted'>(Obligatorio)</span></label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>@</span>
                    <input
                      type='text' className='form-control' id='email' placeholder='you@example.com'
                      value={input.email} onChange={handleInputChange} name='email'
                    />
                  </div>
                  {errorsRegitrerUser.email && <p className='errores'>{errorsRegitrerUser.email}</p>}
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='password' className='form-label'>Contraseña<span className='text-muted'>(Obligatorio)</span></label>
                  <input
                    type='password' className='form-control' id='password'
                    value={input.password} onChange={handleInputChange} name='password'
                  />
                  {errorsRegitrerUser.password && <p className='errores'>{errorsRegitrerUser.password}</p>}
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='password_two' className='form-label'>Contraseña<span className='text-muted'>(Obligatorio)</span></label>
                  <input
                    type='password' className='form-control' id='password_two'
                    value={input.password_two} onChange={handleInputChange} name='password_two'
                  />
                  {errorsRegitrerUser.password && <p className='errores'>{errorsRegitrerUser.password}</p>}
                </div>

              </div>

              <div className='container-button d-flex'>
                <button className='w-100 btn btn-primary btn-lg mt-5'>Registrarse</button>
                <Link className='w-100 btn btn-primary btn-lg mt-5' to='/login'>Volver</Link>
              </div>

            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignUp
