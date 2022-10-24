import { createTheme } from "@mui/material";
import { amber } from "@mui/material/colors";

// theme.js allows us to change the colors/font/sizes of various components in one go
const theme = createTheme({
  palette: {
    background: {
      default: "#F7F6F5",
    },
    primary: {
      ...amber,
      main: amber[600],
    },
  },
  typography: {
    h1: {
      marginTop: "1.5rem",
      fontFamily: ["quiche-sans, serif"],
      fontSize: "2rem",
      fontWeight: 500,
    },

    h2: {
      fontFamily: ["quiche-sans, serif"],
      fontSize: "2rem",
      fontWeight: 500,
      color: amber[600],
    },

    fontFamily: [
      `-apple-system,
      work-sans,
      Segoe UI,
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      Fira Sans,
      Droid Sans,
      Helvetica Neue,
      sans-serif`,
    ],
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 1000,
        },
        contained: {
          color: "#fff",
        },
      },
    },
  },
});

export default theme;
