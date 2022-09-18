import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const MenuLink = ({ link }) => {
  const { to, description } = link
  return (
    <Link underline='none' variant='button' component={ RouterLink } color='inherit' to={to}>
        {description}
    </Link>
  )
}

MenuLink.propTypes = {
  link: PropTypes.object.isRequired
}
