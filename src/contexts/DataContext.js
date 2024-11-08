// // src/contexts/DataContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import { fetchData } from '../services/api';

// export const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [items, setItems] = useState([]); // Stores all fetched data
//   const [filteredData, setFilteredData] = useState([]); // Stores filtered data

//   useEffect(() => {
//     fetchData(1, setItems); // Initially fetch data (page 1)
//   }, []);

//   useEffect(() => {
//     if (items.length > 0) {
//       setFilteredData(items); // Set filtered data only when `items` change
//     }
//   }, [items]);

//   return (
//     <DataContext.Provider value={{ items, setItems, filteredData, setFilteredData }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// src/contexts/DataContext.js
// src/contexts/DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from '../services/api';
import { useLazyLoad } from '../hooks/useLazyLoad';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]); // All data
  const [page, setPage] = useState(1); // Tracks the current page
  const [filteredData, setFilteredData] = useState([]); // Data to display

  // Custom hook to handle lazy loading
  useLazyLoad(setPage);

  useEffect(() => {
    const getData = async () => {
      const newItems = await fetchData(page);
      console.log("New items fetched:", newItems); // Debugging log

      if (Array.isArray(newItems)) {
        setItems((prevItems) => [...prevItems, ...newItems]); // Append new items
      } else {
        console.warn('Fetched data is not an array:', newItems);
      }
    };

    getData();
  }, [page]);

  useEffect(() => {
    if (items.length > 0) {
      setFilteredData(items);
    }
  }, [items]);

  return (
    <DataContext.Provider value={{ items, setItems, filteredData, setFilteredData }}>
      {children}
    </DataContext.Provider>
  );
};
