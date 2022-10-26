import {
  IconButton,
  ImageListItem,
  ImageListItemBar,
  ImageList as ImageListMUI,
  Box,
  Typography,
  Container,
} from "@mui/material";
import React from "react";
import { FavoriteBorder } from "@mui/icons-material";
import theme from "../../theme";
function ImageList({ count, title, sx }) {
  return (
    <>
      {/* creating a image-grid component to reuse throughout the pages  */}
      <Container>
        <Typography fontSize="1.2rem">{title}</Typography>
      </Container>
      <ImageListMUI
        cols={3}
        gap={1}
        sx={{ marginTop: theme.spacing(1), ...sx }}
      >
        {Array.from(Array(3).keys()).map((item, index) => (
          <ImageListItem key={item.img}>
            {/* fetching a specific image */}
            <img
              src={`${process.env.PUBLIC_URL}/post-${index + 1}.jpg`}
              loading="lazy"
              alt="TODO: Add TITLE"
            />
            {count ? (
              <ImageListItemBar
                sx={{ backgroundColor: "transparent" }}
                position="bottom"
                style={{
                  marginBottom: theme.spacing(1),
                  marginRight: theme.spacing(1),
                }}
                // heart icon over the images (to display likes)
                actionIcon={
                  <Box
                    borderRadius="1000px"
                    backgroundColor="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    paddingX={theme.spacing(1)}
                  >
                    <IconButton
                      sx={{ color: "white", width: "25px", height: "25px" }}
                      aria-label={`like TODO: ADD TITLE`}
                    >
                      <FavoriteBorder
                        sx={{
                          fill: "rgba(0,0,0,0.4)",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </IconButton>
                    {/* displaying the amount of likes of each picture */}
                    <Typography fontSize="0.9rem" color="rgba(0,0,0,0.4)">
                      {count}
                    </Typography>
                  </Box>
                }
                actionPosition="right"
              />
            ) : null}
          </ImageListItem>
        ))}
      </ImageListMUI>
    </>
  );
}

export default ImageList;
