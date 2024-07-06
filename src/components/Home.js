import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='mt-4'>
      
      <div className="d-flex flex-row justify-content-between ">
        <div className="d-flex">
          <div className="p-2">Movies</div>
          <div className="p-2">Stream</div>
          <div className="p-2">Events</div>
          <div className="p-2">Plays</div>
          <div className="p-2">Sports</div>
          <div className="p-2">Activities</div>
        </div>
        <div className="d-flex ml-auto fixed">
          <div className="p-2">Corporates</div>
          <div className="p-2">Offers</div>
          <div className="p-2">GiftCards</div>
        </div>
      </div>
      <div className='img-conatiner'>
      <img  className='mt-4' src="https://watermark.lovepik.com/photo/50083/8574.jpg_wh1200.jpg" alt='..' style={{ width: '1300px',height: '300px'}}/>
      <div className="text-overlay" style={{marginLeft:'-500px',marginTop:'-100px'}}>
       <h2>FilmCraze</h2>
       <h1>
      <span>STR</span>
      <span style={{ color: 'red', fontSize: '48px' }}>E</span>
      <span>AM</span>
    </h1>
      </div>
      </div>
<h2 className='mt-4 mb-4'>Recommended Movies</h2>
<div className="row">
      <div className="col-md-3 " >
        <img src="https://i.ytimg.com/vi/gGl_wKLARiU/maxresdefault.jpg" style={{ width: '300px',height: '375px',borderRadius:'15px' }} className="card1" alt="..." />
        <div className="card-body mt-2 m-3">
    <h5 className="card-title">Kalki 2898 AD</h5>
    <p className="card-text">Action/Sci-Fi/Thiller</p>
      </div>
      </div>
      <div className="col-md-3 " >
        <img src="https://www.classificationoffice.govt.nz/media/images/kill_movie_poster.width-700.jpg" style={{width: '300px', height: '375px',borderRadius:'15px' }} className="card1" alt="..." />
        <div className="card-body mt-2 m-3">
    <h5 className="card-title">Kill</h5>
    <p className="card-text">Action/Thiller</p>
      </div>
      </div>
      <div className="col-md-3 " >
        <img src="https://assets.gadgets360cdn.com/pricee/assets/product/202405/munjya_1716463991.jpg" style={{width: '300px', height: '375px',borderRadius:'15px' }} className="card1" alt="..." />
        <div className="card-body mt-2 m-3">
    <h5 className="card-title">Munjya</h5>
    <p className="card-text">Comedy/Horror</p>
      </div>
      </div>
      <div className="col-md-3 " >
        <img src="https://rangmarathi.com/wp-content/uploads/2024/04/Sangharsh-Yoddha-Manoj-Jarange-Patil-Movie-1-810x1024.jpg" style={{width: '300px', height: '375px',borderRadius:'15px' }} className="card1" alt="..." />
        <div className="card-body mt-2 m-3">
    <h5 className="card-title">Amhi Jarange-Garajvant Marathyancha Ladha</h5>
    <p className="card-text">Biography/Drama</p>
      </div>
      </div>
      </div>
      <div className="container mt-3">
        <p className="lead">Explore our collection of movies, select your seats, and enjoy the show!</p>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://i.pinimg.com/736x/79/36/a0/7936a09c17dae24b6552c0f766298a18.jpg" style={{ width: '100%', maxHeight: '300px' }} alt='Discover Movies' />
              <div className="card-body">
                <h5 className="card-title">Discover Movies</h5>
                <p className="card-text">Browse through a wide selection of movies across various genres.</p>
                <Link to="/login" className="btn btn-primary">Explore Movies</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://w3layouts.com/wp-content/uploads/2018/04/movie_seat_selection_Free23-03-2018_475740117.jpg" className="card-img-top" alt="Movie Seats" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Select Your Seats</h5>
                <p className="card-text">Choose your preferred seats and enjoy a personalized movie experience.</p>
                <Link to="/login" className="btn btn-primary">Select Seats</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://cdn.dribbble.com/userupload/3923004/file/original-44bc24b444008d9f0d1527e9f15e10f5.jpg?resize=400x0" alt="Make a Reservation" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Make a Reservation</h5>
                <p className="card-text">Reserve your tickets in advance and skip the queue at the cinema.</p>
                <Link to="/login" className="btn btn-primary">Reserve Now</Link>
              </div>
            </div>
          </div>
        </div>
<div className='img'>
  <img src="https://images.pond5.com/movie-theater-film-reel-background-footage-048418476_iconl.jpeg" className='mt-3' alt='..' style={{ width: '1300px',height: '100px',borderRadius:'15px',marginTop:'-100px'}}/>
  <div className="text" style={{marginLeft:'300px',marginTop:'-80px',color:'yellow'}}>
  <h1>Endless Entertainment Anytime,Anywhere</h1>
  </div>
  
</div>
      <div className='logo2' style={{marginTop:'40px'}}>
        <h6>Privacy Note</h6>
        <p>
        We value your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our services and tell you about your privacy rights and how the law protects you.
        </p>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
