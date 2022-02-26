export type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
};

export type TransactionInput = Omit<Transaction, "id" | "createdAt">;
