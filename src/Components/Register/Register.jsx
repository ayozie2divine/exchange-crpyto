import React, { useState } from "react";
import './Register.css'
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  InputAdornment,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import eye icons

const RegistrationPage = () => {
  const navigate = useNavigate();

  // Individual useState for each field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };

    try {
      const response = await axios.post(
        "https://fullstack-student-backend.onrender.com/api/auth",
        formData
      );
      console.log("Registration Successful:", response.data);
      setSuccess("Registration processing.... Please wait.");
      setTimeout(() => navigate("/Chizzyexchange/Register/Signup/Successful"), 3000);
    } catch (err) {
      console.error("Error:", err);
      setError(
        err.response?.data?.error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, rgba(6, 25, 172, 0.84), rgba(58, 213, 234, 0.3), rgba(9, 8, 5, 6.8))",
        backgroundColor: "antiquewhite",
        padding: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          borderRadius: 3,
          boxShadow: 10,
          paddingRight: 4,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333" }}
          >
          Register!!
          </Typography>
          {error && (
            <Typography color="error" variant="body2" align="center" gutterBottom>
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="success" variant="body2" align="center" gutterBottom>
              {success}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={11.5} sm={6}>
                <TextField
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={11.5} sm={5.5}>
                <TextField
                  label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={11.5}>
                <TextField
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={11.5}>
                <TextField
                  label={showPassword ? "text" : "password"}
                   // Conditionally toggle password visibility
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button className="eye2btn"
                          onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                          sx={{
                            width: "0",
                            color: "gray",
                            padding: "0 10px",
                            cursor: "pointer",
                            left: 80, 
                             // Position the button inside the text field
                          
                          }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />} {/* Eye icon to toggle visibility */}
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={11.5}>
                <TextField
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={11.9}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={loading}
                  sx={{
                    backgroundColor: "#2ebf91",
                    ":hover": { backgroundColor: "#27a983" },
                  }}
                >
                  {loading ? <ClipLoader size={20} color="blue" /> : "Register"}
                </Button>
              </Grid>
            </Grid>
            <Link to='/Chizzyexchange/Login'>
              <Typography
                variant="h5"
                component="h3"
                align="center"
                paddingTop="17px"
                fontFamily="cursive"
                gutterBottom
                sx={{
                  color: "black",
                  ":hover": { color: "blue", cursor: "pointer", textDecoration: "underline" },
                }}
              >
                or Login
              </Typography>
            </Link>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegistrationPage;
