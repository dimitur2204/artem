import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import Box from "@mui/material/Box";
import "./ButtonTabs.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import itemData from "./bidsList";

export default function TabsVariants() {
  const [index, setIndex] = React.useState(0);
  return (
    <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
      <Tabs
        aria-label="solid tabs"
        value={index}
        onChange={(event, value) => setIndex(value)}
      >
        <TabList>
          <Tab variant={index === 0 ? "outlined" : "solid"}>First tab</Tab>
          <Tab variant={index === 1 ? "outlined" : "solid"}>Second tab</Tab>
          <Tab variant={index === 2 ? "outlined" : "solid"}>Third tab</Tab>
        </TabList>
      </Tabs>

      <Tabs
        aria-label="Outlined tabs"
        value={index}
        onChange={(event, value) => setIndex(value)}
      >
        <TabList variant="outlined">
          <Tab
            variant={index === 0 ? "soft" : "solid"}
            color={index === 0 ? "primary" : "neutral"}
          >
            First tab
          </Tab>
          <Tab
            variant={index === 1 ? "soft" : "solid"}
            color={index === 1 ? "info" : "neutral"}
          >
            Second tab
          </Tab>
          <Tab
            variant={index === 2 ? "soft" : "solid"}
            color={index === 2 ? "warning" : "neutral"}
          >
            Third tab
          </Tab>
        </TabList>
      </Tabs>

      <Tabs
        aria-label="Soft tabs"
        value={index}
        onChange={(event, value) => setIndex(value)}
      >
        <TabList variant="soft">
          <Tab
            variant={index === 0 ? "solid" : "solid"}
            color={index === 0 ? "primary" : "neutral"}
          >
            First tab
          </Tab>
          <Tab
            variant={index === 1 ? "solid" : "solid"}
            color={index === 1 ? "primary" : "neutral"}
          >
            Second tab
          </Tab>
          <Tab
            variant={index === 2 ? "solid" : "solid"}
            color={index === 2 ? "primary" : "neutral"}
          >
            Third tab
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
}

{
  /*
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
        subtitle={<span>by: {item.author}</span>}
        position="below"
      />
    </ImageListItem>
  ))}
</ImageList>;
  */
}
