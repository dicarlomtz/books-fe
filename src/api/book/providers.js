import { getAvailableParameter } from '../../hooks'
import { instance } from '../instance'

export const getAllBooks = async (pageNumber) => {
  try {
    const { data } = await instance.get(`books?page=${pageNumber}`)
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

    const fullQuery = `books/search/parameter?page=${pageNumber}${searchValueQuery}${availableValueQuery}`

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
    const { data } = await instance.post('books', formBookData)
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
    const { data } = await instance.get(`books/${bookId}`)
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
    const { data } = await instance.delete(`books/${bookId}`)
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
    const { data } = await instance.put(`books/${bookId}`, formBookData)
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
