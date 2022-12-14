import { ThemeProvider, createTheme } from '@mui/material'
import { Box } from '@mui/material'
import { CssBaseline } from '@mui/material'
import Copyright from '../components/Copyright'
import HeaderBar from '../components/HeaderBar'
import SongsContainer from '../components/SongsContainer'

const theme = createTheme();

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Box component="header" maxWidth='100%' >
          <HeaderBar pos='fixed' />
        </Box>
        <Box component="main" maxWidth='100%'>
          <SongsContainer />
        </Box>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
          }}
        >
          <Copyright />
        </Box>
      </Box>
    </ThemeProvider>
  )
}
export default HomePage;