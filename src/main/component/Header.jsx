import React from 'react';
import { Toolbar, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toggle from '../common/Toggle';

function Header() {
  return (
    <MuiAppBar
      position="absolute"
    >
      <Toolbar sx={{ pr: '24px', textAlign: 'center' }}>
        <Typography component="h1" variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Header
        </Typography>
        <Toggle />
      </Toolbar>
    </MuiAppBar>
  );
}

export default Header;
