import {
    Box,
    Container,
    TextField,
    Button,
    InputAdornment,
    MenuItem,
    Select,
    FormControl,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  
  function Appointment() {
    const [event, setEvent] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");
    const [mobileNo, setMobileNo] = useState("");
  
    const handleEventChange = (event) => setEvent(event.target.value);
    const handleAppointmentTimeChange = (event) => setAppointmentTime(event.target.value);
    const handleMobileNoChange = (event) => setMobileNo(event.target.value);
  
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f2f5",
          minHeight: "100vh",
          py: 4,
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "32px", md: "40px" },
                fontWeight: "600",
                mb: 3,
              }}
            >
              Book Your Appointment
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              <Box sx={{ width: "100%", mb: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Name"
                  id="name"
                  sx={{ backgroundColor: "white" }}
                />
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Company Name"
                  id="companyName"
                  sx={{ backgroundColor: "white" }}
                />
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Email"
                  id="email"
                  sx={{ backgroundColor: "white" }}
                />
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Mobile No"
                  id="mobileNo"
                  value={mobileNo}
                  onChange={handleMobileNoChange}
                  sx={{ backgroundColor: "white" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}>
                <FormControl fullWidth>
                  <Select
                    labelId="event-label"
                    id="event"
                    value={event}
                    onChange={handleEventChange}
                    sx={{ backgroundColor: "white" }}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>Select Event</MenuItem>
                    <MenuItem value="event1">Event 1</MenuItem>
                    <MenuItem value="event2">Event 2</MenuItem>
                    <MenuItem value="event3">Event 3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}>
                <TextField
                  fullWidth
                  id="appointmentTime"
                  type="datetime-local"
                  value={appointmentTime}
                  onChange={handleAppointmentTimeChange}
                  sx={{ backgroundColor: "white" }}
                />
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Comment"
                  id="comment"
                  multiline
                  rows={4}
                  sx={{ backgroundColor: "white" }}
                />
              </Box>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 5,
                  backgroundColor: "#73829A",
                  color: "white",
                  height: "70px",
                  width: { xs: "100%", sm: "440px" },
                  fontSize: { xs: "18px", md: "24px" },
                  "&:hover": {
                    backgroundColor: "#5f6a8a",
                  },
                }}
              >
                Book Appointment
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }
  
  export default Appointment;
  