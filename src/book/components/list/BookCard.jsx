import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import PropTypes from 'prop-types'

const cardStyles = { maxWidth: 345, height: 'auto', m: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }

export const BookCard = ({ title, authors, publishedYear, description, imageURL }) => {
  return (
    <Card sx={cardStyles}>
      <CardHeader
        title={title}
        sx={{ height: 150, textTransform: 'capitalize' }}
        subheader={authors[0] + ' - ' + publishedYear} />

      <Box>
        <CardMedia
          component='img'
          height='194'
          width='320'
          image={imageURL}
          alt={title} />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {description.substring(0, 100) + '...'}
          </Typography>
        </CardContent>
      </Box>

      <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Tooltip title='Save'>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Share'>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Button size='small'>Learn More</Button>
      </CardActions>

    </Card>
  )
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  publishedYear: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired
}
