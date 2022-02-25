import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export const Dashboard = (): React.ReactElement => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
};
