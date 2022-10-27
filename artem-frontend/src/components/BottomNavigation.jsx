import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import BottomNavigationMUI from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BalanceIcon from "@mui/icons-material/Balance";
import AddCircleOutlined from "@mui/icons-material/AddCircleOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getAuth } from "firebase/auth";
import firebaseApp from "../firebase-config";
import HomeIcon from "./HomeIcon";
import { AutoAwesomeMotion } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const auth = getAuth(firebaseApp);

export default function BottomNavigation() {
  const [value, setValue] = React.useState();
  const [user] = useAuthState(auth);
  return (
    // Paper component that works as a background for our nav bar
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      {/* nav bar icons and linking them to the pages */}
      <BottomNavigationMUI
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          icon={<AccountBalanceIcon style={{width:190}}/>}
          component={RouterLink}
          to="/"
        />

        <BottomNavigationAction
          icon={<BalanceIcon />}
          component={RouterLink}
          to="/bids"
        />

        <BottomNavigationAction
          icon={<AddCircleOutlined />}
          component={RouterLink}
          to="/create"
        />

        <BottomNavigationAction
          icon={<AutoAwesomeMotion />}
          component={RouterLink}
          to="/saved"
        />

        <BottomNavigationAction
          icon={<AccountCircleIcon />}
          component={RouterLink}
          to={user ? "/account" : "/login"}
        />
      </BottomNavigationMUI>
    </Paper>
  );
}
