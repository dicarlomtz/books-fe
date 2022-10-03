import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuBookIcon from '@mui/icons-material/MenuBook'

import {
  brandNameStylesSm,
  brandStylesSm, menuStyles, toggleBox
} from '../../../styles'
import { useNavbar } from '../../../../hooks'
import { MenuLinks } from '../menu/MenuLinks'
import { navigation } from '../links'

export const ToggleMenu = () => {
  const { handleOpenNavMenu, handleCloseNavMenu, anchorElNav } = useNavbar()
  return (
      <>
        <Box sx={ toggleBox }>
            <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit' >
                <MenuIcon />
            </IconButton>

            <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={ menuStyles } >
                  <MenuLinks handleCloseMenu={handleCloseNavMenu} links={ navigation } />
            </Menu>
        </Box>

        <MenuBookIcon sx={ brandStylesSm } />
        <Typography
            variant='h5'
            noWrap
            sx={ brandNameStylesSm } >
            Boogle
        </Typography>
    </>
  )
}
