import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const MenuLink = ({ link }) => {
  const { to, description } = link
  return (
    <Link underline='none' variant='button' component={RouterLink} color='inherit' to={to}>
      <Typography sx={{ fontWeight: 500 }} align='center'>{description}</Typography>
    </Link>
  )
}
MenuLink.propTypes = {
  link: PropTypes.object.isRequired
}
