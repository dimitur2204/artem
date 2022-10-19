import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import { Typography } from "@mui/material";

function Slide({url}) {
    return <div>
      <img style={{
        width: "100%"
      }} src={url}></img>
    </div>
}

export default function PostDetails() {
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
            <Slide url={`${process.env.PUBLIC_URL}/post-details-img/Mona-Bisa.png`}/>
        </SwiperSlide>
        <SwiperSlide>
            <Slide url={`${process.env.PUBLIC_URL}/post-details-img/Mona-Bisa.png`}/>
        </SwiperSlide>
        <SwiperSlide>
            <Slide url={`${process.env.PUBLIC_URL}/post-details-img/Mona-Bisa.png`}/>
        </SwiperSlide>
      </Swiper>
      <Typography>UP FOR AUCTION</Typography>
      <Typography variant="h2">Mona Bisa-Mint Condition</Typography>
    </>
  );
}
