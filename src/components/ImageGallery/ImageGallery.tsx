import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";
import React from "react";

import { ImageType } from "../../types/ImageType";
 

interface Props {
  images: ImageType[];
  onImageClick: (image: ImageType) => void;
}

const ImageGallery: React.FC<Props> = ({ images, onImageClick }) => {

  return (
    <ul className={css.galleryList}>
      {images.map((img) => (
        <li key={img.id}>
         
          <ImageCard image={img} onClick={() => onImageClick(img)} />
         
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
