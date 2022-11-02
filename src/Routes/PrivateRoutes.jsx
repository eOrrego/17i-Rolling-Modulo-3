import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
  const user = localStorage.getItem('userLogged')
  const roles = localStorage.getItem('roles')
  return (
    user && roles.includes('Admin') ? children : <Navigate to='/' />
  )
}

export default PrivateRoutes