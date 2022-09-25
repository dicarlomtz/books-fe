import { Navigate, Route, Routes } from 'react-router-dom'

import { BooksPage } from '../pages/BooksPage'
import { CreateBookPage } from '../pages/CreateBookPage'

export const BooksRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={ <BooksPage /> } />
        <Route path='/books/create' element={<CreateBookPage />} />

        <Route path='/*' element={ <Navigate to='/'/>} />
    </Routes>
  )
}
