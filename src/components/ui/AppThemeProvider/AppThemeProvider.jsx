import React from 'react'
import PropTypes from 'prop-types'

import theme from '../../../theme/theme'

import { ThemeProvider } from '@material-ui/core'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as StylesProvider } from '@material-ui/styles'

const AppThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <StylesProvider theme={theme}>{children}</StylesProvider>
      </StyledThemeProvider>
    </ThemeProvider>
  )
}

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default React.memo(AppThemeProvider)
