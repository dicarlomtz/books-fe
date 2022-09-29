import Container from '@mui/material/Container'
import PropTypes from 'prop-types'

export const BookContentLayout = ({ children }) => {
  return (
    <Container sx={{ display: { md: 'flex' } }}>
        {children}
    </Container>
  )
}

BookContentLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}
