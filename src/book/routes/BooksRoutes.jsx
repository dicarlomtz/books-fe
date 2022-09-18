import { Navigate, Route, Routes } from 'react-router-dom'

import { BooksPage } from '../pages/BooksPage'

export const BooksRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<BooksPage />} />

        <Route path='/*' element={ <Navigate to='/'/>} />
    </Routes>
  )
}
