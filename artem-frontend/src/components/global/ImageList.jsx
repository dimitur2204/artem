import {
  IconButton,
  ImageListItem,
  ImageListItemBar,
  ImageList as ImageListMUI,
  Box,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import React from "react";
import { FavoriteBorder } from "@mui/icons-material";
import theme from "../../theme";
import { Link } from "react-router-dom";
function ImageList({ posts, count, title, sx }) {
  return (
    <>
      {/* creating a image-grid component to reuse throughout the pages  */}
      <Container>
        <Typography fontSize="1.2rem">{title}</Typography>
      </Container>
      {posts ? <ImageListMUI
        cols={3}
        gap={1}
        sx={{ marginTop: theme.spacing(1), ...sx }}
      >
        {posts.map((post, index) => (
          <ImageListItem as={Link} to={`/post/${post.id}`} key={post.id}>
            {/* fetching a specific image */}
            <img
              src={post.url}
              loading="lazy"
              alt={post.title}
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
                      aria-label={post.title}
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
      </ImageListMUI> : 
      <Box width="100%" display="flex" justifyContent="center" alignItems="center" padding={2}>
        <CircularProgress />
      </Box>}
    </>
  );
}

export default ImageList;
