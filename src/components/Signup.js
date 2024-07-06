import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import signup from "../images/sign-up.webp";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, email, password, cpassword } = credentials;

    // Basic client-side validation example
    if (password !== cpassword) {
      props.showAlert("Passwords do not match", "danger");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
    
      const json = await response.json();
      console.log('Response:', json); // Log the response for debugging
    
      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        navigate("/");
        props.showAlert("Account created successfully", "success");
      } else {
        props.showAlert("Invalid details", "danger");
      }
    } catch (error) {
      console.error('Fetch error:', error);
      props.showAlert("Failed to create account", "danger");
    }
  }    

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='container mt-4'>
      <div className="row">
        <div className="col-md-7 d-flex flex-column align-items-left">
          <img className="img-fluid" src={signup} alt="register" style={{ width: "600px", height: "550px", objectFit: "cover" }} />
        </div>
        <div className="col-md-5">
          <Button className="mb-1" variant="text" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to="/" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>Home</Button>
          <h2>Create a new Account </h2>
          <p className="mb-4">Use your email to create a new account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Name*" id="name" name="name" autoComplete="current-password" onChange={onChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Email*" id="email" name="email" autoComplete="current-password" onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Password*" id="password" name="password" autoComplete="current-password" minLength={5} required onChange={onChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm Password*" id="cpassword" name="cpassword" autoComplete="current-password" minLength={5} required onChange={onChange} />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">I have read terms and conditions</label>
            </div>
            <button className="mb-4 btn btn-primary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem", width: "100px" }} type="submit">Register</button>
          </form>
          <p>Have an account? <Link to="/login">Login</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
