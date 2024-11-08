import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import Thumbnail from '../components/Thumbnail';

function ContentListing() {
  const { filteredData } = useContext(DataContext);

  return (
    
    <div className="grid">
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <Thumbnail key={index} name={item.name} poster={item['poster-image']} />
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}

export default ContentListing;