import React from 'react'
import BottomNavigationMUI from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import BalanceIcon from '@mui/icons-material/Balance';
import AddCircleOutlined from '@mui/icons-material/AddCircleOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function BottomNavigation() {
  const [value,setValue] = React.useState()

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigationMUI
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Home" icon={<HomeIcon />} />
  <BottomNavigationAction label="Balance" icon={<BalanceIcon />} />
  <BottomNavigationAction label="Add art" icon={<AddCircleOutlined />} />
  <BottomNavigationAction label="Moodboard" icon={<BookmarkBorderIcon />} />
  <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />
</BottomNavigationMUI>
</Paper>
  )
}
