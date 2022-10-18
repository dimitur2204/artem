import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth'
import BottomNavigationMUI from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import BalanceIcon from "@mui/icons-material/Balance";
import AddCircleOutlined from "@mui/icons-material/AddCircleOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getAuth } from "firebase/auth";
import firebaseApp from "../firebase-config";

const auth = getAuth(firebaseApp);

export default function BottomNavigation() {
  const [value, setValue] = React.useState();
  const [user] = useAuthState(auth)
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigationMUI
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          component={RouterLink}
          to="/"
        />

        <BottomNavigationAction
          label="Balance"
          icon={<BalanceIcon />}
          component={RouterLink}
          to="/bids"
        />

        <BottomNavigationAction
          label="Add art"
          icon={<AddCircleOutlined />}
          component={RouterLink}
          to="/create"
        />

        <BottomNavigationAction
          label="Saved"
          icon={<BookmarkBorderIcon />}
          component={RouterLink}
          to="/saved"
        />

        <BottomNavigationAction
          label="Account"
          icon={<AccountCircleIcon />}
          component={RouterLink}
          to={user ? "/account" : '/login'}
        />
      </BottomNavigationMUI>
    </Paper>
  );
}
