import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

export const BooksApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
