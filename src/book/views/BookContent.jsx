import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { DeleteBookButton } from '../components'
import { Link as RouterLink } from 'react-router-dom'

const titleStyles = {
  fontWeight: 'regular',
  fontSize: 'h4.fontSize',
  textTransform: 'capitalize',
  color: 'primary.main'
}

const bookContainerStyles = {
  m: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%'
}

const actionsStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  mt: 2
}

export const BookContent = ({ book }) => {
  return (
    <Box sx={bookContainerStyles}>
      <Box>
        <Typography variant='body1' align='center' sx={titleStyles}>{ book.title } - {book.published_year}</Typography>
        <Typography mb={2} variant='body1' sx={{ fontSize: 15, fontStyle: 'italic', color: 'grey.600' }}>{ book.description }</Typography>
        <Box sx={{ display: 'flex' }}>
          Authors:
          <Typography sx={{ fontStyle: 'italic' }}>{ book.authors.join(', ')} </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          Co-authors:
          <Typography sx={{ fontStyle: 'italic' }}>{ book.co_authors?.join(', ')} </Typography>
        </Box>
        <Alert sx={{ mt: 2 }} severity={book.available ? 'success' : 'warning'}>This book is {book.available ? 'available' : 'unavailable'}</Alert>
      </Box>
      <Box sx={actionsStyles}>
        <Button component={RouterLink} to={`/books/update/${book.id}`} variant='contained' color='success' endIcon={ <EditIcon /> }>Edit</Button>
        <DeleteBookButton bookId={book.id}/>
        <Button href={book.url} target='_blank' variant='contained' endIcon={ <ShoppingCartIcon />} >Get this book</Button>
      </Box>
    </Box>
  )
}

BookContent.propTypes = {
  book: PropTypes.object.isRequired
}
