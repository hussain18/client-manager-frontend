import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { ClientsView } from './client/clients'
import { ClientProfileView } from './client/profile'
import { CreateClientView } from './admin/createClient'
import { Login } from './auth/login'
import { getAuth } from './api'

const isAuth = getAuth()

const router = createBrowserRouter([
  {
    path: '/',
    element: isAuth ? <ClientsView /> : <Login />,
  },
  {
    path: '/client/:id',
    element: isAuth ? <ClientProfileView /> : <Login />,
  },
  {
    path: '/create_client',
    element: isAuth ? <CreateClientView /> : <Login />,
  },
  {
    path: '/login',
    element: !isAuth ? <Login /> : <ClientProfileView />,
  },
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
