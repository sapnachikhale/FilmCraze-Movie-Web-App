import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const movies = [
  {
    id: 1,
    title: 'Interstellar',
    genre: 'Adventure',
    showtimes: ['9:00 AM', '3:00 PM'],
    poster: 'https://m.media-amazon.com/images/I/91VzZtKC0zL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 1,
    title: 'Titanic',
    genre: 'Romance',
    showtimes: ['12:00 AM', '6:00 PM'],
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtqkMZxxsuxdVQEfsR3wfPE2qspDNl-F78Q&s'
  },
  {
    id: 1,
    title: 'Gladiator',
    genre: 'Action',
    showtimes: ['9:00 PM'],
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png'
  },
  {
    id: 2,
    title: 'Jurassic Park',
    genre: 'Adventure',
    showtimes: ['9:00 AM', '3:00 PM'],
    poster: 'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg'
  },
  {
    id: 2,
    title: 'The Godfather',
    genre: 'Crime',
    showtimes: ['12:00 AM', '6:00 PM'],
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWU4BB_TIirPXQyr6BJpNkh0aYJ3HuhOxlg&s'
  },
  {
    id: 2,
    title: 'Forrest Gump',
    genre: 'Drama',
    showtimes: ['9:00 PM'],
    poster: 'https://musicart.xboxlive.com/7/40025100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
  }
];

const MovieList = () => {
  const navigate = useNavigate();

  const handleCardClick = (movie) => {
    if (movie.id >= 4) {
      navigate(`/seat-selection2/${movie.id}`, { state: { movieName: movie.title } });
    } else {
      navigate(`/seat-selection/${movie.id}`, { state: { movieName: movie.title } });
    }
  };

  return (
    <div className="container mt-4">
      <h3>New Streaming</h3>
      <div className="row mt-4">
        {movies.map(movie => (
          <div key={movie.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={movie.poster} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text"><strong>Genre:</strong> {movie.genre}</p>
                <p className="card-text"><strong>Showtimes:</strong></p>
                <ul className="list-unstyled">
                  {movie.showtimes.map((showtime, index) => (
                    <li key={index}>{showtime}</li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary"
                  onClick={() => handleCardClick(movie)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
