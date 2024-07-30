import { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "../../assets/css/index.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login() {
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
            Welcome to Dharti
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
              name="Username"
              label="Username"
              id="Username"
              margin="normal"
              sx={{ backgroundColor: "white", mb: 2 }}
            />
            <TextField
              fullWidth
              name="Password"
              label="Password"
              id="Password"
              margin="normal"
              sx={{ backgroundColor: "white", mb: 2 }}
              type={showPassword ? "text" : "password"}
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
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                mb: 2,
              }}
            >
              <FormControlLabel
                control={<Checkbox name="rememberMe" color="primary" />}
                label="Remember Me"
                sx={{ color: "#73829A" }}
              />
              <Typography
                sx={{ color: "#2C3440", fontWeight: "700", cursor: "pointer" }}
              >
                Forget Password?
              </Typography>
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
              Login
            </Button>
            <Box sx={{ display: "flex", mt: 3 }}>
              <Typography sx={{ color: "grey" }}>
                Don’t have login details?
              </Typography>
              <Typography sx={{ color: "#2C3440", fontWeight: "700", ml: 1 }}>
                Register
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
