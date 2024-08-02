import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import star1 from "../../assets/image/AboutImg/Star-1.png";
import star2 from "../../assets/image/AboutImg/Star-2.png";
import star3 from "../../assets/image/AboutImg/Star-3.png";
import star4 from "../../assets/image/AboutImg/Star-4.png";
import card1 from "../../assets/diamond/card 1.png";
import card2 from '../../assets/diamond/card 2.png';
import card3 from '../../assets/diamond/card 3.png';
import card4 from '../../assets/diamond/card 4.png';


function DiamondSection() {
  return (
    <div>
      <div>
        <Container maxWidth={"xl"}>
          <Box>
            <Box
              sx={{
                display: "flex",
                fontFamily: "Poppins",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "17px", fontWeight:"600" }}>Home/</Typography>
              <Typography sx={{ color: "#7b8aa0", fontSize: "17px" }}>
                Diamond
              </Typography>
            </Box>

            <Box
              sx={{
                textAlign: "start",
                display: { lg: "block", md: "block", sm: "none", xs: "none" },
              }}
            >
              <Typography>
                <img
                  src={star1}
                  alt=""
                  style={{ width: "2.5%", padding: "4px 0 0px 0" }}
                />
              </Typography>
              <Typography>
                <img
                  src={star2}
                  alt=""
                  style={{ width: "3%", margin: "0 0 10px 10px" }}
                />
              </Typography>
            </Box>

            <Box sx={{ textAlign: "center", margin: "30px 0 0 0" }}>
            <button class="border-el-btn" style={{fontSize:"22px", fontWeight:"600"}}>
              Diamond We Deal In
                <span class="b1"></span>
                <span class="b2"></span>
                <span class="b3"></span>
                <span class="b4"></span>
            </button>
            </Box>

            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <Box
                sx={{textAlign: "center", margin: "24px 0 0 0", width:{lg:"50%", md:"50%", sm:"70%",xs:"70%"}}}
              >
                <Box sx={{ fontSize: "16px", color: "#7b8aa0", marginTop:"10px" }}>
                Built on the legacy of trust, ethics and more than 4 decades of excellence, DDPL is synonymous to competence and innovation in diamond manufacturing, catering customers worldwide with finest
                quality diamonds and simultaneously elevating the norms of paramount business values.

                </Box>
                <Box
                  sx={{
                    fontSize: "16px",
                    color: "#7b8aa0",
                    margin: "20px 0 20px 0",
                  }}
                >
                  The firm takes pride in ensuring our clients to have a rich and fruitful buying experience through our bespoke list of services curated for brand owners and distributors. Our commitment to business relationships is what gives us a competitive edge over others.
                </Box>
              </Box>
            </Box>


            <Box
              sx={{
                textAlign: "end",
                display: { lg: "block", md: "block", sm: "none", xs: "none" },
              }}
            >
              <Typography>
                <img
                  src={star3}
                  alt=""
                  style={{ width: "2%", padding: "4px 0 0px 0" }}
                />
              </Typography>
              <Typography>
                <img
                  src={star4}
                  alt=""
                  style={{ width: "3.5%", margin: "0 0 10px 10px" }}
                />
              </Typography>
            </Box>
          </Box>
        </Container>
        {/* =========================================card-section====================================== */}

        <Box sx={{ backgroundColor: "#000", color: "#FFF", padding:"40px 0" }}>

         <Container maxWidth={"lg"}>
         <Grid
            container
            spacing={5}
            sx={{display: "flex", justifyContent: "center", marginTop:"20px"}}
          >
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{order:{lg:"1",md:"1",sm:"1",xs:"1"}}}>
              <Box sx={{ padding: "10px", textAlign:"start"}}>

                <div class="border-el-btn buttonBorder">
                  <div style={{paddingTop:"13px", fontWeight:"600", fontSize:"20px"}}>
                    Certified Diamonds

                    <span class="b1"></span>
                    <span class="b2"></span>
                    <Typography sx={{fontSize:"15px"}}>Lorem Ipsum is simply dummy text of the printing.</Typography>
                  </div>
                  </div>

                <Typography sx={{padding:"17px", fontSize:"13px", lineHeight:{lg:"30px", md:"20px", sm:"20px", xs:"20px"}}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}  sx={{order:{lg:"2",md:"2",sm:"2",xs:"2"}}}>
              <Box>
                <img
                  src={card1}
                  alt=""
                  style={{ width: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={5}
            sx={{display: "flex", justifyContent: "center", marginTop:"20px"}}
          >
             <Grid item lg={6} md={6} sm={12} xs={12} border={"1px solid #000"} sx={{order:{lg:"1",md:"1",sm:"2",xs:"2"}}}>
              <Box>
                <img
                  src={card2}
                  alt=""
                  style={{ width: "100%" }}
                />
              </Box>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{order:{lg:"2",md:"2",sm:"1",xs:"1"}}}>
              <Box sx={{ padding: "10px", textAlign:"start"}}>
                <div class="border-el-btn buttonBorder">
                  <div style={{paddingTop:"13px", fontWeight:"600", fontSize:"20px"}}>
                    Loose Diamonds

                    <span class="b1"></span>
                    <span class="b2"></span>
                    <Typography sx={{fontSize:"15px"}}>Lorem Ipsum is simply dummy text of the printing.</Typography>
                  </div>
                  </div>
                <Typography sx={{padding:"10px 34px 0 34px", fontSize:"13px", lineHeight:{lg:"30px", md:"20px", sm:"20px", xs:"20px"}}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </Box>
            </Grid>
           
          </Grid>

          <Grid
            container
            spacing={5}
            sx={{display: "flex", justifyContent: "center", marginTop:"20px"}}
          >
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{order:{lg:"1",md:"1",sm:"1",xs:"1"}}}>
              <Box sx={{ padding: "10px", textAlign:"start"}}>
                <div class="border-el-btn buttonBorder">
                  <div style={{paddingTop:"13px", fontWeight:"600", fontSize:"20px"}}>
                    Fancy Diamonds

                    <span class="b1"></span>
                    <span class="b2"></span>
                    <Typography sx={{fontSize:"15px"}}>Lorem Ipsum is simply dummy text of the printing.</Typography>
                  </div>
                  </div>
                <Typography sx={{padding:"17px", fontSize:"13px", lineHeight:{lg:"30px", md:"20px", sm:"20px", xs:"20px"}}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}  sx={{order:{lg:"2",md:"2",sm:"2",xs:"2"}}}>
              <Box>
                <img
                  src={card3}
                  alt=""
                  style={{ width: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={5}
            sx={{display: "flex", justifyContent: "center", marginTop:"20px"}}
          >
             <Grid item lg={6} md={6} sm={12} xs={12} border={"1px solid #000"} sx={{order:{lg:"1",md:"1",sm:"2",xs:"2"}}}>
              <Box>
                <img
                  src={card4}
                  alt=""
                  style={{ width: "100%" }}
                />
              </Box>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{order:{lg:"2",md:"2",sm:"1",xs:"1"}}}>
              <Box sx={{ padding: "10px", textAlign:"start"}}>
                <div class="border-el-btn buttonBorder">
                  <div style={{paddingTop:"13px", fontWeight:"600", fontSize:"20px"}}>
                    Loose Diamonds

                    <span class="b1"></span>
                    <span class="b2"></span>
                    <Typography sx={{fontSize:"15px"}}>Lorem Ipsum is simply dummy text of the printing.</Typography>
                  </div>
                  </div>
                <Typography sx={{padding:"10px 34px 0 34px", fontSize:"13px", lineHeight:{lg:"30px", md:"20px", sm:"20px", xs:"20px"}}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </Box>
            </Grid>
           
          </Grid>

          <Grid
            container
            spacing={5}
            sx={{display: "flex", justifyContent: "center", marginTop:"20px"}}
          >
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{order:{lg:"1",md:"1",sm:"1",xs:"1"}}}>
              <Box sx={{ padding: "10px", textAlign:"start"}}>
                <div class="border-el-btn buttonBorder">
                  <div style={{paddingTop:"13px", fontWeight:"600", fontSize:"20px"}}>
                    Fancy Diamonds

                    <span class="b1"></span>
                    <span class="b2"></span>
                    <Typography sx={{fontSize:"15px"}}>Lorem Ipsum is simply dummy text of the printing.</Typography>
                  </div>
                  </div>
                <Typography sx={{padding:"17px", fontSize:"13px", lineHeight:{lg:"30px", md:"20px", sm:"20px", xs:"20px"}}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}  sx={{order:{lg:"2",md:"2",sm:"2",xs:"2"}}}>
              <Box>
                <img
                  src={card3}
                  alt=""
                  style={{ width: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>


          

        
         </Container>

        </Box>
      </div>
    </div>
  );
}

export default DiamondSection;








