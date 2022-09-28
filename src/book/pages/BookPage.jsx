import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBook } from '../../api'
import { PageContentLayout } from '../../ui'
import { NothingToShow } from '../../ui/components'
import { BookContent } from '../views/BookContent'

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
      {!errorMessage ? <BookContent book={book} /> : <NothingToShow reason={ errorMessage } />}
    </PageContentLayout>
  )
}
