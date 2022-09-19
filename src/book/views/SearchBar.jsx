import Paper from '@mui/material/Paper'
import PropTypes from 'prop-types'

import { SearchOptions } from '../components'
import { SearchInput } from '../components/search/SearchInput'

const paperContainerStyles = { p: '2px 4px', display: 'flex', alignItems: 'center' }

export const SearchBar = ({ setSearchParameter, searchParameter, searchValue, setSearchValue }) => {
  return (
    <Paper
      component="form"
      sx={paperContainerStyles} >
        <SearchOptions setSearchParameter={setSearchParameter} searchParameter={searchParameter} />
      <SearchInput searchValue={searchValue} setSearchValue={ setSearchValue} />
    </Paper>
  )
}

SearchBar.propTypes = {
  setSearchParameter: PropTypes.func.isRequired,
  searchParameter: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired
}
