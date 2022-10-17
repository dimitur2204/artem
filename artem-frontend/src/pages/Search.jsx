import React from "react";
import {
  InputAdornment,
  Container,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";
import CategoryList from "../components/search/CategoryList";
import Input from "../components/Input";

function Search() {
  const [value, setValue] = React.useState("");
  return (
    <Container>
      <Box
        sx={{ mt: "10px", display: "flex", justifyContent: "space-between" }}
      >
        <IconButton sx={{ pl: 0 }} color="primary">
          <SearchIcon />
        </IconButton>
        <Input
          endAdornment={
            <InputAdornment position="end">
              {value ? (
                <IconButton onClick={() => setValue("")}>
                  <CloseIcon />
                </IconButton>
              ) : null}
            </InputAdornment>
          }
          placeholder="What do you need?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
      </Box>

      {!value ? (
        <CategoryList />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "calc(70vh - 56px)",
          }}
        >
          <Typography sx={{}}>There are no results found...</Typography>
        </Box>
      )}
    </Container>
  );
}

export default Search;
