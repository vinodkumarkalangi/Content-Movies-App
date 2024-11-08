// src/pages/MovieDetail.js
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../contexts/DataContext';

function MovieDetail() {
  const { id } = useParams(); // Get the movie ID from the URL
  const { items } = useContext(DataContext);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Find the movie from the items list based on the ID from the URL
    const selectedMovie = items.find((item) => item.id === parseInt(id));
    setMovie(selectedMovie);
  }, [id, items]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{movie.name}</h1>
      <p>Add any other details you want</p> {/* Add any other details you want */}
    </div>
  );
}

export default MovieDetail;
