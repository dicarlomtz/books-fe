import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

import { BookCard } from '../components'

const booksListWrapperStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  p: 1,
  maxWidth: '100%',
  justifyContent: 'center'
}

export const BookList = ({ books }) => {
  return (
    <Box sx={booksListWrapperStyles}>
      {books.map(book => (
        <BookCard key={book.id}
          bookId={book.id}
          imageURL={book.cover_image}
          title={book.title}
          authors={book.authors}
          description={book.description}
          publishedYear={book.published_year} />
      ))}
    </Box>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
}
