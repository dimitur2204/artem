import React from "react";
import ImageList from "../components/global/ImageList";
import Header from "../components/Header";
import theme from "../theme";

function Home() {
  return (
    <>
      <Header text="Home" withSearch sx={{marginBottom: theme.spacing(3)}} />
      <ImageList title="Trending" sx={{marginBottom: theme.spacing(10)}} />
      <ImageList title="More of the things you like" />
    </>
  );
}

export default Home;
