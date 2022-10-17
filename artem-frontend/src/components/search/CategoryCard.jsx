import { Box, Typography } from "@mui/material";
import React from "react";

function CategoryCard({ title, imageIndex, link }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(/category-${imageIndex}.jpg)`,
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
      <Typography
        variant="h3"
        fontFamily="quiche-sans"
        textTransform="uppercase"
        fontSize="2rem"
        fontWeight="bold"
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
