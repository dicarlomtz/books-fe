import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import InputBase from '@mui/material/InputBase'
import PropTypes from 'prop-types'

export const SearchInput = ({ searchValue, setSearchValue }) => {
  const handleChange = ({ target }) => {
    setSearchValue(target.value)
  }
  return (
    <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Books"
        value={searchValue}
        onChange={handleChange}
        startAdornment={<InputAdornment position='start'><SearchIcon /></InputAdornment>} />
  )
}

SearchInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired
}
