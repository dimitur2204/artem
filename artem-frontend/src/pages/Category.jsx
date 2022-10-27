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
import { useParams } from "react-router-dom";
import { capitalize } from "lodash";
import { collection, getFirestore, query, where } from "firebase/firestore";
import firebaseApp from "../firebase-config";
import { usePosts } from "../usePosts";

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

export default function Category() {
  const { category } = useParams();
  const postsWithImg = usePosts(query(
    collection(getFirestore(firebaseApp), "posts"),
  where("category", "==", category.toLowerCase())
  ) )
  return (
    <>
      <Header
        text={capitalize(category)}
        withSearch
        sx={{ marginBottom: theme.spacing(3) }}
      />
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {postsWithImg?.map((post) => (
          <SwiperSlide>
            <Slide url={post.url} />
          </SwiperSlide>
        ))}

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
      <ImageList posts={postsWithImg} title="Trending" sx={{ marginBottom: theme.spacing(10) }} />
      <ImageList posts={postsWithImg} title="More of the things you like" />
    </>
  );
}
