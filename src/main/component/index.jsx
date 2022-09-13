import React, { useMemo, useState } from 'react';
import {
  HashRouter, Route, Routes,
} from 'react-router-dom';
import {
  createTheme, CssBaseline, ThemeProvider, Toolbar,
} from '@mui/material';
import Header from './Header';
import { ColorModeContext } from '../constant/context';
import Dashboard from './Dashboard';
import Welcome from './Welcome';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setDarkMode((prevMode) => (!prevMode));
      },
    }),
    [],
  );

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    }),
    [darkMode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Toolbar />
        <HashRouter>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="welcome" element={<Welcome />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
