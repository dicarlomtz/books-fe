import { useEffect, useState } from 'react'

import { getAllBooks, getAllBooksBySearch } from '../../api'

export const searchParameters = {
  all: { key: 'all', display: 'all' },
  available: { key: 'available', display: 'available' },
  notAvailable: { key: 'notAvailable', display: 'not available' }
}

const initialParameters = {
  page: 1,
  parameter: searchParameters.all.key,
  searchValue: ''
}

export const useSearchBooks = (parameters = initialParameters) => {
  const { page, parameter, searchValue } = parameters

  const [currentPage, setCurrentPage] = useState(page)

  const [searchParameter, setSearchParameter] = useState(parameter)
  const [searchParameterValue, setSearchParameterValue] = useState(searchValue)

  const [booksInfo, setBooksInfo] = useState({
    books: [],
    maxPages: 0,
    errorMessage: null
  })

  useEffect(() => {
    if (searchParameter === searchParameters.all.key && !searchParameterValue.length) {
      getAllBooks(currentPage).then(res => setBooksInfo(res))
    } else {
      getAllBooksBySearch(currentPage, searchParameterValue, searchParameter)
        .then(res => setBooksInfo(res))
    }
  }, [currentPage, searchParameter, searchParameterValue])

  return {
    books: booksInfo.books,
    maxPages: booksInfo.maxPages,
    errorMessage: booksInfo.errorMessage,

    currentPage,
    setCurrentPage,

    searchParameter,
    searchParameterValue,

    setSearchParameter,
    setSearchParameterValue
  }
}

export const getAvailableParameter = (parameter) => {
  if (parameter === searchParameters.available.key) return 1
  if (parameter === searchParameters.notAvailable.key) return 0
  return null
}
