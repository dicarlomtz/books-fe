import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'

export const BookContent = ({ book }) => {
  return (
    <Box>
      <Typography variant='h3' align='center' sx={{ fontWeight: 'regular', fontSize: 'h4.fontSize', textTransform: 'capitalize', color: 'primary.main' }}>{ book.title }</Typography>
    </Box>
  )
}

BookContent.propTypes = {
  book: PropTypes.object.isRequired
}
