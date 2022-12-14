import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import MenuBookIcon from '@mui/icons-material/MenuBook'

import {
  brandIconStyles, brandNameStyles
} from '../styles'
import { ToggleMenu, UserMenu, NavbarLinks } from '../components'

export const Navbar = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>

          <MenuBookIcon sx={brandIconStyles} />
          <Typography
            variant='h6'
            noWrap
            sx={ brandNameStyles } >
            Boogle
          </Typography>

          <ToggleMenu />
          <NavbarLinks />
          <UserMenu />

        </Toolbar>
      </Container>
    </AppBar>
  )
}
