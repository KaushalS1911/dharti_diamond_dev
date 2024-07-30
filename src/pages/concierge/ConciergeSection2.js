import { Box, Container, Typography } from '@mui/material';
import card1 from '../../assests/images/concierge/card1.png';
import card2 from '../../assests/images/concierge/cardcrop2.png';
import card3 from '../../assests/images/concierge/card3.png';
import React from 'react';

function ConciergeSection2() {
  return (
    <div>
      <Box>
        <Container>
          <Box>
            {/* =========================================card1============================ */}
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
                  src={card1}
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
                      backgroundColor: '#2c3440',
                      color: '#000',
                      padding: '60px',
                      width: '120%',
                      textAlign: 'start'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '25px',
                        fontWeight: '600',
                        color: '#c5d1e4',
                        marginBottom: '20px'
                      }}
                    >
                      Transport Roster
                    </Typography>
                    <Box sx={{ color: '#FFF' }}>
                      Just type your pick up time and destination, you will have a car waiting for you. Our aim is to organise every trip be it for long or short distance.
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
                      border: '1px solid #c5d1e4',
                      backgroundColor: '#2c3440',
                      color: '#000',
                      padding: '60px',
                      width:{lg:"100%", md:"44%", sm:"80%"},
                      textAlign: 'start'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '25px',
                        fontWeight: '600',
                        color: '#c5d1e4',
                        marginBottom: '20px'
                      }}
                    >
                      Transport Roster
                    </Typography>
                    <Box sx={{ color: '#FFF' }}>
                      Just type your pick up time and destination, you will have a car waiting for you. Our aim is to organise every trip be it for long or short distance.
                    </Box>
                  </Box>
                </Box>

              </Box>
            </Box>

            {/* ===========================================================card-2====================================== */}
            <Box
              sx={{
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
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
                  src={card2}
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
                      border: '1px solid #c5d1e4',
                      backgroundColor: '#c5d1e4',
                      color: '#000',
                      padding: '50px'
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

            {/* ===========================================card-3============================================================ */}
            <Box
              sx={{
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                padding: { lg: '55px 0', md: '20px 0', sm: '20px', xs: '20px 0' },
                marginTop: '30px'
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  transform: { lg: 'translateX(10%)' }
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
                    top: '60%',
                    right: '94%',
                    display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' }
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#2c3440',
                      color: '#000',
                      padding: '50px 60px',
                      width: '120%',
                      textAlign: 'start'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '25px',
                        fontWeight: '600',
                        color: '#c5d1e4',
                        marginBottom: '20px'
                      }}
                    >
                      Client Relationship Executive
                    </Typography>
                    <Box sx={{ color: '#FFF' }}>
                      Client Relationship Executive accompanies customers from the car to office. We are trying to provide personalised service for every client that walks into our office.
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: { lg: 'none', md: 'flex', sm: 'block', xs: 'block' },
                  justifyContent:{md:"center", sm:"center"}
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#2c3440',
                      color: '#000',
                      padding: '60px',
                      textAlign: 'start',
                      width:{lg:"100%", md:"44%", sm:"80%"},
                  
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '25px',
                        fontWeight: '600',
                        color: '#c5d1e4',
                        marginBottom: '20px'
                      }}
                    >
                      Client Relationship Executive
                    </Typography>
                    <Box sx={{ color: '#FFF' }}>
                      Client Relationship Executive accompanies customers from the car to office. We are trying to provide personalised service for every client that walks into our office.
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default ConciergeSection2;
