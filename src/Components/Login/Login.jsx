import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Box, Grid, InputAdornment } from "@mui/material";
import axios from "axios";
import { BounceLoader, ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import eye icons
import "./Login.css";  // Make sure to create the CSS file for the animation
import chizzy from "../../assets/chizzy.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [pageLoading, setPageLoading] = useState(true); // Page loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://fullstack-student-backend.onrender.com/api/auth/login",
        { email, password }
      );
      console.log("Login Successful:", response);
      setTimeout(() => navigate("/Chizzyexchange"), 2000); // Navigate after a delay
    } catch (err) {
      console.error("Error:", err);
      setError(
        err.response?.data?.message ||
          "Email or Password doesn't match."
      );
    } finally {
      setLoading(false);
    }
  };

  // Simulate a page loading delay or any async operation
  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false); // Hide the page loader after 5 seconds (you can adjust this)
    }, 5000);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, rgba(6, 25, 172, 0.84), rgba(58, 213, 234, 0.3), rgba(9, 8, 5, 6.8))",
      }}
    >
      {pageLoading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000, // Ensure it covers everything
          }}
        >
          <div className="bounce-loader-container">
            <BounceLoader size={200} color="blue" loading={true} />
            <img src={chizzy} alt="Chizzy" className="bouncing-image" />
          </div>
        </Box>
      )}

      {/* Main Content */}
      {!pageLoading && (
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            padding: 3,
            paddingRight: 5,
            borderRadius: 22,
            backgroundColor: "#fff",
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Login!!
          </Typography>
          {error && (
            <Typography color="error" variant="body2" align="center" gutterBottom>
              {error}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
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
                  label="Password"
                  type={showPassword ? "text" : "password"} // Conditionally toggle password visibility
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                          sx={{
                            width: "0",
                            color: "gray",
                            padding: "0 10px",
                            cursor: "pointer",
                            left: 90, 
                          }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />} {/* Eye icon to toggle visibility */}
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 3 }}>
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
                {loading ? <ClipLoader size={20} color="blue" /> : "Login"}
              </Button>
              <Link
                to="/Chizzyexchange/Register/Signup"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h6"
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
                  or Register
                </Typography>
              </Link>
            </Box>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default LoginPage;
