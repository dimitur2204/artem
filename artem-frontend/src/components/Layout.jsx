import React from "react";
import BottomNavigation from "./BottomNavigation";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <BottomNavigation />
    </>
  );
}
