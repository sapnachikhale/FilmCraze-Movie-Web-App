import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <img className='logo' alt='logo' src="https://banner2.cleanpng.com/20180323/ape/kisspng-art-film-logo-cinema-clip-art-movie-logo-cliparts-5ab587fb1000c4.1651552415218462670656.jpg" />
        <Link className="navbar-brand" style={{marginLeft:'15px'}} >FilmCraze</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search movies" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!localStorage.getItem('token') ? (
              <>
              <li className="nav-item">
                  <Link className="nav-link btn btn-success me-3" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-success me-3" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-success me-3" to="/signup">Signup</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary me-2" to="/movie">Movies</Link>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="btn btn-danger me-2">Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
