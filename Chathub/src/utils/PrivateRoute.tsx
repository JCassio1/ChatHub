import { Navigate, NavigateProps } from 'react-router-dom'
import { useAuth } from '../hooks/AuthContext'
import { PrivateRouteProps } from '../Model/data-structures'

function PrivateRoute({ element }: PrivateRouteProps): JSX.Element | null {
  const { currentUser } = useAuth()

  return currentUser ? element : <Navigate to='/auth?mode=login' />
}

export default PrivateRoute
