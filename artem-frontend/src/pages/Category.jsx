import React from "react";
import ImageList from "../components/global/ImageList";
import Header from "../components/Header";
import theme from "../theme";

import { IconButton, Skeleton } from "@mui/material";
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
    <div>
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
    </div>
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
          {postsWithImg?.map((post) => (
            <SwiperSlide key={post.id}>
              <Slide url={post.url} />
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
