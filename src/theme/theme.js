import { createMuiTheme } from '@material-ui/core/styles'
import { lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[300]
    }
  }
})

export default theme
