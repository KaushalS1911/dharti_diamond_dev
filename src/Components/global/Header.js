import React from 'react'
import {Box,Container,Typography    } from '@mui/material'
import logo from '../../assets/images/Home/logo.png'

function Header() {
  return (
    <div>
     <Box sx={{backgroundColor:"black",color:"#73829a",paddingTop:"10px "}}>
        <Container>
            <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
              <Box>  <img src={logo} alt="" /> </Box>
              <Box sx={{display:"flex",padding:"10px"}}>
              <Typography sx={{paddingRight:"35px",fontSize:"13px",fontWeight:"600"}}>Home</Typography>
              <Typography sx={{paddingRight:"35px",fontSize:"13px",fontWeight:"600"}}>About</Typography>
              <Typography sx={{paddingRight:"35px",fontSize:"13px",fontWeight:"600"}}>Diamond</Typography>
              <Typography sx={{paddingRight:"35px",fontSize:"13px",fontWeight:"600"}}>Product</Typography>
              <Typography sx={{paddingRight:"35px",fontSize:"13px",fontWeight:"600"}}>Contact Us</Typography>
              </Box>
              <Box sx={{width:"10%",border:"solid 1px white",whiteSpace:"nowrap",color:"white"}}><Typography sx={{fontSize:"12px",padding:"6px"}}>Book Appoinment</Typography>
              </Box>    
            
            </Box>
        </Container>
     </Box>
    </div>
  )
}


export default Header
