import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import { updateBook, getBook } from '../../api'
import { FormLayout, PageContentLayout, NothingToShow, Waiting } from '../../ui'
import { BookForm } from '../views/BookForm'
import { validations } from '../helpers/formValidations'

export const UpdateBookPage = () => {
  const { bookId } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const bookForm = useFormik({
    initialValues: {
      title: book ? book.title : '',
      description: book ? book.description : '',
      url: book ? book.url : '',
      published_year: book ? book.published_year : '',
      available: book ? Boolean(book.available) : false,
      authors: book ? book.authors : [],
      co_authors: book ? book.co_authors : [],
      cover_image: book ? book.cover_image : '',
      errorMessage: null
    },
    enableReinitialize: true,
    validationSchema: validations,
    onSubmit: (values) => {
      updateBook(book.id, values).then(res => {
        const { book, errorMessage, errors } = res

        if (errors) bookForm.setStatus(errors)
        errorMessage
          ? bookForm.setFieldValue('errorMessage', errorMessage)
          : updatedBookAlert(book.title)

        bookForm.setSubmitting(false)
      })
    }
  })

  useEffect(() => {
    getBook(bookId).then(res => {
      setBook(res.book)
      setErrorMessage(res.errorMessage)
    })
  }, [])

  const updatedBookAlert = (title) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${title} Updated`,
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/')
  }

  return (
    <PageContentLayout>
    {!errorMessage
      ? <>
        {book
          ? <FormLayout title='Update your book'>
                <BookForm bookForm={bookForm}/>
            </FormLayout>
          : <Waiting />}
        </>
      : <NothingToShow reason={ errorMessage } />}
    </PageContentLayout>
  )
}
