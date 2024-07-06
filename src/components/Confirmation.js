import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'bootstrap/dist/css/bootstrap.min.css';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstName, lastName, paymentAmount, paymentMethod } = location.state || {};

  if (!location.state) {
    navigate('/'); // Navigate to home or appropriate page if state is missing
    return null;
  }

  return (
    <div className="container mt-4">
      <Button
        className="mb-1"
        variant="text"
        color="secondary"
        startIcon={<ArrowBackIcon />}
        component={Link}
        to="/movie"
        style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}
      >
        Back
      </Button>
      <h2>Confirmation</h2>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Payment Amount:</strong> ${paymentAmount}</p>
      <p><strong>Payment Method:</strong> {paymentMethod}</p>
      <p className="mt-3 text-success">Thank you for your reservation!</p>
    </div>
  );
};

export default Confirmation;
