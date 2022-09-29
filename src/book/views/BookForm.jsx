import { useState } from 'react'
import PropTypes from 'prop-types'

import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'

export const BookForm = ({ bookForm }) => {
  const { touched, errors, values, handleChange, handleReset } = bookForm

  const [author, setAuthor] = useState('')
  const [coAuthor, setCoAuthor] = useState('')

  const addCreators = (creators, type, newCreator, setCurrentCreator) => {
    if (newCreator.length) {
      bookForm.setFieldValue(type, [...creators, newCreator])
      setCurrentCreator('')
    }
  }

  const removeCreators = (type, creators, creatorToRemove) => {
    const newCreators = creators.filter(creator => creator !== creatorToRemove)
    bookForm.setFieldValue(type, newCreators)
  }

  return (
      <form onSubmit={ bookForm.handleSubmit }>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Title"
              placeholder="Harry Potter and the Philosopher's Stone"
              fullWidth
              name='title'
              id='title'
              error={(touched.title && Boolean(errors.title))}
              helperText={ (touched.title && errors.title)}
              onChange={ handleChange }
              value={ values.title} />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              multiline
              minRows={ 4 }
              label="Description"
              placeholder='Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.'
              fullWidth
              name='description'
              id='description'
              error={(touched.description && Boolean(errors.description)) }
              helperText={(touched.description && errors.description) }
              onChange={ handleChange }
              value={ values.description} />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="URL"
              placeholder="https://www.amazon.com/ROWLING-J-K/dp/1408845644/"
              fullWidth
              name='url'
              id='url'
              error={ touched.url && errors.url}
              helperText={ touched.url && errors.url}
              onChange={ handleChange}
              value={ values.url} />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Published Year"
              placeholder="2015"
              fullWidth
              name='published_year'
              id='published_year'
              type='number'
              error={ touched.published_year && Boolean(errors.published_year)}
              helperText={ touched.published_year && errors.published_year}
              onChange={ handleChange }
              value={ values.published_year} />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <FormControlLabel
              label="Available"
              labelPlacement='start'
              control={<Checkbox id='available'
                name='available' checked={ values.available }
                onChange={ handleChange} value={ values.available }
                color='primary' />} />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Cover Image URL"
              fullWidth
              name='cover_image'
              id='cover_image'
              error={ touched.cover_image && Boolean(errors.cover_image)}
              helperText={ touched.cover_image && errors.cover_image}
              onChange={ handleChange}
              value={ values.cover_image} />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Box sx={{ display: 'inline-flex', flexWrap: 'wrap' }}>
              { values.authors.map(item => (
                <Chip key={ item } size="small" onDelete={() => removeCreators('authors', values.authors, item)} label={ item }/>))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
              <TextField label='Authors (Press Add)'
                fullWidth
                name='authors'
                id='authors'
                sx={{ mt: 2, mr: 1 }}
                onChange={e => setAuthor(e.target.value)}
                value={author}
                error={ touched.authors && Boolean(errors.authors)}
                helperText={ touched.authors && errors.authors} />
              <Button variant='contained' onClick={() => addCreators(values.authors, 'authors', author, setAuthor)}>Add</Button>
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Box sx={{ display: 'inline-flex', flexWrap: 'wrap' }}>
              { values.co_authors.map(item => (
                <Chip key={ item } size="small" onDelete={() => removeCreators('co_authors', values.co_authors, item)} label={ item }/>))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
              <TextField label='Co-Authors (Press Add)'
                fullWidth
                name='co-authors'
                id='co-authors'
                sx={{ mt: 2, mr: 1 }}
                onChange={e => setCoAuthor(e.target.value)}
                value={coAuthor}
                error={ touched.co_authors && Boolean(errors.co_authors)}
                helperText={ touched.co_authors && errors.co_authors} />
                <Button variant='contained' onClick={() => addCreators(values.co_authors, 'co_authors', coAuthor, setCoAuthor)}>Add</Button>
            </Box>
          </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } display={ values.errorMessage ? '' : 'none'} >
                <Alert severity='error' >Unable to save the book due: { values.errorMessage }</Alert>
              </Grid>
              <Grid item xs={ 12 } sm={ 12 }>
                <Box sx={{ display: 'flex' }}>
                  <Button onClick={handleReset} variant="contained" fullWidth sx={{ mr: 1 }}>RESET FORM</Button>
                  <Button type="submit" variant="contained" fullWidth sx={{ ml: 1 }}>SAVE BOOK</Button>
                </Box>
              </Grid>
            </Grid>
        </Grid>
    </form>
  )
}

BookForm.propTypes = {
  bookForm: PropTypes.object.isRequired
}
