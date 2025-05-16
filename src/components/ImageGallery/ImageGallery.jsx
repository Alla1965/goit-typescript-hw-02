import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.galleryList}>
      {images.map((img) => (
        <li key={img.id}>
           <ImageCard image={img} onClick={onImageClick} />
          {/* <div>
            <img src={img.urls.small} alt={img.alt_description} />
          </div> */}
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
