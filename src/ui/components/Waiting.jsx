import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

export const Waiting = () => {
  return (
   <Box sx={{ width: '100%' }}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Box>
  )
}
