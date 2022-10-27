import React from "react";
import Header from "../components/Header";
import ButtonTabs from "../components/ButtonTabs";

// bidding page that is made up of Header + ButtonTabs component
function Bids() {
  return (
    <div>
      <Header text="Bids" />
      <ButtonTabs></ButtonTabs>
    </div>
  );
}

export default Bids;
