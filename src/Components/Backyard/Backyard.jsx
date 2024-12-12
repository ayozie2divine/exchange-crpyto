import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      // alert("Login successful!");
      setTimeout(() => navigate("/Chizzyexchange"),); // Navigate to home after a delay

      // Perform post-login actions like redirecting to a dashboard
    } catch (err) {
      console.error("Error:", err);
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your credentials or REGISTER"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f9",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        {error && (
          <Typography color="error" variant="body2" align="center" gutterBottom>
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            
          />
          <Box sx={{ mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? <ClipLoader /> : "Login"}
            </Button>
            <Link to='/Chizzyexchange/Register/Signup'>
            <Typography variant="h5" component="h3" align="center"  paddingTop="17px" gutterBottom>
           or Register
           </Typography>
           </Link>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;