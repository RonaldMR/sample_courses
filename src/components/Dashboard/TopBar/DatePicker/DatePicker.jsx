import React from 'react'
import PropTypes from 'prop-types'

import { StyledGrid, StyledTypography } from './styles'

import { Grid, IconButton } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

import { addDays, isToday, isTomorrow, isYesterday, format } from 'date-fns'

const DatePicker = ({ value, onChange }) => {
  const handleClick = daysToAdd => () => {
    const newValue = addDays(value, daysToAdd)
    onChange({ target: { value: newValue } })
  }

  const shownDate = isYesterday(value)
    ? 'Yesterday'
    : isToday(value)
    ? 'Today'
    : isTomorrow(value)
    ? 'Tomorrow'
    : format(value, 'yyyy-MM-dd')

  return (
    <StyledGrid container>
      <Grid item xs={4}>
        <IconButton onClick={handleClick(-1)}>
          <KeyboardArrowLeft />
        </IconButton>
      </Grid>
      <Grid item xs={4}>
        <StyledTypography variant="body1">{shownDate}</StyledTypography>
      </Grid>
      <Grid item xs={4}>
        <IconButton onClick={handleClick(+1)}>
          <KeyboardArrowRight />
        </IconButton>
      </Grid>
    </StyledGrid>
  )
}

DatePicker.defaultProps = {
  value: new Date()
}

DatePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired
}

export default DatePicker
