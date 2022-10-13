import React from "react";
import { ThemeProvider } from "@emotion/react";
import BottomNavigation from "./BottomNavigation";
import theme from "../theme";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <BottomNavigation />
    </ThemeProvider>
  );
}
