import { collection, getFirestore, query } from "firebase/firestore";
import React from "react";
import ImageList from "../components/global/ImageList";
import Header from "../components/Header";
import firebaseApp from "../firebase-config";
import { usePosts } from "../usePosts";

//Our Collection page that consists of Header + ImageList component
function Saved() {
  const posts = usePosts(query(collection(getFirestore(firebaseApp), "posts")))
  
  return (
    <>
      <Header text="Saved" />
      <ImageList posts={posts} />
    </>
  );
}

export default Saved;
