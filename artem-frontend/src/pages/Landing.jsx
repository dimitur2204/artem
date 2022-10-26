import theme from "../theme";
import { Typography, Button} from "@mui/material";

export default function LandingPage () {
    return(
      <div style={{height: "100vh", width:"100%", backgroundColor: theme.palette.background.landing}}>
       <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"80%", margin:"auto", gap:"25px", paddingTop:"50%"}}>
        <img src={`${process.env.PUBLIC_URL}/logo-white.png`}></img>
        <Typography variant="h2" style=
        {{color: "white", fontSize: "2.7rem" }}>Hello!</Typography>
        <Typography style={{textAlign:"center", color: "white"}}>Welcome to Artem Gallery! <br></br>Are you an 
        artist or an admirer? Start exploring and find inspiration 
        in the exhibitions.</Typography>
        <Button
              variant="outlined"
              disableElevation
              style={{ maxWidth: "150px", backgroundColor:"white",}}
            >
              Continue
            </Button>
       </div> 
      </div>

    )
}