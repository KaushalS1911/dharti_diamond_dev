import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import heroImg from "../../assets/image/AboutImg/heroImgSection3.png"
import heroImg2 from "../../assets/image/AboutImg/heroImg2Section3.png"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import halfStar from "../../assets/image/AboutImg/Half-Star-5.png"
import star6 from "../../assets/image/AboutImg/Star-6.png"

function AboutSection3() {
    return (
        <div>
            <Box sx={{ backgroundColor: "#2c3440", color: "#fff", paddingBottom: "100px", margin: { lg: "30px 0 0 0", md: "40px 0 0 0 ", sm: "40px 0 0 0", xs: "40px 0 0 0" } }}>
                {/* <Container> */}
                {/* <Box sx={{ padding: "60px 0 0 0" }}>
                    <Typography sx={{ textAlign: "center", fontWeight: "600", fontSize: "23px" }}>
                        Our Values Define Our Action
                    </Typography>
                </Box> */}
                <Box sx={{ textAlign: "center", padding: "60px 0 0 0" }}>
                    <button class="border-el-btn" style={{ fontSize: "23px", fontWeight: "600", color: "#fff" }}>
                        Our Values Define Our Action
                        <span class="b1"></span>
                        <span class="b2"></span>
                        <span class="b3"></span>
                        <span class="b4"></span>
                    </button>
                </Box>

                <Box sx={{ textAlign: "end" }}>
                    <img src={halfStar} alt="" style={{ width: "3%" }} />
                </Box>

                <Box sx={{}}>
                    <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center", padding: { lg: "40px 0", md: "20px 0", sm: "20px", xs: "20px 0" } }}>
                        <Box sx={{ position: "relative", transform: { lg: "translateX(10%)", md: "translateX(0)", sm: "translateX(0)", xs: "translateX(0)" }, display: { lg: "start", md: "flex", sm: "flex", xs: "flex" }, justifyContent: { lg: "start", d: "center", sm: "center", xs: "center" }, }}>
                            <img src={heroImg} alt="" style={{ width: "60%" }} />
                            <Box sx={{ position: "absolute", top: "51%", left: "36%", display: { lg: "block", md: "none", sm: "none", xs: "none" } }}>
                                <Box sx={{ border: "1px solid #c5d1e4", backgroundColor: "#c5d1e4", color: "#000", padding: "35px 20px ", width: "63%" }}>
                                    <Typography sx={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: "600" }}>Our Mission</Typography>
                                    <Typography sx={{ fontSize: "14px", color: "#000", margin: "14px 0 0 0", lineHeight: "25px" }}>Deliver “The Kiran Experience” to our Global Clientele through an unmatched bouquet of products and services of the highest quality, backed by the assurance of our world class manufacturing infrastructure, continuous appraisal and consistent innovation.</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                
                <Box sx={{ display: { lg: "none", md: "block", sm: "block" } }}>
                    <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                        <Box sx={{ border: "1px solid #c5d1e4", backgroundColor: "#c5d1e4", color: "#000", padding: "35px 20px ", width: "60%", }}>
                            <Typography sx={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: "600" }}>Our Mission</Typography>
                            <Typography sx={{ fontSize: "14px", color: "#000", margin: "14px 0 0 0", lineHeight: "25px" }}>Deliver “The Kiran Experience” to our Global Clientele through an unmatched bouquet of products and services of the highest quality, backed by the assurance of our world class manufacturing infrastructure, continuous appraisal and consistent innovation.</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center", padding: { lg: "55px 0", md: "20px 0", sm: "20px", xs: "20px 0" } }}>
                    <Box>
                        <Box sx={{ position: "relative" }}>
                            <img src={heroImg2} alt="" style={{ width: "60%", transform: "translateX(44%)" }} />
                            <Box sx={{ position: "absolute", top: "51%", right: "32%", display: { lg: "block", md: "none", sm: "none", xs: "none" } }}>
                                <Box sx={{ border: "1px solid #c5d1e4", backgroundColor: "#c5d1e4", color: "#000", padding: "20px 20px ", width: "70%" }}>
                                    <Typography sx={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: "600" }}>Our Vision</Typography>
                                    <Typography sx={{ fontSize: "15px", color: "#000", margin: "14px 0 0 0" }}>To be the preferred diamantaire to the world by embracing the core values of :</Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Box sx={{ margin: "10px 0 0 0" }}>
                                            <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PASSION</Typography>
                                            <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PARTNERSHIP</Typography>
                                            <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PROGRESS</Typography>
                                            <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PERFORMANCE</Typography>
                                            <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PRINCIPLES</Typography>
                                        </Box>
                                        <Box sx={{ margin: "10px 0 0 0" }}>
                                            <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Enhance Nature’s beauty</Typography>
                                            <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Work together to win</Typography>
                                            <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Move forever forward</Typography>
                                            <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Add value blending skills and technology</Typography>
                                            <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Uphold ethics to exce</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ position: "absolute", top: "40%", left: "-20%" }}>
                                <img src={star6} alt="" style={{ width: "65%" }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: { lg: "none", md: "block", sm: "block" } }}>
                    <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                        <Box sx={{ border: "1px solid #c5d1e4", backgroundColor: "#c5d1e4", color: "#000", padding: "20px 20px" }}>
                            <Typography sx={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: "600" }}>Our Vision</Typography>
                            <Typography sx={{ fontSize: "15px", color: "#000", margin: "14px 0 0 0" }}>To be the preferred diamantaire to the world by embracing the core values of :</Typography>
                            {/* <Box sx={{ display: { lg: "flex", md: "flex", sm: "block", xs: "block" }, justifyContent: "space-between" }}>
                                <Box sx={{ margin: "10px 0 0 0" }}>
                                    <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PASSION</Typography>
                                    <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PARTNERSHIP</Typography>
                                    <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PROGRESS</Typography>
                                    <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PERFORMANCE</Typography>
                                    <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PRINCIPLES</Typography>
                                </Box>
                                <Box sx={{ margin: "10px 0 0 0" }}>
                                    <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Enhance Nature’s beauty</Typography>
                                    <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Work together to win</Typography>
                                    <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Move forever forward</Typography>
                                    <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Add value blending skills and technology</Typography>
                                    <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Uphold ethics to exce</Typography>
                                </Box>
                            </Box> */}
                        </Box>
                    </Box>
                </Box>

                {/* </Container> */}
            </Box>
        </div>
    )
}

export default AboutSection3;