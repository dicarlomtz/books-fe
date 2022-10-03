import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { AppRouter } from './router/AppRouter'
import { initialAuthentication } from './store/auth/thunks'
import { AppTheme } from './theme/AppTheme'

export const BooksApp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialAuthentication())
  }, [])

  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
