import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../auth/auth'

import { AuthRoutes } from './auth.routes'
import { AdminRoutes } from './admin.routes'
import { UsersRoutes } from './users.routes'

export function Routes() {
  const { user } = useAuth()
  const { admin } = useAuth()

  return (
    <BrowserRouter>
      {admin ? <AdminRoutes /> : user ? <UsersRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
