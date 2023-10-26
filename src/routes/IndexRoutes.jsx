import { Routes, Route } from 'react-router-dom'
import NotFound from '../pages/notFound/NotFound'
import Login from '../pages/login/Login'
import SignUp from '../pages/signUp/SignUp'
import { useUserContext } from '../hooks/UseUserContext'
import LoginRoutes from './LoginRoutes'
const RoutesIndex = () => {
  const { isLoggin } = useUserContext()
  return (
    isLoggin
      ? (<LoginRoutes />)
      : (
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/account/registration' element={<SignUp />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>)
  )
}
export default RoutesIndex
