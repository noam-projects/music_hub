import {ThemeProvider,createTheme} from '@mui/material'
const theme = createTheme();
function Contact() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <h1>contact</h1>
      </div>
      </ThemeProvider>
    );
  }
  
  export default Contact;