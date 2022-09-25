import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import MenuBookIcon from '@mui/icons-material/MenuBook'

import {
  brandIconStyles, brandNameStyles
} from '../styles'
import { ToggleMenu } from '../components/navbar/toggle/ToggleMenu'
import { UserMenu } from '../components/navbar/user/UserMenu'
import { NavbarLinks } from '../components/navbar/NavbarLinks'

export const Navbar = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>

          <MenuBookIcon sx={brandIconStyles} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
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
