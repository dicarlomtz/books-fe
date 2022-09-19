// import { AppRouter } from './router/AppRouter'

import { BooksPage } from './book/pages/BooksPage'
import { AppTheme } from './theme/AppTheme'

export const BooksApp = () => {
  return (
    <AppTheme>
      {/* <AppRouter /> */}
    <BooksPage />
    </AppTheme>
  )
}
