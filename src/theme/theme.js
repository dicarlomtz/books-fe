import { createTheme } from '@mui/material/styles'

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#011627'
    },
    secondary: {
      main: '#FDFFFC'
    },
    info: {
      main: '#FF9F1C'
    },
    error: {
      main: '#E71D36'
    },
    success: {
      main: '#2EC4B6'
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'muibutton' }
        }
      ]
    }
  }
})
