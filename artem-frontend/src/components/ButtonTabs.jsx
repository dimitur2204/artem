import * as React from "react";
import { Tab, TabList, Tabs, TabPanel } from "@mui/joy";
import "./ButtonTabs.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { itemData1, itemData2 } from "./bidsList";
import theme from "../theme";

function Bids() {
  const [index, setIndex] = React.useState(0);
  return (
    <div>
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
        <TabPanel
          value={0}
          style={{
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <ImageList sx={{ width: "100%", height: "100%" }}>
            {itemData1.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: "100%" }}
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
        <TabPanel
          value={1}
          style={{
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <ImageList sx={{ width: "100%", height: "100%" }}>
            {itemData2.map((item) => (
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
      </Tabs>
    </div>
  );
}

export default Bids;
