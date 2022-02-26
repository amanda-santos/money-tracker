import { useTransactions } from '../../hooks/useTransactions';
import { Transaction } from '../../types';
import { formatCurrency, formatDate } from '../../utils';
import { Container } from './styles';

export const TransactionsTable = (): React.ReactElement => {
  const { transactions } = useTransactions();
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
              <td className={transaction?.type}>
                {formatCurrency(transaction?.amount)}
              </td>
              <td>{transaction?.category}</td>
              <td>{formatDate(new Date(transaction?.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
