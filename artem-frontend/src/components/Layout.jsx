import React from "react";
import BottomNavigation from "./BottomNavigation";

//components that apply to every single page 
export default function Layout({ children }) {
  return (
    <>
      {children}
      <BottomNavigation />
    </>
  );
}
