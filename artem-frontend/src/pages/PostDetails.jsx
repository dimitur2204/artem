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
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { Container } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import theme from "../theme";
import ListUsers from "../components/ListUsers";


//local component for the "slideshow"
function Slide({ url, title }) { 
  const [liked, setLiked] = React.useState(false);
  return (
    <div>
      <img style={{ width: "100%" }} src={url} alt={title}></img>

      <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
        <IconButton
          variant={liked ? "outlined" : "contained"}
          onClick={() => setLiked(!liked)}
          disableElevation
        >
          <FavoriteBorder
            sx={{
              width: "30px",
              height: "30px",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.8)",
              borderRadius: "100px",
              padding: "5px",
            }}
          />
        </IconButton>
        <IconButton style={{}}>
          <RemoveRedEyeIcon
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

export default function PostDetails() {
  const [timer, setTimer] = useState(86400 * 2 + 3600 * 4 + 60 * 50 + 43);
  useEffect(() => {
    const intervalId = setInterval(() => setTimer((timer) => timer - 1), 1000);

    return () => clearInterval(intervalId);
  }, [timer, setTimer]);
  return (
    <>
      <IconButton size="large" aria-label="goback">
        <ArrowBackIosIcon
          style={{ color: "black", padding: "10px 5px" }}
          sx={{ width: 32, height: 32 }}
        />
      </IconButton>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            url={`${process.env.PUBLIC_URL}/post-details-img/Mona-Bisa.png`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            url={`${process.env.PUBLIC_URL}/post-details-img/Mona-Bisa.png`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            url={`${process.env.PUBLIC_URL}/post-details-img/Mona-Bisa.png`}
          />
        </SwiperSlide>
      </Swiper>
      <Container
        style={{ marginTop: theme.spacing(3), marginBottom: theme.spacing(3)}}
      >
        <Typography>UP FOR AUCTION</Typography>
        <Typography variant="h2" style={{ padding: "10px 0" }}>
          Mona Bisa
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <br></br>
        <Typography>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
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

          <Typography>
            Closes in:
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
