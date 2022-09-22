import {ThemeProvider,createTheme} from '@mui/material'
const theme = createTheme();
function Player() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <h1>player</h1>
      </div>
      </ThemeProvider>
    );
  }
  
  export default Player;