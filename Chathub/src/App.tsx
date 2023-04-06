import { useState } from 'react'
import Homepage from './pages/Homepage/Homepage'
import Authentication from './pages/Authentication/Authentication'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/PageLayout/RootLayout'
import { AuthProvider } from './hooks/AuthContext'
import ChatRoom from './pages/Chat/ChatRoom'
import PrivateRoute from './utils/PrivateRoute'

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
        path: '/view/messages',
        element: <PrivateRoute element={<ChatRoom />} />
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
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  )
}

export default App
