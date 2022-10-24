import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import AccountMenu from "./account/AccountMenu";
import { Close } from "@mui/icons-material";

export default function Header({
  text,
  withSearch,
  withAccountOptions,
  withXButton,
  sx,
}) {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "space-between", ...sx }}
      as="header"
    >
      {/* code for header for when it contains a search bar or account menu (the three dots) */}
      <Typography variant="h1">{text}</Typography>
      {withAccountOptions ? <AccountMenu /> : null}
      {withSearch ? (
        <Link to="/search">
          <IconButton size="large" aria-label="Search">
            <SearchIcon sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Link>
      ) : null}
      {withXButton ? (
        <IconButton position="end" style={{ color: "#000" }} aria-label="cross">
          <Close />
        </IconButton>
      ) : null}
    </Container>
  );
}
