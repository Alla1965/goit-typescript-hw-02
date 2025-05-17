import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";
import React from "react";
 
interface ImageType {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface Props {
  images: ImageType[];
  onImageClick: (url: string) => void;
}

const ImageGallery: React.FC<Props> = ({ images, onImageClick }) => {
  return (
    <ul className={css.galleryList}>
      {images.map((img) => (
        <li key={img.id}>
           <ImageCard image={img} onClick={onImageClick} />
         
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
