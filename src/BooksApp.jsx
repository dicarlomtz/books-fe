import { useEffect } from 'react'

import { initialAthentication } from './api/auth/providers'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

export const BooksApp = () => {
  useEffect(() => {
    initialAthentication()
  }, [])

  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
