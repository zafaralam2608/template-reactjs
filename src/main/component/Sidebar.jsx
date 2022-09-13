import React, { useState } from 'react';
import {
  Divider, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Toolbar,
} from '@mui/material';
import {
  ChevronLeft, Home, Menu, People,
} from '@mui/icons-material';
import Drawer from '../common/Drawer';

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={() => (setOpen(!open))}>
          {open
            ? (<ChevronLeft />)
            : (<Menu />)}
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <Link href="#/" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link href="#/welcome" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Welcome" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

export default Sidebar;
