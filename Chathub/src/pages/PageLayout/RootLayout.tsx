import Navbar from '../../components/layout/Navbar'
import AuthenticatedNavbar from '../../components/layout/AuthenticatedNavbar'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/AuthContext'

const RootLayout = () => {
  const { currentUser } = useAuth()
  return (
    <>
      {currentUser ? <AuthenticatedNavbar /> : <Navbar />}
      <Outlet />
    </>
  )
}

export default RootLayout
