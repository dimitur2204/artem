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
      <Container>
        <img src="account-img.png" alt="profile pic" />
        <Typography>
          Johanna Ark
        </Typography>

        <IconButton aria-label="linkedin page">
        <LinkedInIcon/>
        </IconButton>

        <IconButton aria-label="instagram page">
        <InstagramIcon/>
        </IconButton>


        <IconButton  aria-label="email">
        <AlternateEmailIcon/>
        </IconButton>

        
           
        <Typography>
        There are no mistakes in art, just happy little accidents. 📍A freelance copywriter based in Aalborg. 🎨Hungry for visuals. 
        </Typography>

      </Container>
      <Button
          variant="contained"
          disableElevation
        > Follow
        </Button>
      {/* <Button
          sx={{ mt: theme.spacing(2) }}
          variant="contained"
          size="large"
          type="submit"
          disabled={loading}
          fullWidth
          disableElevation
        >
          {loading ? <CircularProgress size={14} /> : capitalize(type)}
        </Button> */}
    </>
  );
}
