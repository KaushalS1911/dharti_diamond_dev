import { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "../../assets/css/index.css";

function Registration() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "", 
    birthdate: "",
    anniversaryDate: "",
  });

  function handleClick() {
    console.log(userData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
        py: { xs: 2, sm: 4 }, 
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: 2, 
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "40px" }, 
              fontWeight: "600",
              textAlign: "center",
              mb: 3,
            }}
          >
            Registration
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
            <TextField
              fullWidth
              name="firstName"
              label="First Name"
              id="firstName"
              margin="normal"
              sx={{ backgroundColor: "white", mb: 2 }} 
              value={userData.firstName}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="lastName"
              label="Last Name"
              id="lastName"
              margin="normal"
              sx={{ backgroundColor: "white", mb: 2 }}
              value={userData.lastName}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="email"
              label="Email"
              id="email"
              margin="normal"
              sx={{ backgroundColor: "white", mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon sx={{ color: "#73829A" }} />
                  </InputAdornment>
                ),
              }}
              value={userData.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="userName"
              label="Username"
              id="userName"
              margin="normal"
              sx={{ backgroundColor: "white", mb: 2 }}
              value={userData.userName}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="password"
              label="Password"
              id="password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              sx={{ backgroundColor: "white", mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      sx={{ color: "#73829A" }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={userData.password}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              margin="normal"
              sx={{ backgroundColor: "white", mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      sx={{ color: "#73829A" }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={userData.confirmPassword}
              onChange={handleChange}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, 
                justifyContent: "space-between",
                width: "100%",
                mb: 2,
              }}
            >
              <TextField
                name="birthdate"
                label="Birthdate"
                id="birthdate"
                type="date"
                InputLabelProps={{ shrink: true }}
                margin="normal"
                sx={{
                  backgroundColor: "white",
                  color: "#73829A",
                  flex: 1,
                  mr: { xs: 0, sm: 1 }, 
                  mb: { xs: 2, sm: 0 }, 
                }}
                value={userData.birthdate}
                onChange={handleChange}
              />
              <TextField
                name="anniversaryDate"
                label="Anniversary Date"
                id="anniversaryDate"
                type="date"
                InputLabelProps={{ shrink: true }}
                margin="normal"
                sx={{
                  backgroundColor: "white",
                  color: "#73829A",
                  flex: 1,
                  ml: { xs: 0, sm: 1 }, 
                  mb: { xs: 2, sm: 0 }, 
                }}
                value={userData.anniversaryDate}
                onChange={handleChange}
              />
            </Box>
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                mt: 3,
                mb: 5,
                backgroundColor: "#73829A",
                color: "white",
                height: "70px",
                width: "100%",
                maxWidth: "440px", 
                fontSize: { xs: "18px", md: "24px" }, 
                "&:hover": {
                  backgroundColor: "#5f6a8a",
                },
              }}
            >
              Register
            </Button>
            <Box sx={{ display: "flex",  mt: 3 }}>
              <Typography sx={{ color: "grey" }}>
                Already have login details?
              </Typography>
              <Typography sx={{ color: "#2C3440", fontWeight: "700" }}>
                Login
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Registration;