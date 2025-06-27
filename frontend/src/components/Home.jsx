import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToCalendar = () => {
    navigate("/calendar9"); // update this route as per your actual path
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f4f8",
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to the Appointment Calendar App 📅
      </Typography>
      <Typography variant="h6" gutterBottom>
        View and manage your appointments with filtering and quick event
        creation.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={goToCalendar}
        sx={{ mt: 4 }}
      >
        Go to Calendar
      </Button>
    </Box>
  );
};

export default Home;
