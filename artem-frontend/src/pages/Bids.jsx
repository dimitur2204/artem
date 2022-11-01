/*
Carl Christiansen

The main bids page that renders when you access /bids,
Renders the section where the items that the user bidded on or chose to "watch" (the eye icon),
Also renders the tabs component that allows the user to switch between the different tabs (bids, watched).
*/

import React from "react";
import Header from "../components/Header";
import ButtonTabs from "../components/ButtonTabs";

// Bidding page that is made up of Header + ButtonTabs component
function Bids() {
  return (
    <div>
      <Header text="Your Actions" />
      <ButtonTabs></ButtonTabs>
    </div>
  );
}

export default Bids;
