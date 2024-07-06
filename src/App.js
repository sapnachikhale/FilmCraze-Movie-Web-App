// App.js
import './App.css'
import React ,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Login from './components/Login';
import Home from './components/Home';
import Alert from './components/Alert';
import Signup from './components/Signup';
import SeatSelection from './components/SeatSelection';
import Reservation from './components/Reservation';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import Movielist from './components/Movielist';



const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <Router>
      <Navbar />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/movie" element={<Movielist />} />
          <Route path="/seat-selection/:screenId" element={<SeatSelection />} />
          <Route path="/reservation/:screenId/reserve" element={<Reservation />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/login" element={<Login showAlert={showAlert}/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
