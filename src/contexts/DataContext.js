import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from '../services/api';
import { useLazyLoad } from '../hooks/useLazyLoad';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useLazyLoad(setPage);

  useEffect(() => {
    const getData = async () => {
      if (isFetching) return; // Prevent over-fetching
      if(page === 1) {
        setIsFetching(true);
      }
      const newItems = await fetchData(page);

      setItems((prevItems) => {
        //setItems((prevItems) => [...prevItems, ...newItems]); // Merge with existing items
        const combinedItems = [...prevItems, ...newItems];
        return combinedItems;
        //return Array.from(new Map(combinedItems.map((item) => [item.name, item])).values());
      });
      setIsFetching(false);
    };

    getData();
  }, [page]);

  useEffect(() => {
    setFilteredData(items);
  }, [items]);

  return (
    <DataContext.Provider value={{ items, filteredData, setFilteredData, isFetching }}>
      {children}
    </DataContext.Provider>
  );
};
