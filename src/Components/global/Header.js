
import React, { useState } from 'react';
import { Box, Container, Typography, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/Home/logo.png';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div>
      <Box sx={{ backgroundColor: "black", color: "#73829a", paddingTop: "10px" }}>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
              <img src={logo} alt="" />
            </Box>
            <IconButton 
              color="inherit" 
              aria-label="open drawer" 
              edge="start" 
              onClick={toggleDrawer(true)} 
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, padding: "10px",cursor:"pointer" }}>
              <Typography sx={{ paddingRight: "35px", fontSize: "13px", fontWeight: "600","&:hover":{
                color:"white"
              }}}>Home</Typography>
              <Typography sx={{ paddingRight: "35px", fontSize: "13px", fontWeight: "600" ,"&:hover":{
                color:"white"
              }}}>About</Typography>
              <Typography sx={{ paddingRight: "35px", fontSize: "13px", fontWeight: "600" ,"&:hover":{
                color:"white"
              }}}>Diamond</Typography>
              <Typography sx={{ paddingRight: "35px", fontSize: "13px", fontWeight: "600","&:hover":{
                color:"white"
              } }}>Product</Typography>
              <Typography sx={{ paddingRight: "35px", fontSize: "13px", fontWeight: "600","&:hover":{
                color:"white"
              } }}>Contact Us</Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' }, width: "10%", border: "solid 1px white", whiteSpace: "nowrap", color: "white",cursor:"pointer" }}>
              <Typography sx={{ fontSize: "12px", padding: "6px" }}>Book Appointment</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Home', 'About', 'Diamond', 'Product', 'Contact Us'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem button>
              <ListItemText primary="Book Appointment" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default Header;

