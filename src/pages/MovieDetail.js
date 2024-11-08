import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../contexts/DataContext';

function MovieDetail() {
  const { id } = useParams();
  const { items } = useContext(DataContext);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = items.find((item) => item.id === parseInt(id));
    setMovie(selectedMovie);
  }, [id, items]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{movie.name}</h1>
      <p>Add any other details you want</p> {}
    </div>
  );
}

export default MovieDetail;
