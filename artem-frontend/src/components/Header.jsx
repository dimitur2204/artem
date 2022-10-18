import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import AccountMenu from "./account/AccountMenu";

export default function Header({ text, withSearch, withAccountOptions }) {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "space-between" }}
      as="header"
    >
      <Typography variant="h1">{text}</Typography>
      {withAccountOptions ? <AccountMenu /> : null}
      {withSearch ? (
        <Link to="/search">
          <IconButton size="large" aria-label="Search">
            <SearchIcon sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Link>
      ) : null}
    </Container>
  );
}
