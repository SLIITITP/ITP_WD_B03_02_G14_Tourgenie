import image from '../images/tourgenie.png';
import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import { NavLink } from "react-router-dom";

const HeaderBar = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{ backgroundColor: "#3A1078"}} position='fixed'>
            <Toolbar>
            <NavLink style={{ color: "white"}}>
            <Typography>
            <img src={image} alt="icon" height="70px" />
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
            </Toolbar>
        </AppBar>
    </div>
  );
};

export default HeaderBar;
