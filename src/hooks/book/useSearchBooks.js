import { useEffect, useState } from 'react'
import { getAllBooks, getAllBooksBySearch } from '../../api'

export const searchParameters = {
  all: 'all',
  title: 'title',
  authors: 'authors',
  coAuthors: 'co_authors',
  publishedYear: 'published_year'
}

export const useSearchBooks = ({
  page = 1, parameter = searchParameters.all,
  searchValue = '', available = true
}) => {
  const [currentPage, setCurrentPage] = useState(page)

  const [searchParameter, setSearchParameter] = useState(parameter)
  const [searchParameterValue, setSearchParameterValue] = useState(searchValue)

  const [searchAvailableModifier, setSearchAvailableModifier] = useState(available)

  const [booksInfo, setBooksInfo] = useState({
    books: [],
    maxPages: 0,
    errorMessage: null
  })

  useEffect(() => {
    if (searchParameter === searchParameters.all) {
      getAllBooks(currentPage).then(res => setBooksInfo(res))
    } else {
      if (searchParameterValue !== '') {
        getAllBooksBySearch(currentPage, searchParameter, searchParameterValue, searchAvailableModifier)
          .then(res => setBooksInfo(res))
      }
    }
  }, [currentPage, searchParameter, searchParameterValue, searchAvailableModifier])

  const nextPage = () => {
    if (currentPage < booksInfo.maxPages) setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const modifyAvailableParameter = () => {
    setSearchAvailableModifier(!searchAvailableModifier)
  }

  return {
    books: booksInfo.books,
    maxPages: booksInfo.maxPages,
    errorMessage: booksInfo.errorMessage,

    nextPage,
    previousPage,

    searchParameter,
    searchParameterValue,
    searchAvailableModifier,

    setSearchParameter,
    setSearchParameterValue,
    modifyAvailableParameter
  }
}
