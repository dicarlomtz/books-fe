import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import PropTypes from 'prop-types'

import { customTheme } from './theme'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ customTheme }>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}

AppTheme.propTypes = {
  children: PropTypes.element
}
