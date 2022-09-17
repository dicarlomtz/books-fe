import { useSearchBooks } from '../../hooks/book/useSearchBooks'

export const BooksPage = () => {
  const {
    books, maxPages, errorMessage,
    nextPage, previousPage,
    searchParameter, searchParameterValue, searchAvailableModifier,
    setSearchParameter, setSearchParameterValue, modifyAvailableParameter
  } = useSearchBooks()

  return (
    <div>BooksPage</div>
  )
}
