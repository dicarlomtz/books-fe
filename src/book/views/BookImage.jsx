import Image from 'mui-image'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

const coverImageContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 1
}

export const BookImage = ({ coverImage }) => {
  const coverImageURL = coverImage || ''
  return (
    <Box sx={coverImageContainerStyles}>
      <Image src={ coverImageURL } width={300} height={500} alt='Book Cover Image' shift='left' duration={500} />
    </Box>
  )
}

BookImage.propTypes = {
  coverImage: PropTypes.string
}
