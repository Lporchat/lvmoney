import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("depos");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close" />
      </button>
      <Container>
        <h2>Cadastra transação</h2>
        <input placeholder="Título"></input>
        <input placeholder="Valor" type="number"></input>
        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="saida" />
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder="Categoria"></input>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
