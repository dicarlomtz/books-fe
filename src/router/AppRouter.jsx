import { Route, Routes } from 'react-router-dom'

import { BooksRoutes } from '../book/routes/BooksRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={ <BooksRoutes />} />
    </Routes>
  )
}
