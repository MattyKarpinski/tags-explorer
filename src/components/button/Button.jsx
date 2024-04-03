import * as React from 'react';
import Button from '@mui/material/Button';
import CachedIcon from '@mui/icons-material/Cached';

export default function CustomButton({ variant, onClick, children }) {
  return (
    <Button 
        variant={variant}
        onClick={onClick}
        sx={{
        padding: '.5rem 1rem',
        margin: '1rem 0', 
        '&:hover': {
            backgroundColor: '#36649D',
            border: '1px solid #36649D',
            color: '#fff',
        },
        }}
        endIcon={<CachedIcon />}
    >
      {children}
    </Button>
  );

  Button.propTypes = {
    label: PropTypes.string,
  };
}
