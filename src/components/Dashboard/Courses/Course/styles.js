import styled from 'styled-components'

import { Card, Grid, Typography } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'

export const StyledCard = styled(Card)`
  height: 160px;
  position: relative;
  border: 1px solid black;
`

export const StyledGrid = styled(Grid)`
  padding: 5px 0 5px 0;
`

export const StyledFiberManualRecord = styled(FiberManualRecord)`
  color: ${props => props.statuscolor};
`

export const StyledTypography = styled(Typography)`
  text-align: center;
  font-weight: bold;
  color: #3c3b37;
`

export const IconText = styled.div`
  display: flex;
  flex-direction: 'row';
  justify-content: ${props =>
    props.align === 'left'
      ? 'flex-start'
      : props.align === 'center'
      ? 'center'
      : 'flex-end'};
  color: '#73726c';
`

export const BottomContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: silver;
  width: 100%;
  position: absolute;
  bottom: 0px;
  height: 20px;
`
export const CourseNameContainer = styled.div`
  height: 60px;
  text-align: center;
`

export const PriceContainer = styled.div`
  color: #73726c;
`
