import { FC, MouseEvent } from "react";
import { ImageModalProps } from "../../index";
import Modal from "react-modal";
import style from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <div className={style.modalContent} onClick={handleBackdropClick}>
        <img
          className={style.img}
          src={image.urls.regular}
          alt={image.alt_description}
        />
        <p>{image.description || image.alt_description}</p>
        <p>Автор: {image.user.name}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
