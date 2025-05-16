import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root"); 

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true} 
      shouldCloseOnEsc={true} 
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img
        src={image}
        alt={image.alt_description}
      />
    </ReactModal>
  );
};

export default ImageModal;
