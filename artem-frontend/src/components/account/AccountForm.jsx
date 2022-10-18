import { AccountBox, Lock } from "@mui/icons-material";
import {
  Alert,
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

function AccountForm({ type, onSubmit, error, loading }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <Box>
      <img src="/logo.jpg" alt="logo" />
      <Typography align="center" variant="h1" sx={{ mb: theme.spacing(4) }}>
        {capitalize(type)}
      </Typography>
      <form onSubmit={(e) => {
        onSubmit(e, { username, email, password });
      }}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        {error ? <Alert sx={{mt: theme.spacing(1)}} severity="error">{error.message}</Alert> : null}
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
