import React, { useState } from 'react';
import './Thumbnail.css';

function Thumbnail({ name, poster }) {
    const fallbackImage = 'https://test.create.diagnal.com/images/placeholder_for_missing_posters.png';
    const [imgSrc, setImgSrc] = useState(`https://test.create.diagnal.com/images/${poster}`);
    const handleError = () => {
        setImgSrc(fallbackImage);  // Update source to fallback image
    };
  return (
    <div className="thumbnail">
      <img src={imgSrc}  alt={name} onError={handleError} />
      <p>{name}</p>
    </div>
  );
}

export default Thumbnail;