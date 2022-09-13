import React, { useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { ColorModeContext } from '../constant/context';
import Layout from './Layout';

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
        <Layout />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
