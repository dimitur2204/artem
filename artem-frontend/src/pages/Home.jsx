import React from "react";
import ImageList from "../components/global/ImageList";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header text="Home" withSearch />
      <ImageList withLikeCount count="5.6k" />
    </>
  );
}

export default Home;
