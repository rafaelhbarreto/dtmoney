import { Summary } from '../Summary';
import { TransactionTable } from '../TransactionTable';
import {Container} from './styles';
import {TransactionsProvider} from '../../context/TransactionsContext'; 

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}