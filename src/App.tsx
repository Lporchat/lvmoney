import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import {
  TransactionsContext,
  TransactionsProvider,
} from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionsModal={handleOpenTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        onRequestClose={handleCloseTransactionModal}
        isOpen={isNewTransactionModalOpen}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
