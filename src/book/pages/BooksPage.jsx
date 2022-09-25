import Typography from '@mui/material/Typography'

import { useSearchBooks } from '../../hooks/book/useSearchBooks'
import { PageContentLayout } from '../../ui'
import { PaginationButtons } from '../components'
import { BookList } from '../views/BookList'
import { SearchBar } from '../views/SearchBar'

export const BooksPage = () => {
  const {
    books, maxPages, errorMessage,
    currentPage, setCurrentPage,
    searchParameter, searchParameterValue,
    setSearchParameter, setSearchParameterValue
  } = useSearchBooks()

  return (
    <PageContentLayout>
      <Typography variant='h1' align='center' sx={{ fontWeight: 'regular', fontSize: 'h3.fontSize', textTransform: 'capitalize' }}>The best book search engine, Boogle It!</Typography>
      <SearchBar setSearchParameter={setSearchParameter} searchParameter={searchParameter} searchValue={searchParameterValue} setSearchValue={setSearchParameterValue} />
      <BookList books={ books } />
      <PaginationButtons currentPage={currentPage} setCurrentPage={setCurrentPage} maxPages={maxPages} />
    </PageContentLayout>
  )
}
