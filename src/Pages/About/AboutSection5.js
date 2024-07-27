
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImg1 from "../../assets/image/AboutImg/sliderImg_1.png"
import sliderImg2 from "../../assets/image/AboutImg/sliderImg_2.png"

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


function AboutSection5() {

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                style={{ position: "absolute", top: "50%", right: "30px", transform: "translateX(250%)" }}
                onClick={onClick}
            >
                <KeyboardDoubleArrowRightIcon sx={{ color: "#fff", backgroundColor: "#8e99ad", borderRadius: "50%", fontSize: "20px", padding: "4px" }} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                style={{ position: "absolute", top: "50%", left: "0px", transform: "translateX(-79%)" }}
                onClick={onClick}
            >
                <KeyboardDoubleArrowRightIcon sx={{ color: "#fff", backgroundColor: "#8e99ad", borderRadius: "50%", fontSize: "20px", padding: "4px" }} />
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Container maxWidth={"lg"} sx={{ border: "none" ,paddingBottom:"100px"}}>
            <Box sx={{ textAlign: "center", margin: "70px 0 0 0" }}>
                    <Typography sx={{ fontWeight: "600", fontSize: "26px" }}>Management Team</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: "center" }}>
                    <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                        <Box sx={{ width: "100%", marginTop: "50px" }}>
                            <Grid item xs={12}>
                                <Slider {...settings} style={{columnGap: "100px"}}>
                                    <Box >
                                        <img src={sliderImg1} alt="lisa"  style={{objectFit: "contain"}} />
                                    </Box>
                                    <Box >
                                        <img src={sliderImg2} alt="alex"   />
                                    </Box>
                                </Slider>
                            </Grid>
                        </Box>

                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection5;




