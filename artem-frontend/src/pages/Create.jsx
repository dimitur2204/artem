import React from "react";
import Header from "../components/Header";
import {
  InputAdornment,
  Container,
  IconButton,
  Box,
  Button
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import Input from "../components/Input";

function Create() {
  return(
  <>
  <div style={{display: "flex", justifyContent: "space-between"}}>
    <Header text="New Post" />
    <IconButton position="end" style={{color:"#000", paddingRight:"20px", paddingTop:"30px"}} aria-label="cross">
              <CloseIcon/>
        </IconButton>
  </div>

    <Container>

      <IconButton sx={{display:"flex"}} color="primary" aria-label="plus symbol">
            <AddCircleOutlineIcon sx={{ fontSize:"9rem", justifyContent:"center"}}/>
      </IconButton>

      <Input placeholder="Title"
          endAdornment={
            <InputAdornment>
      </InputAdornment>
                }
                />

      <Input style={{padding: "1rem", marginTop: "20px", marginBottom: "20px"}} placeholder="Item description"
          endAdornment={
            <InputAdornment>
      </InputAdornment>
                }
                />


      <div style={{display: "flex", justifyContent: "space-between"}}>
        <IconButton style={{color:"#000",}} aria-label="switcher">
              <ToggleOnOutlinedIcon color="primary"/>
        </IconButton>

        {/* <IconButton style={{color:"#000"}} aria-label="switcher">
              <ToggleOffOutlinedIcon/>
        </IconButton> */}

        <Button
            variant="contained"
            size="large"
            disableElevation
            // position="end"
        > Post
        </Button>
      </div>
    </Container>
</>
);
}
export default Create;

