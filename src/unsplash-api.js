import axios from 'axios';

const ACCESS_KEY = 'd_vOVy4vGub-O9Lky8IMLvj7rw461ieyL1xRHyOXZXQ'; // встав сюди свій ключ
const BASE_URL = 'https://api.unsplash.com';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });

  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
};
