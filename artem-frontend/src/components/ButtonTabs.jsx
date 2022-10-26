import * as React from "react";
import { Tab, TabList, Tabs, TabPanel } from "@mui/joy";
import "./ButtonTabs.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import itemData from "./bidsList";
import Header from "../components/Header";

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
            variant={index === 0 ? "solid" : "plain"}
            color={index === 0 ? "primary" : "neutral"}
          >
            Bids
          </Tab>
          <Tab
            variant={index === 1 ? "solid" : "plain"}
            color={index === 1 ? "primary" : "neutral"}
          >
            Watched
          </Tab>
        </TabList>
        <TabPanel value={0}>
          <ImageList sx={{ width: 500, height: 450 }}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>Current bid: {item.author}</span>}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </TabPanel>
        <TabPanel value={1}>
          <b>Second</b> tab panel
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Bids;
