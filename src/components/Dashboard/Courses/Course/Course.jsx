import React from 'react'
import PropTypes from 'prop-types'

import { Grid, LinearProgress } from '@material-ui/core'
import { Money, People, RemoveRedEye } from '@material-ui/icons'

import {
  BottomContainer,
  CourseNameContainer,
  IconText,
  PriceContainer,
  StyledCard,
  StyledFiberManualRecord,
  StyledGrid,
  StyledTypography
} from './styles'

import { CategoryStatus } from '../../../../models'

const Course = ({
  name,
  price,
  status,
  earned,
  subscriptions,
  views,
  vacancies
}) => {
  const percentage = (subscriptions / vacancies) * 100

  return (
    <StyledCard>
      <Grid container>
        <Grid item xs={12}>
          <CourseNameContainer>
            <StyledTypography variant="h6">{name}</StyledTypography>
          </CourseNameContainer>
        </Grid>
        <StyledGrid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <PriceContainer>${price}/month</PriceContainer>
            </Grid>
            <Grid item xs={6}>
              <IconText align="right">
                <div>
                  <StyledFiberManualRecord
                    statuscolor={CategoryStatus[status].color}
                  />
                </div>
                <div>{status}</div>
              </IconText>
            </Grid>
          </Grid>
        </StyledGrid>
        <StyledGrid item xs={12}>
          <LinearProgress variant="determinate" value={percentage} />
        </StyledGrid>
        <StyledGrid item xs={12}>
          <BottomContainer>
            <Grid container>
              <Grid item xs={4}>
                <IconText align="left">
                  <div>
                    <Money />
                  </div>
                  <div>${earned}</div>
                </IconText>
              </Grid>
              <Grid item xs={4}>
                <IconText align="center">
                  <div>
                    <People />
                  </div>
                  <div>{subscriptions}</div>
                </IconText>
              </Grid>
              <Grid item xs={4}>
                <IconText align="right">
                  <div>
                    <RemoveRedEye />
                  </div>
                  <div>{views}</div>
                </IconText>
              </Grid>
            </Grid>
          </BottomContainer>
        </StyledGrid>
      </Grid>
    </StyledCard>
  )
}

Course.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  earned: PropTypes.number.isRequired,
  subscriptions: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  vacancies: PropTypes.number.isRequired
}

export default Course
