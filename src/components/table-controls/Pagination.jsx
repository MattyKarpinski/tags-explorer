import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({onPageChange}) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    onPageChange(page)
  };

  return (
    <Stack spacing={2} sx={{padding: '3em 0' }}>
      <Pagination 
        count={10} 
        page={page} 
        onChange={handleChange}
        sx={{
          '& .Mui-selected': {
            background: "#36649D",
            color: '#fff', 
          },
          '& .MuiPaginationItem-root': {
            color: '#36649D', 
          },
          '& .MuiPaginationItem-icon': {
            color: '#36649D', 
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            background: "#36649D",
            color: '#fff',
          }
        }}
      />
    </Stack>
  );
}