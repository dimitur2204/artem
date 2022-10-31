/*
Dimitar Nizamov

The main account page that renders when you access /bids,
Displays the user's account information and a follow button
Also renders a tabs component that allows the user to switch between
the different tabs (bids, watched)
*/
import React from "react";
import Header from "../components/Header";
import ButtonTabs from "../components/ButtonTabs";

// bidding page that is made up of Header + ButtonTabs component
function Bids() {
  return (
    <div>
      <Header text="Your Actions" />
      <ButtonTabs></ButtonTabs>
    </div>
  );
}

export default Bids;
