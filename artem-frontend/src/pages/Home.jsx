import React from "react";
import ImageList from "../components/global/ImageList";
import Header from "../components/Header";
import theme from "../theme";

import { IconButton } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slide({ url, title }) {
  return (
    <div>
      <img style={{ width: "100%" }} src={url} alt={title}></img>

      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <IconButton style={{}}>
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
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header text="Home" withSearch sx={{ marginBottom: theme.spacing(3) }} />
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        // navigation={true}
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

      <ImageList title="Trending" sx={{ marginBottom: theme.spacing(10) }} />
      <ImageList title="More of the things you like" />
    </>
  );
}
