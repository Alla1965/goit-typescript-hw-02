import { useState, useEffect } from "react";
import { fetchImages } from "../../unsplash-api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from 'react-hot-toast';
import style from "./App.module.css";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

// Типи
interface Image {
  id: string;
  url: string;
  alt: string;
  [key: string]: any; // для гнучкості
}

 const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("nature");
  const [page, setPage] = useState<number>(1);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
   };
   
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const { images: newImages }: { images: Image[] } = await fetchImages(query, page);

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
{/* <ImageModal
  isOpen={modalImage !== null}
  onClose={() => setModalImage(null)}
  image={modalImage}
      /> */}
      <ImageModal
  isOpen={modalImage !== null}
  onClose={() => setModalImage(null)}
  image={
    modalImage
      ? {
          urls: { regular: modalImage.url },
          alt_description: modalImage.alt,
        }
      : null
  }
/>
      
      {/* {image && <ImageModal isOpen={true} onClose={() => setModalImage(null)} image={image} />} */}
      
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



