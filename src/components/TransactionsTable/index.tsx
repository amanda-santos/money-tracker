import { Container } from "./styles";

export const TransactionsTable = () => {
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
          <tr>
            <td>Website development</td>
            <td className="deposit">$ 2000.00</td>
            <td>Development</td>
            <td>22/02/2022</td>
          </tr>
          <tr>
            <td>Website development</td>
            <td className="withdraw">- $ 2000.00</td>
            <td>Development</td>
            <td>22/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
