import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'bootstrap/dist/css/bootstrap.min.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedSeats, numberOfSeats, paymentAmount } = location.state;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [upiId, setUpiId] = useState('');

  const handlePayment = () => {
    if (firstName && lastName && paymentMethod) {
      // Handle the payment processing logic here
      alert('Payment successful!');
      navigate('/confirmation', { state: { firstName, lastName, paymentAmount, paymentMethod } });
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <div className="container mt-4">
      <Button
        className="mb-1"
        variant="text"
        color="secondary"
        startIcon={<ArrowBackIcon />}
        component={Link}
        to="/reservation/:screenId/reserve"
        style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}
      >
        Back
      </Button>
      <h2>Payment</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Payment Amount:</label>
          <input
            type="text"
            className="form-control"
            value={paymentAmount}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="paymentMethod" className="form-label">Payment Method:</label>
          <select
            className="form-select"
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="gpay">Google Pay</option>
            <option value="phonepe">PhonePe</option>
          </select>
        </div>

        {paymentMethod === 'creditCard' && (
          <>
            <div className="mb-3">
              <label htmlFor="creditCardNumber" className="form-label">Credit Card Number:</label>
              <input
                type="text"
                className="form-control"
                id="creditCardNumber"
                value={creditCardNumber}
                onChange={(e) => setCreditCardNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="securityCode" className="form-label">Security Code:</label>
              <input
                type="text"
                className="form-control"
                id="securityCode"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="expirationDate" className="form-label">Expiration Date:</label>
              <input
                type="month"
                className="form-control"
                id="expirationDate"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
            </div>
          </>
        )}

        {(paymentMethod === 'gpay' || paymentMethod === 'phonepe') && (
          <div className="mb-3">
            <label htmlFor="upiId" className="form-label">UPI ID:</label>
            <input
              type="text"
              className="form-control"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </div>
        )}

        <button type="button" className="btn btn-primary" onClick={handlePayment}>Proceed to Payment</button>
      </form>
    </div>
  );
};

export default Payment;
