import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

const reasonTextStyles = {
  fontWeight: 'regular',
  fontSize: 'h4.fontSize',
  textTransform: 'capitalize',
  fonStyle: 'italic',
  mt: 2
}

export const NothingToShow = ({ reason }) => {
  return (
    <Typography variant='h1' align='center' sx={reasonTextStyles}>
          No information retrieved due: { reason }
    </Typography>
  )
}

NothingToShow.defaultProps = {
  reason: 'No reason provided'
}

NothingToShow.propTypes = {
  reason: PropTypes.string
}
