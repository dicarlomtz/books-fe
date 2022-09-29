import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteBook } from '../../../api'

export const DeleteBookButton = ({ bookId }) => {
  const navigate = useNavigate()

  const removedBookAlert = (title) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${title} Removed`,
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/')
  }

  const errorAlert = (errorMessage) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: errorMessage
    })
  }

  const deleteBookConfirmation = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#011627',
      cancelButtonColor: '#E71D36',
      confirmButtonText: 'Yes, delete it!'
    }).then(res => {
      if (res.isConfirmed) {
        deleteBook(bookId).then(res => {
          const { book, errorMessage } = res
          errorMessage ? errorAlert(errorMessage) : removedBookAlert(book.title)
        })
      }
    })
  }

  return (
    <Button onClick={deleteBookConfirmation} variant='contained' color='error' endIcon={ <DeleteIcon /> }>Delete</Button>
  )
}

DeleteBookButton.propTypes = {
  bookId: PropTypes.number.isRequired
}
