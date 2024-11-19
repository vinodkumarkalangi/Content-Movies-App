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
      if(page === 1) {
        setIsFetching(true);
      }else{
        setIsFetching(false);
      }
      const newItems = await fetchData(page);

      setItems((prevItems) => {
        const combinedItems = [...prevItems, ...newItems];
        return combinedItems;
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
