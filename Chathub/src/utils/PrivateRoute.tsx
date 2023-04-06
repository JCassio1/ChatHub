import { Route, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/AuthContext'

function PrivateRoute({ element }) {
  const { currentUser } = useAuth()

  return currentUser ? element : <Navigate to='/auth?mode=login' />
}

export default PrivateRoute
