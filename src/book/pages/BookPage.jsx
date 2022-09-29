import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getBook } from '../../api'
import { PageContentLayout } from '../../ui'
import { NothingToShow } from '../../ui/components'
import { BookContentLayout } from '../layout/BookContentLayout'
import { BookContent } from '../views/BookContent'
import { BookImage } from '../views/BookImage'

export const BookPage = () => {
  const { bookId } = useParams()
  const [book, setBook] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    getBook(bookId).then(res => {
      setBook(res.book)
      setErrorMessage(res.errorMessage)
    })
  }, [])

  return (
    <PageContentLayout>
      {!errorMessage
        ? <BookContentLayout>
            <BookImage coverImage={ book.cover_image }/>
            <BookContent book={book} />
          </BookContentLayout>
        : <NothingToShow reason={ errorMessage } />}
    </PageContentLayout>
  )
}
