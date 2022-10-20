import React from "react";
import Header from "../components/Header";
import {
  InputAdornment,
  Container,
  IconButton,
  Typography,
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
      <div style={{display: "flex", justifyContent:"center", backgroundColor:"#F7F6F5", marginBottom:"2.5rem", marginTop:"2rem"}}>
        <IconButton  color="primary" aria-label="plus symbol">
              <AddCircleOutlineIcon sx={{ fontSize:"9rem"}}/>
        </IconButton>
      </div>

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

      <Typography>
        Is your item for sale?
      </Typography>


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
            style={{float: "right", marginTop:"3rem"}}
            // position="end"
        > Post
        </Button>
    </Container>
</>
);
}
export default Create;

