import React from "react";
import Header from "../components/Header";
import {
  Container,
  IconButton,
  Typography,
  Button,
  Switch,
  Box,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Input from "../components/global/Input";
import theme from "../theme";

function Create() {
  return (
    <>
        <Header text="New Post" withXButton />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F7F6F5",
          marginBottom: theme.spacing(4),
          marginTop: theme.spacing(4),
          height: "calc(30vh)",
        }}
      >
        <IconButton color="primary" aria-label="Upload post image">
          <AddCircleOutlineIcon sx={{ fontSize: "9rem" }} />
        </IconButton>
      </div>
      <Container>
        <Input
          placeholder="Title"
        />

        <Input
          style={{ padding: "1rem", marginTop: theme.spacing(1), marginBottom: theme.spacing(3), borderRadius: "20px" }}
          placeholder="Item description"
        />
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography>Is your item for sale?</Typography>
            <Switch color="primary" defaultChecked />
          </Box>  
        <Box>          <Button
            variant="contained"
            size="large"
            disableElevation
          >
            {" "}
            Post
          </Button>

        </Box>

        </Box>
      </Container>
    </>
  );
}
export default Create;
