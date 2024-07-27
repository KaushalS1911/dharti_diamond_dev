


import { Box, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import d1 from "../../assets/images/global/Dimond1.png";
import d2 from "../../assets/images/global/d2.jpg";
import d3 from "../../assets/images/global/Diamond3.png";
import d4 from "../../assets/images/global/Diamond4.png";
import d5 from "../../assets/images/global/Diamond5.png";
import d6 from "../../assets/images/global/Diamond6.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#5c687b",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        zIndex: 1,
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#5c687b",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        zIndex: 1,
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    />
  );
}

function HeroSection() {
  const slider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const SliderSection = [
    {
      img: d1,
      Dimond_Title1: "The Art and",
      Dimond_Title2: "Brilliance",
      Dimond_Title3: "of Diamond",
    },
    {
      img: d2,
    },
    {
      img: d3,
    },
    {
      img: d4,
    },
    {
      img: d5,
    },
    {
      img: d6,
    },
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Slider {...slider}>
        {SliderSection.map((item, index) => (
          <Box key={index} sx={{ position: "relative" }}>
            <img src={item.img} alt="" style={{ width: "100%" }} />
            <Box sx={{ position: "absolute", top: "25%", left: "20%", textAlign: "start" }}>
              <Typography sx={{ color: "white", fontSize: "35px" }}>{item.Dimond_Title1}</Typography>
              <Typography sx={{ color: "white", fontSize: "35px" }}>{item.Dimond_Title2}</Typography>
              <Typography sx={{ color: "white", fontSize: "35px" }}>{item.Dimond_Title3}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default HeroSection;
