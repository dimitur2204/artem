import React from "react";
import { capitalize } from "lodash";
import { useHref } from "react-router-dom";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function Header() {
  const href = useHref();
  return (
    <Container as="header">
      <Typography variant="h1">
        {capitalize(href.split('/')[1] === "" ? "home" : href.split('/')[1])}
      </Typography>
    </Container>
  );
}
