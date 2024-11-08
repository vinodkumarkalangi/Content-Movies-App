// src/components/Grid.js
import React from 'react';
import Thumbnail from './Thumbnail';

function Grid({ items }) {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <Thumbnail key={index} name={item.name} posterImage={item['poster-image']} />
      ))}
    </div>
  );
}

export default Grid;