import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from '@material-ui/core'

import Course from './Course'

import { StyledGrid } from './styles'

const Courses = ({ items }) => {
  return (
    <StyledGrid container spacing={3}>
      {items.map(item => (
        <Grid key={item.id} item xl={2} lg={3} md={4} sm={6} xs={12}>
          <Course {...item} />
        </Grid>
      ))}
    </StyledGrid>
  )
}

Courses.defaultProps = {
  items: []
}

Courses.propTypes = {
  items: PropTypes.array
}

export default Courses
