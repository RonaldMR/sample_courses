import React from 'react'
import PropTypes from 'prop-types'

import { AppBar, Toolbar } from '@material-ui/core'

import { Separator } from './styles'

import CategorySelect from './CategorySelect'
import DatePicker from './DatePicker'

const TopBar = ({
  category,
  categoryList,
  date,
  onCategoryChange,
  onDateChange
}) => {
  const handleCategoryChange = ({ target: { value } }) => {
    onCategoryChange(value)
  }

  const handleDateChange = ({ target: { value } }) => {
    onDateChange(value)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          <CategorySelect
            options={categoryList}
            value={category}
            onChange={handleCategoryChange}
          />
        </div>
        <Separator />
        <DatePicker value={date} onChange={handleDateChange} />
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  category: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  categoryList: PropTypes.array.isRequired
}

export default TopBar
