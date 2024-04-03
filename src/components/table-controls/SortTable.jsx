import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function sortTable({onSortChange}) {
  const [sortTable, setsortTable] = React.useState('desc');

  const handleChange = (event) => {
    const selectedSort = event.target.value;
    setsortTable(selectedSort);
    onSortChange(selectedSort);
  };

  return (
    <Box sx={{ minWidth: 60, padding: '1em 0' }}>
      <FormControl sx={{ m: 1, minWidth: 140, 
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: '#36649D',
          },
        },
      }}>
        <InputLabel id="demo-simple-select-label">Sort Table</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortTable}
          label="Page Size"
          onChange={handleChange}
        >
          <MenuItem value={'desc'}>Asc</MenuItem>
          <MenuItem value={'asc'}>Desc</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}