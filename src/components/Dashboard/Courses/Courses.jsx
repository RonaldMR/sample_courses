import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

import Course from './Course'

import { StyledGrid } from './styles'

const Courses = ({ items, isLoading }) => {
  return (
    <StyledGrid container spacing={3}>
      {isLoading
        ? Array.from(new Array(42)).map((_, index) => (
            <Grid key={index} item xl={2} lg={3} md={4} sm={6} xs={12}>
              <div>
                <Skeleton variant="rect" height={80} />
                <Skeleton />
                <Skeleton />
                <Skeleton variant="rect" height={40} />
              </div>
            </Grid>
          ))
        : items.map(item => (
            <Grid key={item.id} item xl={2} lg={3} md={4} sm={6} xs={12}>
              <Course {...item} />
            </Grid>
          ))}
    </StyledGrid>
  )
}

Courses.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default Courses
