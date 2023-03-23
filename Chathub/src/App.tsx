import Homepage from './pages/Homepage/Homepage'
import Authentication from './pages/Authentication/Authentication'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/PageLayout/RootLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/auth',
        element: <Authentication />
      }
    ]
  }
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
