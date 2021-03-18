import { Container, Content } from "./styles";
import Logo from '../../assets/img/logo.svg'; 

interface HeaderProps {
  onOpenNewTransactionModal: () => void; 
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {

  return (
    <>
      <Container>
        <Content>
          <img src={Logo} alt="DtMoney"/>
          <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
        </Content>

      </Container>
    </>
  )
}