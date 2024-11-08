import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from '../services/api';
import { useLazyLoad } from '../hooks/useLazyLoad';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  // Custom hook to handle lazy loading
  useLazyLoad(setPage);

  useEffect(() => {
    const getData = async () => {
      const newItems = await fetchData(page);
      console.log("New items fetched:", newItems);

      if (Array.isArray(newItems)) {
        setItems((prevItems) => [...prevItems, ...newItems]);
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
