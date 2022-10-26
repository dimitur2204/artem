import React from "react";
import Header from "../components/Header";
import { Tab, TabList, Tabs } from "@mui/joy";

function Bids() {
  const [index, setIndex] = React.useState(0);
  return (
    <div>
      <Header text="Bids" />
      <Tabs
        aria-label="Soft tabs"
        value={index}
        onChange={(event, value) => setIndex(value)}
      >
        <TabList variant="soft">
          <Tab
            variant={index === 0 ? 'solid' : 'plain'}
            color={index === 0 ? 'primary' : 'neutral'}
          >
            First tab
          </Tab>
          <Tab
            variant={index === 1 ? 'solid' : 'plain'}
            color={index === 1 ? 'primary' : 'neutral'}
          >
            Second tab
          </Tab>
          <Tab
            variant={index === 2 ? 'solid' : 'plain'}
            color={index === 2 ? 'primary' : 'neutral'}
          >
            Third tab
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
}

export default Bids;
