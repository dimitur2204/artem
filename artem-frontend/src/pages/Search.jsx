import React from "react";
import {
  InputAdornment,
  InputBase,
  Container,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";
import CategoryList from "../components/search/CategoryList";

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
        <InputBase
          id="input-with-icon-textfield"
          hiddenLabel
          variant="filled"
          size="small"
          endAdornment={
            <InputAdornment position="end">
              {value ? (
                <IconButton onClick={() => setValue("")}>
                  <CloseIcon />
                </IconButton>
              ) : null}
            </InputAdornment>
          }
          sx={{
            background: "rgba(0, 0, 0, 0.06)",
            borderRadius: 1000,
            padding: "0.2rem 0.7rem",
            width: "100%",
          }}
          placeholder="What do you need?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
