import style from "./ImageCard.module.css"
import React from "react";
import { ImageType } from "../../types/ImageType";

interface Props {
  image: ImageType  ;
  onClick: (image: ImageType  ) => void;
}

const ImageCard: React.FC<Props> = ({ image, onClick }) => {
  
  return (
   
    <div className={style.item}
      onClick={() => onClick(image)}>
      <img
        className={style.imageCard}
        src={image.urls.small}
        alt={image.alt_description} />
      </div>
     );
};

export default ImageCard;
