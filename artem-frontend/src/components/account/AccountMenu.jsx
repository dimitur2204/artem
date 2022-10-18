import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../../firebase-config";

const auth = getAuth(firebaseApp);
const options = [
  {
    label: "Logout",
    handleClick: () => {
      return signOut(auth);
    },
  },
  {
    label: "Settings",
    handleClick: () => {
      return Promise.resolve();
    },
  },

  {
    label: "Edit",
    handleClick: () => {
      return Promise.resolve();
    },
  },
];
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        size="large"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ width: 32, height: 32 }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => {
              option.handleClick().then(() => handleClose());
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
