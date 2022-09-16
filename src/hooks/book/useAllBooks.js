import { useEffect, useState } from 'react'
import { getAllBooks } from '../../api'

export const useAllBooks = (page = 1) => {
  const [currentPage, setCurrentPage] = useState(page)

  const [booksInfo, setBooksInfo] = useState({
    books: [],
    maxPages: 0,
    errorMessage: null
  })

  useEffect(() => {
    getAllBooks(currentPage).then(res => setBooksInfo(res))
  }, [currentPage])

  const nextPage = () => {
    if (currentPage < booksInfo.maxPages) setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return {
    books: booksInfo.books,
    maxPages: booksInfo.maxPages,
    errorMessage: booksInfo.errorMessage,
    nextPage,
    previousPage
  }
}
