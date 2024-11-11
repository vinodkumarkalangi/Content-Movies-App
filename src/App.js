// src/App.js
import React from 'react';
import ContentListing from './pages/ContentListing';
import { ThemeProvider } from './contexts/ThemeContext';
import { DataProvider } from './contexts/DataContext';
import Search from './components/Search';
import './assets/styles/theme.css';

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <div className="App">
          <Search />
          <ContentListing />
        </div>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;