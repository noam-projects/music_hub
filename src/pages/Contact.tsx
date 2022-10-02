import { ThemeProvider, createTheme } from '@mui/material'
import HeaderBar from '../components/HeaderBar';
import {CssBaseline} from '@mui/material';
import { Box } from '@mui/material'
import Copyright from '../components/Copyright'
import ContactForm from '../components/ContactForm'
const theme = createTheme();
function Contact() {
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
          <HeaderBar pos='fixed'/>
        </Box>
        <Box sx={{mt:{xs:2,md:10}}} component="main" maxWidth='100%'>
          <ContactForm/>
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
  );
}

export default Contact;