import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

export const App = (): React.ReactElement => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState<boolean>(false);

  const handleOpenNewTransactionModalOpen = (): void =>
    setIsNewTransactionModalOpen(true);

  const handleCloseNewTransactionModalOpen = (): void =>
    setIsNewTransactionModalOpen(false);

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModalOpen} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onClose={handleCloseNewTransactionModalOpen}
      />
      <GlobalStyle />
    </>
  );
};
