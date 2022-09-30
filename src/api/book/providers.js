import axios from 'axios'
import { getAvailableParameter } from '../../hooks'

const BASE_URL = 'http://localhost/books'
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

export const getAllBooks = async (pageNumber) => {
  try {
    const { data } = await instance.get(`?page=${pageNumber}`)
    const { data: books, last_page: maxPages } = data
    return {
      books,
      maxPages,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const errorMessage = response.data ? response.data.message : error.message

    return {
      books: [],
      maxPages: 0,
      errorMessage
    }
  }
}

export const getAllBooksBySearch = async (pageNumber, searchValue, searchParameter) => {
  try {
    const searchValueQuery = searchValue.length ? `&search_value=${searchValue}` : ''
    const availableValue = getAvailableParameter(searchParameter)
    const availableValueQuery = availableValue !== null ? `&available=${availableValue}` : ''

    const fullQuery = `/search/parameter?page=${pageNumber}${searchValueQuery}${availableValueQuery}`

    const { data } = await instance.get(fullQuery)
    const { data: books, last_page: maxPages } = data

    return {
      books,
      maxPages,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const errorMessage = response.data ? response.data.message : error.message

    return {
      books: [],
      maxPages: 0,
      errorMessage
    }
  }
}

export const saveBook = async (formBookData) => {
  try {
    const { data } = await instance.post('', formBookData)
    const { book } = data

    return {
      book,
      errorMessage: null,
      errors: null
    }
  } catch (error) {
    const { response } = error
    const errorMessage = response.data ? response.data.message : error.message
    const errors = response.data ? response.data.errors : null

    return {
      book: null,
      errorMessage,
      errors
    }
  }
}

export const getBook = async (bookId) => {
  try {
    const { data } = await instance.get(`/${bookId}`)
    const { book } = data

    return {
      book,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const errorMessage = response.data ? response.data.message : error.message

    return {
      book: null,
      errorMessage
    }
  }
}

export const deleteBook = async (bookId) => {
  try {
    const { data } = await instance.delete(`/${bookId}`)
    const { book } = data

    return {
      book,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const errorMessage = response.data ? response.data.message : error.message

    return {
      book: null,
      errorMessage
    }
  }
}

export const updateBook = async (bookId, formBookData) => {
  try {
    const { data } = await instance.put(`/${bookId}`, formBookData)
    const { book } = data

    return {
      book,
      errorMessage: null,
      errors: null
    }
  } catch (error) {
    const { response } = error
    const errorMessage = response.data ? response.data.message : error.message
    const errors = response.data ? response.data.errors : null

    return {
      book: null,
      errorMessage,
      errors
    }
  }
}
