import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { linkStyles } from '../../styles'

export const NavbarLink = ({ link }) => {
  const { to, description } = link
  return (
    <Button component={ RouterLink } sx={ linkStyles } to={ to }>
        {description}
    </Button>
  )
}

NavbarLink.propTypes = {
  link: PropTypes.object.isRequired
}
