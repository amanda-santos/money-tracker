import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from "../../assets/close.svg";

// accessibility: adds "aria-hidden: true" on div #root
Modal.setAppElement("#root");

type NewTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const NewTransactionModal = ({
  isOpen,
  onClose,
}: NewTransactionModalProps): React.ReactElement => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onClose} className="react-modal-close">
        <img src={closeImg} alt="Close modal" />
      </button>
      <Container>
        <h2>Create transaction</h2>

        <input type="text" name="title" placeholder="Title" />
        <input type="number" name="value" placeholder="Value" />
        <input type="text" name="category" placeholder="Category" />

        <button type="submit">Create</button>
      </Container>
    </Modal>
  );
};
