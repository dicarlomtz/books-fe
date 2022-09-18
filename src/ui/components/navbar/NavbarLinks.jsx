import Box from '@mui/material/Box'

import { linksBoxStyles } from '../../styles'
import { navigation } from './links'
import { NavbarLink } from './NavbarLink'

export const NavbarLinks = () => {
  return (
    <Box sx={ linksBoxStyles }>
        {navigation.map((page) => (
            <NavbarLink key={ page.description } link={page} />
        ))}
    </Box>
  )
}
