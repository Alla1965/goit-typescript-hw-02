import { useState, useEffect } from "react";
import { fetchImages } from "../src/unsplash-api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { Toaster } from 'react-hot-toast';
import style from "./App.module.css";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("nature"); // початковий запит
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

const handleSearch = (newQuery) => {
  setQuery(newQuery);   // Це тригерить useEffect
  setPage(1);        // Скидаємо сторінку на першу при новому пошуку
   setImages([]); // очищаємо попередні результати
};
  
    const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        // await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5 секунди
        const { images: newImages } = await fetchImages(query, page);
        
          setImages((prev) => {
      const ids = new Set(prev.map((img) => img.id));
      const filtered = newImages.filter((img) => !ids.has(img.id));
      return [...prev, ...filtered];
    });
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);
 
  return (
    <div className={style.container}>
      <h1 className={style.headerGallery}>Image Gallery</h1>
       <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage />}

      <ImageGallery
        images={images}
        onImageClick={setModalImage}
        
      />
      {loading && <Loader />}

   
{!loading && images.length > 0 && (
  <LoadMoreBtn onClick={handleLoadMore} />
)}
<ImageModal
  isOpen={modalImage !== null}
  onClose={() => setModalImage(null)}
  image={modalImage}
/>
      
      <Toaster
        position="top-right"
       toastOptions={{
    style: {
      background: '#ffdddd',
      color: '#d8000c',
      border: '1px solid #d8000c',
      padding: '12px 16px',
    },
  }}/>
    </div>
  );
};

export default App;



