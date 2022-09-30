import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'

import { BooksRoutes } from '../book/routes/BooksRoutes'
import { authenticationStatuses } from '../store/auth/authSlice'
import { CheckingAuth } from '../ui/views/CheckingAuth'

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)

  if (status === authenticationStatuses.checking) return <CheckingAuth />

  return (
    <Routes>

    {
      (status === authenticationStatuses.authenticated)
        ? <Route path='/*' element={ <BooksRoutes />} />
        : <Route path='/auth/*' element={<AuthRoutes />} />
    }

    <Route path='/*' element={ <Navigate to='/auth/login'/>} />
    </Routes>
  )
}
