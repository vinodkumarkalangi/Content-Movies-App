// // src/services/api.js
// import axios from 'axios';
// import { BASE_URL } from './constants';

// export const fetchData = async (page, setItems) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/data/page${page}.json`);
//     const newData = response.data.page['content-items'].content;
//     if (Array.isArray(newData)) {
//       setItems((prevItems) => [...prevItems, ...newData]);
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// src/services/api.js
import axios from 'axios';
import { BASE_URL } from './constants';

export const fetchData = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/data/page${page}.json`);
    console.log(`Response for page ${page}:`, response.data);

    // Safely extract the content items
    const newData = response?.data?.page?.['content-items']?.content;

    // Ensure newData is always an array
    return Array.isArray(newData) ? newData : [];
  } catch (error) {
    console.error(`Error fetching data for page ${page}:`, error);
    return []; // Return an empty array in case of error to prevent breaking the app
  }
};


