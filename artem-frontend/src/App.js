import * as React from "react";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import BottomNavigation from "./components/BottomNavigation";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <BottomNavigation />
    </ThemeProvider>
  );
}

export default App;
