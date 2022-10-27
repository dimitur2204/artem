import React from "react";
import ImageList from "../components/global/ImageList";
import Header from "../components/Header";
import theme from "../theme";

import { Box, IconButton, Skeleton, Typography } from "@mui/material";
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
import { usePosts } from "../hooks/usePosts";

function Slide({ url, title }) {
  return (
  <Box>
      <Typography variant="h2" style={{ position: "absolute", bottom: theme.spacing(2), left: theme.spacing(2), zIndex: 1 }} color={theme.palette.background.paper}>{title}</Typography>
      <img
        style={{
          width: "100%",
          height: 232,
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={url}
        alt={title}
      ></img>
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

      <div style={{ position: "absolute", top: "0", right: "0", height: 232, width:"100%", background: "linear-gradient(180deg, rgba(18,17,78,0) 0%, rgba(0,0,0,0.5270702030812324) 57%, rgba(0,0,0,0.8772102591036415) 96%)" }}>
      </div>
    </Box>
  );
}

export default function Category() {
  const { category } = useParams();
  const { postsWithImg, loading } = usePosts(
    query(
      collection(getFirestore(firebaseApp), "posts"),
      category !== "home"
        ? where("category", "==", category.toLowerCase())
        : where("category", "!=", "")
    )
  );
  const postsHalf = Math.ceil(postsWithImg?.length / 2);
  const firstHalf = postsWithImg?.slice(0, postsHalf);
  const secondHalf = postsWithImg?.slice(postsHalf);

  return (
    <>
      <Header
        text={capitalize(category)}
        withSearch
        sx={{ marginBottom: theme.spacing(3) }}
      />
      {!loading ? (
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{ marginBottom: theme.spacing(3), height: 232 }}
        >
          {postsWithImg?.filter(post => post.isFeatured).map((post) => (
            <SwiperSlide key={post.id}>
              <Slide url={post.url} title={post.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={232}
          sx={{ mb: theme.spacing(3) }}
        />
      )}
      <ImageList
        posts={firstHalf}
        title="Trending"
        sx={{ marginBottom: theme.spacing(10) }}
      />
      <ImageList posts={secondHalf} title="More of the things you like" />
    </>
  );
}
