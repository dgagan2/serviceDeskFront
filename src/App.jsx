import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './context/AuthContext'
import RoutesIndex from './routes/IndexRoutes'
import { ToastContainer } from 'react-toastify'

function App () {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <RoutesIndex />
        </AuthProvider>

      </BrowserRouter>
      <ToastContainer
        position='top-center'
        autoClose={1000}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme='colored'
        role='alert'
      />
    </>

  )
}

export default App
