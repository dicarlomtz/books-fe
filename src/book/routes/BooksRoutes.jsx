import { Navigate, Route, Routes } from 'react-router-dom'
import { BookPage } from '../pages/BookPage'

import { BooksPage } from '../pages/BooksPage'
import { CreateBookPage } from '../pages/CreateBookPage'
import { UpdateBookPage } from '../pages/UpdateBookPage'

export const BooksRoutes = () => {
  return (
      <Routes>
      <Route path='/' element={ <BooksPage /> } />
      <Route path='/books/create' element={<CreateBookPage />} />
      <Route path='/books/view/:bookId' element={<BookPage />} />
      <Route path='/books/update/:bookId' element={<UpdateBookPage />} />

      <Route path='/*' element={ <Navigate to='/'/>} />
    </Routes>
  )
}
