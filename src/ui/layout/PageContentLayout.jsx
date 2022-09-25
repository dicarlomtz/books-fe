import Container from '@mui/material/Container'
import PropTypes from 'prop-types'
import { Navbar } from '../components'

export const PageContentLayout = ({ children }) => {
  return (
      <>
        <Navbar />
          <Container maxWidth='lg' sx={{ pt: 5 }}>
            { children }
        </Container>
    </>
  )
}

PageContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
}
