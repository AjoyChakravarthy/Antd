import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Layout from './components/Layout'


function App() {
  const router = createBrowserRouter([
    {
      path: '/Antd/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
      ],
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
