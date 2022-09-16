import axios from 'axios'

export const getAllBooks = async pageNumber => {
  try {
    const { data } = await axios.get(`http://localhost/books?page=${pageNumber}`)
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
