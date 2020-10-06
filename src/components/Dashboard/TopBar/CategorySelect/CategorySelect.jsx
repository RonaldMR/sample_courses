import React from 'react'
import PropTypes from 'prop-types'

import { StyledSelect } from './styles'

import { MenuItem } from '@material-ui/core'

const CategorySelect = ({ value, onChange, options }) => {
  return (
    <StyledSelect
      style={{ backgroundColor: 'white', height: '40px' }}
      labelId="category"
      id="category"
      displayEmpty
      inputProps={{
        name: 'category'
      }}
      value={value}
      onChange={onChange}
      variant="outlined"
    >
      <MenuItem value="">All Campaigns</MenuItem>
      {options &&
        options.map(option => (
          <MenuItem key={option.id} value={option.id}>
            {option.category}
          </MenuItem>
        ))}
    </StyledSelect>
  )
}

CategorySelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  includeEmpty: PropTypes.bool
}

export default CategorySelect
