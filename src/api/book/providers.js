import axios from 'axios'

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

export const getAllBooksBySearch = async (pageNumber, searchParameter, searchParameterValue, searchAvailableModifier) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search/parameter`, {
      params: {
        page: pageNumber,
        search_parameter: searchParameter,
        parameter_value: searchParameterValue,
        available: searchAvailableModifier
      }
    })
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
