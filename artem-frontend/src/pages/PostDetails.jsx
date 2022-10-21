import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Typography, Button, IconButton } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

function Slide({ url }) {
  return (
    <div>
      <img style={{ width: "100%" }} src={url}></img>
      <IconButton aria-label="like">
        <FavoriteBorder />
      </IconButton>
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
      <Typography>UP FOR AUCTION</Typography>
      <Typography variant="h2">Mona Bisa - Mint Condition</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>

      <Typography>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </Typography>

      <div style={{ display: "flex", gap: "35px" }}>
        <Button
          variant="contained"
          disableElevation
          style={{ minWidth: "130px" }}
        >
          Bid
        </Button>

        <Typography>
          {" "}
          Closes in:{" "}
          {`${Math.floor(timer / 86400)}d ${Math.floor(
            (timer % 86400) / 3600
          )}h ${Math.floor((timer % 3600) / 60)}m ${Math.floor(timer % 60)}s`}
        </Typography>
      </div>
    </>
  );
}
