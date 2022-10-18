import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Header from "../components/Header";

export default function Account() {
  return (
    <>
      <Header text="Account" withAccountOptions />
      <Container>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          deleniti cumque culpa veritatis doloribus quos ratione necessitatibus
          quia aliquam exercitationem.
        </Typography>
      </Container>
      <Button color="primary" size="small">
        Something
      </Button>
    </>
  );
}
