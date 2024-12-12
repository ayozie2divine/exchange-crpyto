import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const RegistrationPage = () => {
  const navigate = useNavigate();

  // Individual useState for each field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
      address,
    };

    try {
      const response = await axios.post(
        "https://fullstack-student-backend.onrender.com/api/auth",
        formData
      );
      console.log("Registration Successful:", response.data);
      setSuccess("Registration processing.... Please wait.");
      setTimeout(() => navigate("/Chizzyexchange/Login"), 3000);
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
        width : "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "white",
        padding: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          borderRadius: 3,
          boxShadow: 10,
          paddingRight:4,
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
            Create Your Account
          </Typography>
          {error && (
            <Typography
              color="error"
              variant="body2"
              align="center"
              gutterBottom
            >
              {error}
            </Typography>
          )}
          {success && (
            <Typography
              color="success"
              variant="body2"
              align="center"
              gutterBottom
            >
              {success}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  fullWidth
                  multiline
                  rows={3}
                  required
                />
              </Grid>
              <Grid item xs={12}>
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
                  {loading ? <ClipLoader size={20} color="#fff" /> : "Register"}
                </Button>
              </Grid>
            </Grid>
            <Link to='/Chizzyexchange/Login'>
            <Typography variant="h5" component="h3" align="center" paddingTop="17px" gutterBottom>
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