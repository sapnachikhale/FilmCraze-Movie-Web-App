import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SeatSelection = () => {
  const { screenId } = useParams();
  const navigate = useNavigate();
  const [screen, setScreen] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [maxSeats, setMaxSeats] = useState(60);

  const [formData, setFormData] = useState({
    movieName: '',
    name: '',
    phone: '',
    date: '',
    showTime: '',
    numberOfSeats: 0,
    amount: 0
  });

  useEffect(() => {
    const fetchScreenDetails = async () => {
      try {
        const url = `http://localhost:5000/api/screen/${screenId}`;
        console.log('Fetching screen details from:', url);
        const response = await axios.get(url);
        setScreen(response.data);
        setMaxSeats(response.data.maxCapacity);
        // Set default date to today
        const today = new Date().toISOString().substr(0, 10);
        setFormData({ ...formData, date: today });
      } catch (error) {
        console.error('Error fetching screen details:', error);
      }
    };
    fetchScreenDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenId]);

  const handleSeatClick = (seat) => {
    // Check if the number of selected seats matches or exceeds the entered numberOfSeats
    if (selectedSeats.length >= formData.numberOfSeats && !selectedSeats.includes(seat)) {
      alert(`You can only select ${formData.numberOfSeats} seats.`);
      return;
    }
  
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };  
  

  const handleReservation = () => {
    const { movieName, name, phone, date, showTime, numberOfSeats } = formData;
    if (movieName && name && phone && date && showTime && numberOfSeats > 0 && selectedSeats.length > 0) {
      navigate(`/reservation/${screenId}/reserve`, {
        state: { ...formData, selectedSeats }
      });
    } else {
      alert('Please enter all details and select at least one seat.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Prevent entering past dates for 'date'
    if (name === 'date') {
      const today = new Date().toISOString().substr(0, 10);
      if (value < today) {
        alert('Please select a future date.');
        return;
      }
    }
  
    // Prevent entering negative values for 'numberOfSeats'
    if (name === 'numberOfSeats' && parseInt(value) < 0) {
      alert('Number of seats cannot be negative.');
      return;
    }
  
    // Update the formData state
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  
    // Automatically calculate amount based on number of seats
    if (name === 'numberOfSeats') {
      const amount = parseInt(value, 10) * 250; // Rs 250 per seat
      setFormData(prevState => ({
        ...prevState,
        amount
      }));
    }
  };
  
  if (!screen) {
    return <p>Loading screen details...</p>;
  }

  return (
    <div className="container">
      <h2 className="text-center mb-4">Select Your Seats - {screen.name}</h2>

      <form className="row g-3 mb-4">
        <div className="col-md-6">
          <label htmlFor="movieName" className="form-label">Movie Name</label>
          <input type="text" className="form-control" id="movieName" name="movieName" value={formData.movieName} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="date" className="form-label">Date</label>
          <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleChange} />
        </div>

        <div className="col-md-6">
          <label htmlFor="showTime" className="form-label">Select Show Time:</label>
          <select className="form-select" id="showTime" name="showTime" value={formData.showTime} onChange={handleChange}>
            <option value="9:00 AM">9:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value='9:00 PM'>9:00 PM</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="numberOfSeats" className="form-label">Number of Seats</label>
          <input type="number" className="form-control" id="numberOfSeats" name="numberOfSeats" value={formData.numberOfSeats} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input type="text" className="form-control" id="amount" name="amount" value={`Rs ${formData.amount}`} readOnly />
        </div>
      </form>

      <h3 className="text-center mb-4">Seat Selection</h3>
      <div className="d-flex justify-content-center mb-4 ">
      <span className="badge bg-success me-2">Selected seat</span>
      <span className="badge bg-danger me-2">Reserved Seat</span>
      <span className="badge bg-light text-dark me-2">Empty Seat</span>
      </div>
      <div className="seat-grid d-flex justify-content-center mb-4">
        {screen.seatMap.map(row => (
          <div key={row.rowNumber} className="d-flex justify-content-center mb-2">
            {row.seats.map(seat => {
              const seatId = `${row.rowNumber}-${seat.seatNumber}`;
              const isAvailable = seat.status === 'available';
              const isSelected = selectedSeats.includes(seatId);
              const btnClass = `btn seat-btn ${isSelected ? 'btn-success' : isAvailable ? 'btn-outline-secondary' : 'btn-danger'}`;

              return (
                <button
                  key={seatId}
                  className={btnClass}
                  disabled={!isAvailable}
                  onClick={() => handleSeatClick(seatId)}
                >
                  {seatId}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="row mt-4">
        <div className="col-lg-6">
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            component={Link}
            to="/movie"
            className="me-2"
          >
            Back
          </Button>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <Button
            variant="contained"
            color="primary"
            onClick={handleReservation}
            disabled={!formData.movieName || !formData.name || !formData.phone || !formData.date || !formData.showTime || formData.numberOfSeats <= 0 || selectedSeats.length === 0}
          >
            Proceed to Reservation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
