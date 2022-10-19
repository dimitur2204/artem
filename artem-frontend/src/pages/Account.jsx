import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Header from "../components/Header";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


export default function Account() {
  return (
    <>
      <Header text="Account" withAccountOptions />
      <Container style={{marginTop: "2rem"}}>
      <div style={{display: "flex"}}>
        <div>
        <img src="account-img.png" alt="profile pic" />
        </div>
        <div>
        <Typography fontSize="1.5rem">
          Johanna Ark
        </Typography>

        <IconButton href="https://www.linkedin.com/in/katerina-kolarova-b4549514a/" target="_blank" aria-label="linkedin page">
        <LinkedInIcon/>
        </IconButton>

        <IconButton href="https://www.instagram.com/_chaos_is_my_middle_name/" target="_blank" aria-label="instagram page">
        <InstagramIcon/>
        </IconButton>

        <IconButton href="mailto:kolarova.kacka88@gmail.com" target="_blank"  aria-label="email">
        <AlternateEmailIcon/>
        </IconButton>
        </div>
        </div>
        <Button
          variant="contained"
          disableElevation
        > Follow
        </Button>   
           
        <Typography>
        There are no mistakes in art, just happy little accidents. 📍A freelance copywriter based in Aalborg. 🎨Hungry for visuals. 
        </Typography>
      </Container>
    </>
  );
}
