import theme from "../theme";
import { Typography, Button} from "@mui/material";

export default function LandingPage () {
    return(
       <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"80%", margin:"auto", gap:"20px", }}>
        <img src={`${process.env.PUBLIC_URL}/logo-white.png`}></img>
        <Typography variant="h2">Hello!</Typography>
        <Typography style={{textAlign:"center"}}>Welcome to Artem Gallery! <br></br>Are you an 
        artist or an admirer? Start exploring and find inspiration 
        in the exhibitions.</Typography>
        <Button
              variant="contained"
              disableElevation
              style={{ maxWidth: "130px" }}
            >
              Continue
            </Button>
       </div> 
    )
}