import React from "react";
import ImageList from "../components/global/ImageList";
import Header from "../components/Header";

//Our Collection page that consists of Header + ImageList component
function Saved() {
  return (
    <>
      <Header text="Saved" />
      <ImageList />
    </>
  );
}

export default Saved;
