import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function Header({text}) {
  return (
    <Container as="header">
      <Typography variant="h1">
        {text}
      </Typography>
    </Container>
  );
}
