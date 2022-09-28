import { Stack } from "@mui/material";
import { Checkbox } from '@mui/material'
import {GenreItemType} from '../utils/Types'
import { green } from '@mui/material/colors';
import {Typography} from '@mui/material'
function GenreItem(props: GenreItemType) {
    return (
        <Stack alignItems='center' direction='row'>
            <Checkbox sx={{color: '#7a7e98',
          '&.Mui-checked': {
            color: green[600],
          },}} onClick={props.change_state_function}></Checkbox>
          <Typography sx={{ml:6,color:'#fff'}}>{props.label_name}</Typography>
          </Stack>
    );
}

export default GenreItem;
