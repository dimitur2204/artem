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
