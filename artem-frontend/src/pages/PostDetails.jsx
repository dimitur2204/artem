import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Typography, Button, IconButton, Box } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { Container } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { AutoAwesomeMotion } from "@mui/icons-material";
import theme from "../theme";
import ListUsers from "../components/ListUsers";
import { useNavigate, useParams } from "react-router-dom";
import { useSinglePost } from "../hooks/useSinglePost";


//local component for the "slideshow"
function Slide({ url, title }) { 
  const [liked, setLiked] = React.useState(false);
  return (
    <div>
      {/* //the image that can be seen in the slider */}
      <img style={{ width: "100%", height: 260, objectFit: "cover" }} src={url} alt={title}></img> 
      {/* icons for likes and saves  */}
      <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
        <IconButton variant={liked ? "outlined" : "contained"} onClick={() => setLiked(!liked)} disableElevation>
          {!liked ? <FavoriteBorder
            sx={{
              width: "30px",
              height: "30px",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.8)",
              borderRadius: "100px",
              padding: "5px",
            }}
          /> : <Favorite sx={{
            width: "30px",
            height: "30px",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.8)",
            borderRadius: "100px",
            padding: "5px",
          }}/>}
        </IconButton>
        <IconButton>
          <AutoAwesomeMotion
            sx={{
              width: "30px",
              height: "30px",
              color: "white",
              borderRadius: "100px",
              backgroundColor: "rgba(0,0,0,0.8)",
              padding: "5px",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
}
// timer for the bid ending
export default function PostDetails() {
  const [timer, setTimer] = useState(86400 * 2 + 3600 * 4 + 60 * 50 + 43); //setting the timer for 2 days, 4 hours ...
  useEffect(() => {
    const intervalId = setInterval(() => setTimer((timer) => timer - 1), 1000);
    return () => clearInterval(intervalId);
  }, [timer, setTimer]);
    const {id} = useParams()
    const navigate = useNavigate()
  const {postWithImg} = useSinglePost(id)
  return (
    <>
      <IconButton onClick={() => navigate(-1)} size="large" aria-label="goback">
        <ArrowBackIosIcon
          style={{ color: "black", padding: "10px 5px" }}
          sx={{ width: 32, height: 32 }}
        />
      </IconButton>
{/* the slideshow */}
      <Swiper
      // the bulltes that show the page you are on and the arrows
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            url={postWithImg?.url}
            title={postWithImg?.title}
          />
        </SwiperSlide>
      </Swiper>

      {/* everything underneath the slideshow */}
      <Container
        style={{ marginTop: theme.spacing(3), marginBottom: theme.spacing(3)}}
      >
        <Typography>UP FOR AUCTION</Typography>
        <Typography variant="h2" style={{ padding: "10px 0" }}>
          {postWithImg?.title}
        </Typography>
        <Typography>
          {postWithImg?.description}
        </Typography>
        <br></br>
        <Typography>
          Posted by <b>{postWithImg?.authorId}</b>
        </Typography>

        <div
          style={{
            display: "flex",
            gap: "15px",
            margin: "30px 0",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems:"center" }}>
            <Button
              variant="contained"
              disableElevation
              style={{ width: "100px", height:"40px"}}
            >
              Bid
            </Button>

            <IconButton style={{}}>
              <RemoveRedEyeIcon
                sx={{
                  width: "30px",
                  height: "30px",
                  color: "white",
                  borderRadius: "100px",
                  backgroundColor: theme.palette.background.landing,
                  padding: "5px",
                }}
              />
            </IconButton>
          </div>
{/* displaying the timer */}
          <Typography>
            Closes in:
            {/* checking if the remaining amount is divisible by the number of seconds that make up a day/ hour/ minutes and then continues */}
            {` ${Math.floor(timer / 86400)}d ${Math.floor(
              (timer % 86400) / 3600
            )}h ${Math.floor((timer % 3600) / 60)}m ${Math.floor(timer % 60)}s`} 
          </Typography>
        </div>
        <Typography>Bid history</Typography>
        <ListUsers />
      </Container>
    </>
  );
}
