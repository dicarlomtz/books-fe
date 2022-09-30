import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import { saveBook } from '../../api'
import { FormLayout, PageContentLayout } from '../../ui'
import { BookForm } from '../views/BookForm'
import { validations } from '../helpers/formValidations'

export const CreateBookPage = () => {
  const navigate = useNavigate()

  const createdBookAlert = (title) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${title} Created`,
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/')
  }

  const bookForm = useFormik({
    initialValues: {
      title: '',
      description: '',
      url: '',
      published_year: '',
      available: false,
      authors: [],
      co_authors: [],
      cover_image: '',
      errorMessage: null
    },
    validationSchema: validations,
    onSubmit: (values) => {
      saveBook(values).then(res => {
        const { book, errorMessage, errors } = res

        if (errors) bookForm.setStatus(errors)
        errorMessage
          ? bookForm.setFieldValue('errorMessage', errorMessage)
          : createdBookAlert(book.title)

        bookForm.setSubmitting(false)
      })
    }
  })

  return (
    <PageContentLayout>
      <FormLayout title='Save Your Book'>
        <BookForm bookForm={bookForm}/>
      </FormLayout>
    </PageContentLayout>
  )
}
