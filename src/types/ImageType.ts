
export interface ImageType {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}
export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    [key: string]: any;
  };
  [key: string]: any;
}

export interface UnsplashResponse {
  results: UnsplashImage[];
  total_pages: number;
}