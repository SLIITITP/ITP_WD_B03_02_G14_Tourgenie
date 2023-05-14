import React, { useState } from 'react';
<<<<<<< HEAD
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{ backgroundColor: "#3A1078"}} position='fixed'>
            <Toolbar>
            <NavLink style={{ color: "white"}}>
            <Typography>
                T<PersonPinCircleOutlinedIcon/>urGenie
            </Typography>
            </NavLink>
            <Tabs>
            <Tab />

            </Tabs>
            </Toolbar>
        </AppBar>
=======
import { AppBar, Tab, Tabs, Toolbar, Typography, IconButton, InputBase } from '@mui/material';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  const [searchOpen, setSearchOpen] = useState(false);
  
  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  }

  return (
    <div>
      <AppBar 
        sx={{ 
          backgroundColor: "#3A1078", 
          position: 'fixed', 
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '0px 0px 15px 15px',
          margin: '0px 0px 20px 0px'
        }}
      >
        <Toolbar>
          <NavLink style={{ color: "white"}}>
            <Typography sx={{ fontSize: 45 }}>
              T<PersonPinCircleOutlinedIcon/>urGenie
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto"}}
            textColor='inherit' 
            indicatorColor='primary'
            value={value} 
            onChange={(e, val) => setValue(val)}
          >
            <Tab />
          </Tabs>
          <IconButton color="inherit" onClick={handleSearchClick}>
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
        {searchOpen && 
          <Toolbar sx={{ backgroundColor: "#3A1078", color: "white" }}>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ flexGrow: 1 }}
            />
          </Toolbar>
        }
      </AppBar>
>>>>>>> d2e79b22933d788dc568ad7586b8a2251a0a9f61
    </div>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> d2e79b22933d788dc568ad7586b8a2251a0a9f61
