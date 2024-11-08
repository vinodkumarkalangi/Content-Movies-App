import axios from 'axios';
import { BASE_URL } from './constants';

export const fetchData = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/data/page${page}.json`);
    console.log(`Response for page ${page}:`, response.data);

    
    const newData = response?.data?.page?.['content-items']?.content;

    return Array.isArray(newData) ? newData : [];
  } catch (error) {
    console.error(`Error fetching data for page ${page}:`, error);
    return [];
  }
};


