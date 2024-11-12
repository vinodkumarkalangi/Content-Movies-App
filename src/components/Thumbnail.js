import React from 'react';
import './Thumbnail.css';

function Thumbnail({ name, poster }) {
  const fallbackImage = 'https://test.create.diagnal.com/images/placeholder_for_missing_posters.png';
    
    return (
        <div className="thumbnail">
            <img 
                src={`https://test.create.diagnal.com/images/${poster}`}
                alt={name}
                onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}
            />
            <p>{name}</p>
        </div>
    );
}

export default Thumbnail;