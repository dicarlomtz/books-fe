import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import PropTypes from 'prop-types'

import { searchParameters as parameters } from '../../../hooks'

export const SearchOptions = ({ setSearchParameter, searchParameter }) => {
  const handleChange = ({ target }) => {
    setSearchParameter(target.value)
  }

  const parameterKeys = Object.keys(parameters)

  return (
    <FormControl sx={{ m: 1, minWidth: 140 }} size='small'>
        <InputLabel id='parameters-select-label'>Criteria</InputLabel>
        <Select labelId='parameters-select-label'
            value={searchParameter}
            label='Criteria'
              onChange={handleChange} >
            {parameterKeys.map(key => (
                <MenuItem key={parameters[key].key}
                    value={parameters[key].key}>{parameters[key].display}</MenuItem>))}
        </Select>
    </FormControl>
  )
}

SearchOptions.propTypes = {
  setSearchParameter: PropTypes.func.isRequired,
  searchParameter: PropTypes.string.isRequired
}
