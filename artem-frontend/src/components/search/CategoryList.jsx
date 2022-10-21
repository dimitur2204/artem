import { Box } from "@mui/material";
import React from "react";
import theme from "../../theme";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "paintings",
    imageIndex: 4,
  },
  {
    title: "clay",
    imageIndex: 3,
  },
  {
    title: "woodwork",
    imageIndex: 2,
  },
  {
    title: "print",
    imageIndex: 1,
  },
  {
    title: "jewelry",
    imageIndex: 6,
  },
  {
    title: "miscellaneous",
    imageIndex: 5,
  },
];
function CategoryList() {
  return (
    <Box
      sx={{
        mt: theme.spacing(3),
        ":last-child": {
          mb: "66px",
        },
      }}
    >
      {categories.map((c) => {
        return (
          <Box key={c.imageIndex} sx={{ mb: theme.spacing(2) }}>
            <CategoryCard title={c.title} imageIndex={c.imageIndex} />
          </Box>
        );
      })}
    </Box>
  );
}

export default CategoryList;
