import { createTheme } from "@mui/material";
import { amber } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: amber,
  },
  typography: {
    h1:{
        fontFamily: [
            "quiche-sans, serif"
        ],
        fontSize: '3rem',
        fontWeight: 500
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
      sans-serif`
    ],
  },
  components: {
    MuiCssBaseline: {
        styleOverrides: `
        `
    }
  }
});

export default theme;
