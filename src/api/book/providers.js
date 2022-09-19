import axios from 'axios'
import { getAvailableParameter } from '../../hooks'

const BASE_URL = 'http://localhost/books'

export const getAllBooks = async (pageNumber) => {
  try {
    const { data } = await axios.get(`${BASE_URL}?page=${pageNumber}`)
    const { data: books, last_page: maxPages } = data
    return {
      books,
      maxPages,
      errorMessage: null
    }
  } catch (error) {
    return {
      books: [],
      maxPages: 0,
      errorMessage: error.message
    }
  }
}

export const getAllBooksBySearch = async (pageNumber, searchValue, searchParameter) => {
  try {
    const searchValueQuery = searchValue.length ? `&search_value=${searchValue}` : ''
    const availableValue = getAvailableParameter(searchParameter)
    const availableValueQuery = availableValue !== null ? `&available=${availableValue}` : ''

    const fullQuery = `${BASE_URL}/search/parameter?page=${pageNumber}${searchValueQuery}${availableValueQuery}`

    const { data } = await axios.get(fullQuery)
    const { data: books, last_page: maxPages } = data

    return {
      books,
      maxPages,
      errorMessage: null
    }
  } catch (error) {
    return {
      books: [],
      maxPages: 0,
      errorMessage: error.message
    }
  }
}
