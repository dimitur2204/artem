import { AccountBox, Lock } from "@mui/icons-material";
import {
  Box,
  Button,
  capitalize,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import theme from "../../theme";
import Input from "../Input";

function AccountForm({ type, onSubmit }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <Box>
      <img src="/logo.jpg" alt="logo" />
      <Typography align="center" variant="h1" sx={{ mb: theme.spacing(4) }}>
        {capitalize(type)}
      </Typography>
      <form onSubmit={onSubmit}>
        {type === "register" ? (
          <Input
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <AccountBox />
                </IconButton>
              </InputAdornment>
            }
            sx={{ mb: theme.spacing(2) }}
            placeholder="Email..."
            type="email"
            name="email"
          />
        ) : null}
        <Input
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <AccountBox />
              </IconButton>
            </InputAdornment>
          }
          sx={{ mb: theme.spacing(2) }}
          placeholder="Username..."
          type="text"
          name="username"
        />
        <Input
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <Lock />
              </IconButton>
            </InputAdornment>
          }
          placeholder="Password..."
          type="password"
          name="password"
        />
        {type === "login" ? (
          <>
            <Typography
              display="inline"
              align="center"
              sx={{ mt: theme.spacing(2) }}
            >
              Don’t have account?{" "}
            </Typography>
            <Typography color="primary" display="inline">
              <Link
                to="/register"
                style={{ color: theme.palette.primary.main }}
              >
                Register
              </Link>
            </Typography>
          </>
        ) : null}
        <Button
          sx={{ mt: theme.spacing(2) }}
          variant="contained"
          size="large"
          type="submit"
          fullWidth
        >
          {capitalize(type)}
        </Button>
      </form>
    </Box>
  );
}

export default AccountForm;
