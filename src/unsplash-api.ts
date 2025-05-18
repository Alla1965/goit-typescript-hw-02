import axios from 'axios';
import { UnsplashResponse, ImageType } from './types/ImageType';

const ACCESS_KEY = 'd_vOVy4vGub-O9Lky8IMLvj7rw461ieyL1xRHyOXZXQ'; // встав сюди свій ключ
const BASE_URL = 'https://api.unsplash.com';


export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<{ images: ImageType[]; totalPages: number }> => {
  const response = await axios.get<UnsplashResponse>(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  const images: ImageType[] = response.data.results.map((img) => ({
    id: img.id,
     alt_description: img.alt_description || 'No description',
    urls: {
      small: img.urls.small,
      regular: img.urls.regular,
      } 
   
  }));

  return {
    images,
    totalPages: response.data.total_pages,
  };
};