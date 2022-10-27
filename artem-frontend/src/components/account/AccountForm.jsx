import { AccountBox, Google, Lock, Facebook } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  capitalize,
  CircularProgress,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import firebaseApp from "../../firebase-config";
import theme from "../../theme";
import Header from "../Header";
import Input from "../global/Input";

const auth = getAuth(firebaseApp);

function AccountForm({ type, onSubmit, error, loading }) {
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  return (
    <Box>
      <Header withBackButton sx={{ paddingLeft: 0, mt: theme.spacing(1) }} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={`${process.env.PUBLIC_URL}/logos/192.png`}
          width={100}
          height={100}
          alt="logo"
          style={{ alignSelf: "center", justifyContent: "center" }}
        />
      </div>
      <Typography marginTop="0rem" align="center" variant="h1" sx={{ mb: theme.spacing(4) }}>
        {capitalize(type)}
      </Typography>
      <form
        onSubmit={(e) => {
          onSubmit(e, { email, password, repeatPassword });
        }}
      >
        {/* boxes for users to log in */}
        <Input
          endAdornment={
            <InputAdornment position="end">
              <AccountBox />
              {/* username box */}
            </InputAdornment>
          }
          sx={{ mb: theme.spacing(2) }}
          placeholder="Email..."
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          endAdornment={
            <InputAdornment position="end">
              <Lock />
              {/* password box */}
            </InputAdornment>
          }
          placeholder="Password..."
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: theme.spacing(2) }}
        />
        {/* registrering a user */}
        {type === "register" ? (
          <Input
            endAdornment={
              <InputAdornment position="end">
                <Lock />
              </InputAdornment>
            }
            sx={{ mb: theme.spacing(2) }}
            placeholder="Repeat password..."
            type="password"
            name="repeatPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        ) : null}
        {error ? (
          <Alert sx={{ mt: theme.spacing(1) }} severity="error">
            {error.message}
          </Alert>
        ) : null}
        <Button
          sx={{ mt: theme.spacing(2) }}
          variant="contained"
          size="large"
          type="submit"
          disabled={loading}
          fullWidth
          disableElevation
        >
          {loading ? <CircularProgress size={14} /> : capitalize(type)}
        </Button>
      </form>
      {/* if a user does not have an account yet, register option */}

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
            <Link to="/register" style={{ color: theme.palette.primary.main }}>
              Register
            </Link>
          </Typography>
        </>
      ) : null}
      {/* possibility to log in with google */}
      <IconButton
        aria-label="Sign in with Google"
        onClick={() => {
          signInWithGoogle(["email", "profile"]).then(() => navigate("/"));
        }}
      >
        <Google />
      </IconButton>

      {/* possibility to log in with facebook (currently only links to google login as it is too much hassle to log in with facebook*/}
      <IconButton
        aria-label="Sign in with Facebook"
        onClick={() => {
          signInWithGoogle(["email", "profile"]).then(() => navigate("/"));
        }}
      >
        <Facebook />
      </IconButton>
    </Box>
  );
}

export default AccountForm;
