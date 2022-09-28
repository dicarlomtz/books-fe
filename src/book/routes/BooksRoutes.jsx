import { Navigate, Route, Routes } from 'react-router-dom'
import { BookPage } from '../pages/BookPage'

import { BooksPage } from '../pages/BooksPage'
import { CreateBookPage } from '../pages/CreateBookPage'

export const BooksRoutes = () => {
  return (
      <Routes>
      <Route path='/' element={ <BooksPage /> } />
      <Route path='/books/create' element={<CreateBookPage />} />
      <Route path='/books/:bookId' element={<BookPage />} />

      <Route path='/*' element={ <Navigate to='/'/>} />
    </Routes>
  )
}
