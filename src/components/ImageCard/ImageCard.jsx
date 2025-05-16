import style from "./ImageCard.module.css"
const ImageCard = ({ image, onClick }) => {
   
    
  return (
    //
      <div className={style.item} onClick={() => onClick(image.urls.regular)}>
      <img
        className={style.imageCard}
        src={image.urls.small}
        alt={image.alt_description} />
      </div>
    // </li>
  );
};

export default ImageCard;
