import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { FormControlProps } from '@material-ui/core';
import { useContext } from 'react';
import { MusicContext } from '../GolbalState';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const durations = [
  'less than 1 min',
  '1 min to 2 min',
  '2 min to 3 min',
  'more than 4 min'
];

export default function MultipleSelectCheckmarks(props:FormControlProps) {
  const [songduration, setSongdurations] = React.useState<string[]>([]);
  const globaldurations=useContext(MusicContext)
  const duration=globaldurations?.durations
  const setduration=globaldurations?.setDurations
  const handleChange = (event: SelectChangeEvent<typeof duration>) => {
    const {
      target: { value },
    } = event;
    if(setduration!==undefined)
    {
    if(value===undefined) 
    setduration([])
    else
    setduration(typeof value === 'string' ? value.split(',') : value)
    }
  }
  return (
    <div>
      <FormControl sx={{ m: 1, width: 220 }}  >
        <Select sx={{bgcolor:'#fff'}}
        displayEmpty
          multiple
          value={duration || []}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected? selected.length===0 : true) {
              return <b>Select songs duration</b>;
            }
            return selected.join(', ');
          }}
          MenuProps={MenuProps}
        >
         
          {durations.map((item:string) => (
            <MenuItem key={item} value={item}>
              <Checkbox checked={duration ? duration.indexOf(item) > -1 : false}/>
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
