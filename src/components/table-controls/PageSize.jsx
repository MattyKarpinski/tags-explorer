import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PageSize({onSizeChange}) {
  const [pageSize, setPageSize] = React.useState(5);

  const handleChange = (event) => {
    const selcetedPageSize = event.target.value;
    setPageSize(selcetedPageSize);
    onSizeChange(selcetedPageSize);
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
        <InputLabel id="demo-simple-select-label">Page Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pageSize}
          label="Page Size"
          onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={40}>40</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}