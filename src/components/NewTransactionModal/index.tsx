import { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

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
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");

  const resetData = (): void => {
    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
  };

  const handleCreateNewTransaction = async (event: React.FormEvent) => {
    event.preventDefault();
    await createTransaction({ title, amount, category, type });
    handleClose();
  };

  const handleClose = () => {
    resetData();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onClose} className="react-modal-close">
        <img src={closeImg} alt="Close modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Create transaction</h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          name="value"
          placeholder="Value"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Create</button>
      </Container>
    </Modal>
  );
};
