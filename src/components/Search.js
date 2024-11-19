import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../contexts/DataContext';
import './Search.css';

function Search() {
  const { items, setFilteredData } = useContext(DataContext);
  const [query, setQuery] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (query === '') {
      setFilteredData(items);
    }
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [query, items, setFilteredData]);

  const toggleSearchInput = () => {
    setShowSearchInput((prevState) => !prevState);
  };

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      if (searchQuery === '') {
        setFilteredData(items);
      } else {
        const filteredData = items.filter((item) =>
          item.name.toLowerCase().includes(searchQuery)
        );
        setFilteredData(filteredData);
      }
    }, 500);

    setTimeoutId(newTimeoutId);
  };

  return (
    <div className={`MainHeader ${isScrolled ? 'scrolled' : ''}`}>
      <div className='headBack'>
        <img src="https://test.create.diagnal.com/images/Back.png" alt="" /> {/* Decorative image */}
        <h1 className={`title ${showSearchInput ? 'search_active' : ''}`}>Romantic Comedy</h1>
      </div>

      <div className='searchSection'>
        

        <div className={`searchInputWrapper ${showSearchInput ? 'active' : ''}`}>
            <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleSearch}
            />
        </div>

        <div className='searchIcon' onClick={toggleSearchInput}>
            {showSearchInput ? (
                <span>X</span>
              ) : (
                <img src="https://test.create.diagnal.com/images/search.png" alt="Search" />
              )}
        </div>
        
      </div>
    </div>
  );
}

export default Search;
