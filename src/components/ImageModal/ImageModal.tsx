import React, { useState }  from "react";
import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageType } from "../../types/ImageType";

ReactModal.setAppElement("#root");

interface Props {
  isOpen: boolean;
  onClose: () => void;
  image: ImageType | null;
}
const ImageModal: React.FC<Props> = ({ isOpen, onClose, image }) => {

  const [isZoomed, setIsZoomed] = useState(false);

    if (!image || typeof image !== 'object' || !image.urls || !image.urls.regular) {
    return null;
  }
 const handleImageClick = () => {
    setIsZoomed((prev) => !prev);
  };
  return (
    <ReactModal
      isOpen={isOpen}
     onRequestClose={() => {
        setIsZoomed(false);
        onClose();
      }}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description ?? "Image preview"}
        className={`${css.image} ${isZoomed ? css.zoomed : ""}`}
        onClick={handleImageClick}
      />
    </ReactModal>
  );
};

export default ImageModal;
