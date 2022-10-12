import * as React from 'react';
import theme from './theme'
import { ThemeProvider } from '@emotion/react';
import BottomNavigation from './components/BottomNavigation';

function App() {
  return (
<ThemeProvider theme={theme}>
<BottomNavigation />
</ThemeProvider>
  );
}

export default App;
