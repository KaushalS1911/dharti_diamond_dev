import { Box, Container, Grid, Typography } from '@mui/material'
import card2 from "../../assests/images/products/card2.png";
import card3 from '../../assests/images/products/card3.png';

import React from 'react'

function ProductSection3() {
  return (
    <div>
      <Box>
        <Container maxWidth={"lg"}>
            <Box sx={{}}>
                    <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center", padding: { lg: "55px 0", md: "20px 0", sm: "20px", xs: "20px 0" } }}>
                    <Box>
                        <Box sx={{ position: "relative", transform:{lg:"translateX(10%)"}}}>
                            <img src={card2} alt="" style={{ width: "60%" }} />
                            <Box sx={{ position: "absolute", top: "51%", right: "58%" , display:{lg:"block", md:"none", sm:"none", xs:"none"}}}>
                                <Box sx={{ border: "1px solid #c5d1e4", backgroundColor: "#c5d1e4", color: "#000", padding: "20px 20px ", width: "90%" , textAlign:"start"}}>
                                    <Typography sx={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: "600" }}>Parcel & Assortments</Typography>
                                    <Typography sx={{ fontSize: "14px", color: "#000", margin: "14px 0 0 0", fontWeight:"600" }}>Contrary to popular belief, Lorem Ipsum is not simply random text</Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <ul style={{fontSize:"14px", marginTop:"20px"}}> 
                                        <li style={{lineHeight:"30px"}}>Microscope assorted parcels</li>
                                        <li  style={{lineHeight:"30px"}}>Calibrated diamond parcel services</li>
                                        <li  style={{lineHeight:"30px"}}>Colorless and H&A diamonds' assortment services</li>
                                        <li  style={{lineHeight:"30px"}}>Specific color program as per customer's need</li>
                                    </ul>
                                        
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: { lg: "none", md: "block", sm: "block", xs: "block" }}}>
                                <Box sx={{ border: "1px solid #c5d1e4", backgroundColor: "#c5d1e4", color: "#000", padding: "20px 20px ", width: "90%" , textAlign:"start"}}>
                                    <Typography sx={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: "600" }}>Parcel & Assortments</Typography>
                                    <Typography sx={{ fontSize: "14px", color: "#000", margin: "14px 0 0 0", fontWeight:"600" }}>Contrary to popular belief, Lorem Ipsum is not simply random text</Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <ul style={{fontSize:"14px", marginTop:"20px"}}> 
                                        <li style={{lineHeight:"30px"}}>Microscope assorted parcels</li>
                                        <li  style={{lineHeight:"30px"}}>Calibrated diamond parcel services</li>
                                        <li  style={{lineHeight:"30px"}}>Colorless and H&A diamonds' assortment services</li>
                                        <li  style={{lineHeight:"30px"}}>Specific color program as per customer's need</li>
                                    </ul>
                                        
                                    </Box>
                                </Box>
                            </Box>
             
                    </Box>
                </Box>

                    <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center", padding: { lg: "40px 0", md: "20px 0", sm: "20px", xs: "20px 0" } }}>
                        <Box sx={{ position: "relative", transform: { lg: "translateX(10%)", md: "translateX(0)", sm: "translateX(0)", xs: "translateX(0)" }, display: { lg: "start", md: "flex", sm: "flex", xs: "flex" }, justifyContent: { lg: "start", d: "center", sm: "center", xs: "center" }, }}>
                            <img src={card3} alt="" style={{ width: "67%" }} />


                            <Box sx={{ position: "absolute", top: "51%", left: "40%",textAlign:"start", display: { lg: "block", md: "none", sm: "none", xs: "none" } }}>
                                <Box sx={{ border: "1px solid #c5d1e4", backgroundColor: "#c5d1e4", color: "#000", padding: "35px 20px ", width: "100%" }}>
                                    <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>Other Services</Typography>
                                    <ul>
                                        <li style={{lineHeight:"28px"}}>Bespoke quality sorting services</li>
                                        <li style={{lineHeight:"28px"}}>Diamond support collaboration services</li>
                                        <li style={{lineHeight:"28px"}}>Customers specific product coding</li>
                                        <li style={{lineHeight:"28px"}}>Laser inscription as per the brand's requirement</li>
                                        <li style={{lineHeight:"28px"}}>Provides goods with the grading as per Dharti's</li>
                                        <li style={{lineHeight:"28px"}}>parameters to save the cost of Certification</li>
                                    </ul>
                                </Box>
                            </Box>

                            </Box>

                            
                    </Box>
                        <Box sx={{textAlign:"start", display: { lg: "none", md: "block", sm: "block", xs: "block" } }}>
                                <Box sx={{ border: "1px solid #c5d1e4", backgroundColor: "#c5d1e4", color: "#000", padding: "35px 20px " }}>
                                    <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>Other Services</Typography>
                                    <ul>
                                        <li style={{lineHeight:"28px"}}>Bespoke quality sorting services</li>
                                        <li style={{lineHeight:"28px"}}>Diamond support collaboration services</li>
                                        <li style={{lineHeight:"28px"}}>Customers specific product coding</li>
                                        <li style={{lineHeight:"28px"}}>Laser inscription as per the brand's requirement</li>
                                        <li style={{lineHeight:"28px"}}>Provides goods with the grading as per Dharti's</li>
                                        <li style={{lineHeight:"28px"}}>parameters to save the cost of Certification</li>
                                    </ul>
                                </Box>
                        </Box>                
                    </Box>
        </Container>
      </Box>
    </div>
  )
}

export default ProductSection3;

                                    
                        