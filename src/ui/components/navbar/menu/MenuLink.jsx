import { Link as RouterLink } from 'react-router-dom'

import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../../../store/auth/thunks'

export const MenuLink = ({ link }) => {
  const { to, description } = link
  const dispatch = useDispatch()
  return (
    <Link underline='none' variant='button' onClick={description === 'Logout' ? () => dispatch(startLogout()) : null} component={RouterLink} color='inherit' to={to}>
      <Typography sx={{ fontWeight: 500 }} align='center'>{description}</Typography>
    </Link>
  )
}
MenuLink.propTypes = {
  link: PropTypes.object.isRequired
}
