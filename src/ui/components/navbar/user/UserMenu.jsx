import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'

import { useNavbar } from '../../../../hooks'
import { MenuLinks } from '../menu/MenuLinks'
import { user } from '../links'

export const UserMenu = () => {
  const { handleOpenUserMenu, anchorElUser, handleCloseUserMenu } = useNavbar()
  return (
    <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User"/>
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu} >
              <MenuLinks handleCloseMenu={handleCloseUserMenu} links={ user } />
            </Menu>
          </Box>
  )
}
