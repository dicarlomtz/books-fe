import MenuItem from '@mui/material/MenuItem'
import PropTypes from 'prop-types'

import { MenuLink } from './MenuLink'

export const MenuLinks = ({ handleCloseMenu, links }) => {
  return (
    <>
      {links.map(link => (
        <MenuItem key={link.description} onClick={ handleCloseMenu }>
            <MenuLink link={ link } />
        </MenuItem>
      ))}
    </>
  )
}

MenuLinks.propTypes = {
  handleCloseMenu: PropTypes.func.isRequired,
  links: PropTypes.array.isRequired
}
