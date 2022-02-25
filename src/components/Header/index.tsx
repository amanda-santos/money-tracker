import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export const Header = ({
  onOpenNewTransactionModal,
}: HeaderProps): React.ReactElement => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="money tracker" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          New transaction
        </button>
      </Content>
    </Container>
  );
};
