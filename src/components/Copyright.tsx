import { Typography, TypographyProps } from "@mui/material"
import Link from '@mui/material/Link';

function Copyright(props:TypographyProps) {
  return (
    <Typography variant="h6" color="text.secondary" align="center"  {...props} >
      Made by <Link color='#3987F1' sx={{textDecoration:'none'}}>Noam Levy</Link>
    </Typography>
  );
}
export default Copyright;