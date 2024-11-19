import React, { useState } from 'react';
import './Thumbnail.css';

function Thumbnail({ name, poster }) {
  const fallbackImage = 'https://test.create.diagnal.com/images/placeholder_for_missing_posters.png';
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="thumbnail">
      {isLoading && (
        <img 
          src={fallbackImage} 
          alt="Fallback" 
          className="thumbnail-fallback" 
        />
      )}
      <img
        src={`https://test.create.diagnal.com/images/${poster}`}
        alt={name}
        onLoad={handleImageLoad}
        onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
      <p>{name}</p>
    </div>
  );
}

export default Thumbnail;