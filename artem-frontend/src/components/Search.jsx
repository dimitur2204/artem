import React, { useState } from "react";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export default function Search() {
  const [inputQuery, setInputQuery] = useState("");
  return (
    <OutlinedInput
      id="outlined-adornment-password"
      autoFocus
      value={inputQuery}
      onChange={setInputQuery}
      size="small"
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="toggle password visibility" edge="end">
            {inputQuery.length ? <CloseIcon /> : <SearchIcon />}
          </IconButton>
        </InputAdornment>
      }
      label="Search"
    />
  );
}
