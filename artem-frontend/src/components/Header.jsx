import React from "react";
import {useHref} from 'react-router-dom';
import { IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import AccountMenu from "./AccountMenu";

export default function Header({ text }) {
  const href = useHref();
  return (
    <Container
      sx={{ display: "flex", justifyContent: "space-between" }}
      as="header"
    >
      <Typography variant="h1">{text}</Typography>
      {href.split('/')[1] !== 'account' ? <IconButton size="large" aria-label="Search">
        <SearchIcon sx={{ width: 32, height: 32 }} />
      </IconButton> : <AccountMenu />}
    </Container>
  );
}
