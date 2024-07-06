import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Reservation.css'; 

const Reservation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { screenId, movieName, showTime, numberOfSeats, amount, selectedSeats } = location.state;

  const handlePayment = () => {
    // Navigate to the payment page with necessary details
    navigate('/payment', {
      state: {
        selectedSeats,
        numberOfSeats,
        paymentAmount: amount // Pass the amount as paymentAmount
      }
    });
  };

  return (
    <div className="reservation-container">
      <div className="reservation-content">
        <Button
          variant="text"
          color="secondary"
          startIcon={<ArrowBackIcon />}
          component={Link}
          to='/movie' // Replace with actual route if needed
          style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}
        >
          Back
        </Button>
        <h2>Your Reservation Details</h2>
        <p><strong>Movie Name:</strong> {movieName}</p>
        <p><strong>Show Time:</strong> {showTime}</p>
        <p><strong>Number of Seats:</strong> {numberOfSeats}</p>
        <p><strong>Amount:</strong> Rs {amount}</p>
        <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
        {/* Add other reservation details here */}
        <Button
          variant="contained"
          color="primary"
          onClick={handlePayment}
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

export default Reservation;
