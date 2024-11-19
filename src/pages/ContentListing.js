import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import Thumbnail from '../components/Thumbnail';

function ContentListing() {
  const { filteredData, isFetching } = useContext(DataContext);

  return (
    <div className="grid">
      {isFetching ? (
        <div className="loading-placeholder">
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      ) : filteredData.length > 0 ? (
        // Show thumbnails when data is available
        filteredData.map((item, index) => (
          <Thumbnail key={index} name={item.name} poster={item.poster} />
        ))
      ) : (
        // Show message when no data is available
        <p>Not found</p>
      )}
    </div>
  );
}

export default ContentListing;