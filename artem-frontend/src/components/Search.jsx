import React, { useState } from 'react'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

export default function Search() {
    const [focus,setFocus] = useState(false);
    const [inputQuery,setInputQuery] = useState('');
  return (
    <OutlinedInput
    id="outlined-adornment-password"
    value={inputQuery}
    onChange={setInputQuery}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => setFocus(true)}
          onMouseDown={() => setFocus(true)}
          edge="end"
        >
          {inputQuery.length ? <CloseIcon /> : <SearchIcon />}
        </IconButton>
      </InputAdornment>
    }
    label="Password"
  />

  )
}
