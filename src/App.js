import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { ClientProfileView } from './client/profile'
import { CreateClientPage } from './admin/createClient'
import { Login } from './auth/login'
import { getAuth } from './api'
import { ClientsPage } from './client/clients'

const isAuth = getAuth()

const router = createBrowserRouter([
  {
    path: '/',
    element: isAuth ? <ClientsPage /> : <Login />,
  },
  {
    path: '/client/:id',
    element: isAuth ? <ClientProfileView /> : <Login />,
  },
  {
    path: '/create_client',
    element: isAuth ? <CreateClientPage /> : <Login />,
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
