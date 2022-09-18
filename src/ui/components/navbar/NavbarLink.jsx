import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { linkStyles } from '../../styles'

export const NavbarLink = ({ link }) => {
  const { to, description } = link
  return (
    <Link underline='hover' variant='button' component={ RouterLink } sx={ linkStyles } to={ to }>
        <Typography textAlign="center">{description}</Typography>
    </Link>
  )
}

NavbarLink.propTypes = {
  link: PropTypes.object.isRequired
}
