import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Container, Toolbar } from '@mui/material';
import Dashboard from './Dashboard';
import Welcome from './Welcome';

function Content() {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}
    >
      <Toolbar />
      <Container maxWidth="100%" sx={{ mt: 5, mb: 5 }}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="welcome" element={<Welcome />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default Content;
