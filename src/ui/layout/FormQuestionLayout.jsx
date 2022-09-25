import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

export const FormQuestionLayout = ({ children }) => {
  return (
     <Grid item xs={ 12 } sx={{ mt: 2 }}>
        { children }
    </Grid>
  )
}

FormQuestionLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
}
