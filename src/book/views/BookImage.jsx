import Image from 'mui-image'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

export const BookImage = ({ coverImage }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image src={coverImage} width={300} height={500} alt='Book Cover Image'/>
    </Box>
  )
}

BookImage.defaultProps = {
  coverImage: ''
}

BookImage.propTypes = {
  coverImage: PropTypes.string.isRequired
}
