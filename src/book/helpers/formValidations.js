import * as Yup from 'yup'

export const validations = Yup.object({
  title: Yup.string()
    .max(100, 'Must be 100 characters or less')
    .required('Title is required'),
  description: Yup.string()
    .required('Description is required'),
  url: Yup.string().url('Invalid URL'),
  published_year: Yup.number('Value must be numeric')
    .min(1000, 'Invalid year format')
    .max(new Date().getFullYear(), 'Year cannot be greater than the actual')
    .required('Published year is required'),
  available: Yup.boolean(),
  authors: Yup.array()
    .of(Yup.string())
    .length(1, 'You must add 1 author at least'),
  co_authors: Yup.array()
    .of(Yup.string()),
  cover_image: Yup.string().url('Invalid URL')
})
