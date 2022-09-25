import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export const FormLayout = ({ title, children }) => {
  return (
    <Grid
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: 'primary.main',
          padding: 4,
          borderRadius: 2
        }} >

        <Grid
            item
            xs={3}
              sx={{
                backgroundColor: 'secondary.main',
                padding: 3,
                borderRadius: 2
              }} >

            <Typography
                variant="h5"
                sx={{ mb: 1, textAlign: 'center' }} >
                { title }
            </Typography>

            { children }

        </Grid>

    </Grid>
  )
}

FormLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}
