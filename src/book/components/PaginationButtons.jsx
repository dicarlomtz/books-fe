import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

export const PaginationButtons = ({ currentPage, setCurrentPage, maxPages }) => {
  const handleChange = (event, value) => {
    setCurrentPage(value)
  }
  return (
    <Box spacing={2} display='flex' justifyContent='center' mt={3}>
      <Pagination color='primary' count={maxPages} page={currentPage} onChange={handleChange} />
    </Box>
  )
}

PaginationButtons.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  maxPages: PropTypes.number.isRequired
}
