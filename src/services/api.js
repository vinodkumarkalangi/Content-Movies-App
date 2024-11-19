import axios from 'axios';
import { BASE_URL } from './constants';

export const fetchData = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/data/page${page}.json`);
    console.log(`Response for page ${page}:`, response.data);

    const content = response?.data?.page?.['content-items']?.content || [];

    // Handle edge cases: missing properties (fallback)
    const sanitizedContent = content.map((item) => ({
      name: item.name || 'Unknown Title',
      poster: item['poster-image'] || 'placeholder_for_missing_posters.png',
    }));

    return sanitizedContent;
  } catch (error) {
    console.error(`Error fetching data for page ${page}:`, error);
    return [];
  }
};