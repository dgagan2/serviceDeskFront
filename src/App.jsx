import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import RoutesIndex from './routes/IndexRoutes'

function App () {
  return (

    <BrowserRouter>
      <AuthProvider>
        <RoutesIndex />
      </AuthProvider>

    </BrowserRouter>
  )
}

export default App
