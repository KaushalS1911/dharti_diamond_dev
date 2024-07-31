

import { Box, Container, Grid, Typography } from '@mui/material';
import card2 from '../../assests/images/products/card2.png';
import card3 from '../../assests/images/products/card3.png';
import React from 'react';

function ProductSection3() {
    return (
      <div>
        <Box>
          <Container maxWidth="lg">
            <Box>
            <Box
              sx={{
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                padding: { lg: '55px 0', md: '20px 0', sm: '20px', xs: '20px 0' }
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  transform: { lg: 'translateX(10%)' }
                }}
              >
                <img
                  src={card2}
                  alt=""
                  style={{ width: '100%', maxWidth: '550px' }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '100%',
                    display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' }
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#c5d1e4',
                      color: '#000',
                      padding: '60px 60px 40px 60px',
                      width: '140%',
                      textAlign: 'start'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '25px',
                        fontWeight: '600',
                        color: '#000',
                        marginBottom: '20px'
                      }}
                    >
                      Parcel & Assortments
                    </Typography>
                    <Typography sx={{fontSize:"15px", fontWeight:"600"}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</Typography>
                    <Box sx={{ color: '#000' }}>
                     <ul>
                        <li>Microscope assorted parcels</li>
                        <li>Calibrated diamond parcel services</li>
                        <li>Colorless and H&A diamonds' assortment services</li>
                        <li>Specific color program as per customer's need</li>
                     </ul>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: { lg: 'none', md: 'flex', sm: 'block', xs: 'block' },justifyContent:{md:"center", sm:"center"}
                  }}
                >
                    <Box
                    sx={{
                        backgroundColor: '#c5d1e4',
                        color: '#000',
                        padding: '60px 60px 40px 60px',
                        width:{lg:"140%", md:"70%", sm:"80%"}, 
                        textAlign: 'start'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '25px',
                        fontWeight: '600',
                        color: '#000',
                        marginBottom: '20px'
                      }}
                    >
                      Parcel & Assortments
                    </Typography>
                    <Typography sx={{fontSize:"15px", fontWeight:"600"}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</Typography>
                    <Box sx={{ color: '#000' }}>
                     <ul>
                        <li>Microscope assorted parcels</li>
                        <li>Calibrated diamond parcel services</li>
                        <li>Colorless and H&A diamonds' assortment services</li>
                        <li>Specific color program as per customer's need</li>
                     </ul>
                    </Box>
                  </Box>
                </Box>

              </Box>
            </Box>

            {/* ===========================================================card-2====================================== */}
            <Box sx={{
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                marginTop:{lg:"70px", md:"40px", sm:"10px", sm:"10px"},
                padding: { lg: '40px 0', md: '20px 0', sm: '20px', xs: '20px 0' }
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  transform: { lg: 'translateX(-20%)', md: 'translateX(0)', sm: 'translateX(0)', xs: 'translateX(0)' },
                  display: { lg: 'start', md: 'flex', sm: 'flex', xs: 'flex' },
                  justifyContent: { lg: 'start', md: 'center', sm: 'center', xs: 'center' }
                }}
              >
                <img
                  src={card3}
                  alt=""
                  style={{ width: '100%', maxWidth: '550px' }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: '75%',
                    right: '-50%',
                    textAlign: 'start',
                    display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' },
                    width: '100%'
                  }}
                >
                  <Box
                    sx={{
                      
                      backgroundColor: '#c5d1e4',
                      color: '#000',
                      padding:"50px 50px 30px 50px"
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#000'
                      }}
                    >
                      Other Services
                    </Typography>
                    <Typography sx={{ fontSize: '15px', color: '#000' }}>
                     <ul>
                        <li>Bespoke quality sorting services</li>
                        <li>Customers specific product coding</li>
                        <li>Diamond support collaboration services</li>
                        <li>Laser inscription as per the brand's requirement</li>
                        <li>Provides goods with the grading as per Dharti's </li>
                        <li>arameters to save the cost of Certification</li>
                     </ul>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                textAlign: 'start',
                display: { lg: 'none', md: 'flex', sm: 'block', xs: 'block' },
                justifyContent:{md:"center", sm:"center"},
                margin: '0 auto'
              }}
            >
              <Box
                sx={{
                  border: '1px solid #c5d1e4',
                  backgroundColor: '#c5d1e4',
                  color: '#000',
                  padding: '50px',
                  width:{lg:"100%", md:"44%", sm:"80%"},
                }}
              >
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#000'
                  }}
                >
                  Hospitality
                </Typography>
                <Typography sx={{ fontSize: '15px', color: '#000' }}>
                  Just select your favourite beverage and snack and click Order.
                </Typography>
              </Box>
            </Box>
            
                
             
            </Box>
          </Container>
        </Box>
      </div>
    );
  }
export default ProductSection3;





                                    
                        