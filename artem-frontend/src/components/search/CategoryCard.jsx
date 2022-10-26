import { Box, Typography } from "@mui/material";
import React from "react";

// function for each category card to get a fitting title and img
function CategoryCard({ title, imageIndex, link }) {
  return (
    // showcasing images for our cagetory cards
    <Box
    // fetching a specific image from our public folder
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/category-${imageIndex}.jpg)`,
        position: "relative",
        zIndex: 0,
        width: "100%",
        height: 115,
        borderRadius: 5,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          width: "100%",
          height: "100%",
          borderRadius: 5,
        }}
      />
      {/* adding the title of each cagetory over the img */}
      <Typography
        variant="h3"
        fontFamily="quiche-sans"
        textTransform="uppercase"
        fontSize="2rem"
        fontWeight="500"
        sx={{
          position: "absolute",
          bottom: 10,
          left: 10,
          zIndex: 1,
          color: "white",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default CategoryCard;
