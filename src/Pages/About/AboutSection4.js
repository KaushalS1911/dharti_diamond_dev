import React from 'react'
import diamondImg from "../../assets/image/AboutImg/diamondImg1.png"
import { Box, Container, Grid, Typography } from '@mui/material';

function AboutSection4() {
    return (
        <div>
            <Box sx={{ backgroundImage: `url(${diamondImg})`,padding:"130px", justifyContent: "center", display: "flex" ,alignItems:"center"}}>
                <Container maxWidth={'xl'}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{justifyContent:"center",display:"flex",color:"#fff",textAlign:"center"}}>
                    <Grid item xs={4} lg={4} md={6} sm={12}>
                        <Box sx={{fontSize:"30px",fontWeight:"500"}}>40+</Box>
                        <Typography sx={{fontSize:"16px"}} mt={1}>Years of Promise</Typography>
                    </Grid>
                    <Grid item xs={4} lg={4} md={6} sm={12}>
                        <Box sx={{fontSize:"30px",fontWeight:"500"}}>3000+</Box>
                        <Typography sx={{fontSize:"16px"}} mt={1}>Active customer</Typography>
                    </Grid>
                    <Grid item xs={4} lg={4} md={6} sm={12}>
                        <Box sx={{fontSize:"30px",fontWeight:"500"}}>4500+</Box>
                        <Typography sx={{fontSize:"16px"}} mt={1}>Dedicated Artisan</Typography>
                    </Grid>
                </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default AboutSection4;