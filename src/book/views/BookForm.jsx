import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validations = Yup.object({
  title: Yup.string()
    .max(100, 'Must be 100 characters or less')
    .required(),
  description: Yup.string()
    .required(),
  url: Yup.string().url('Invalid URL'),
  publishedYear: Yup.number()
    .min(1000, 'Invalid year format')
    .max(new Date().getFullYear(), 'Year cannot be greater than the actual')
    .required(),
  available: Yup.string()
    .matches(/(true|false)/),
  authors: Yup.array()
    .of(Yup.string()),
  coAuthors: Yup.array()
    .of(Yup.string()),
  coverImage: Yup.string().url('Invalid URL')
})

export const BookForm = () => {
  const bookForm = useFormik({
    initialValues: {
      title: '',
      description: '',
      url: '',
      publishedYear: '',
      available: false,
      authors: [],
      coAuthors: [],
      coverImage: ''
    },
    validationSchema: validations,
    onSubmit: values => {
      console.log(values)
    }
  })
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
              error={bookForm.touched.title && bookForm.errors.title}
              helperText={bookForm.errors.title}
              onChange={bookForm.handleChange}
              value={ bookForm.values.title} />
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
              error={bookForm.touched.description && bookForm.errors.description}
              helperText={bookForm.errors.description}
              onChange={bookForm.handleChange}
              value={ bookForm.values.description} />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="URL"
              placeholder="https://www.amazon.com/ROWLING-J-K/dp/1408845644/"
              fullWidth
              name='url'
              id='url'
              error={bookForm.touched.url && bookForm.errors.url}
              helperText={bookForm.errors.url}
              onChange={bookForm.handleChange}
              value={ bookForm.values.url} />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Published Year"
              placeholder="2015"
              fullWidth
              name='published_year'
              id='published_year'
              error={bookForm.touched.publishedYear && bookForm.errors.publishedYear}
              helperText={bookForm.errors.publishedYear}
              onChange={bookForm.handleChange}
              value={ bookForm.values.publishedYear} />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <FormControlLabel
              label="Available"
              control={<Switch color='primary'/>}
              name='available'
              id='available'
              labelPlacement='start'
              onChange={bookForm.handleChange}
              value={ bookForm.values.available} />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="Cover Image"
                fullWidth
                name='cover_image'
                id='cover_image'
                error={bookForm.touched.coverImage && bookForm.errors.coverImage}
                helperText={bookForm.errors.coverImage}
                onChange={bookForm.handleChange}
                value={ bookForm.values.coverImage} />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                {/* <Grid item xs={ 12 } display={errorMessage ? '' : 'none'}>
                    <Alert severity='error' >{ errorMessage }</Alert>
                </Grid> */}
                <Grid item xs={ 12 } sm={ 12 }>
                    <Button type="submit" variant="contained" fullWidth>SAVE BOOK</Button>
                </Grid>
            </Grid>
        </Grid>
    </form>
  )
}
