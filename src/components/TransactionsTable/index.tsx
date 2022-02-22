import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
};

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransactions(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction: Transaction) => (
            <tr key={transaction?.id}>
              <td>{transaction?.title}</td>
              <td className={transaction?.type}>$ {transaction?.amount}</td>
              <td>{transaction?.category}</td>
              <td>{transaction?.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
