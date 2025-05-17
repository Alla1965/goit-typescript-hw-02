import style from "./ImageCard.module.css"
import React from "react";

interface AppImage  {
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface Props {
  image: AppImage ;
  onClick: (image: AppImage ) => void;
}


const ImageCard: React.FC<Props> = ({ image, onClick }) => {
  return (
    //
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
