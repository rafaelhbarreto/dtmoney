import { Container } from "./styles";

import EntradasIcon from '../../assets/img/income.svg';
import SaidasIcon from '../../assets/img/outcome.svg';
import TotalIcon from '../../assets/img/total.svg';
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {

  const {transactions} = useTransactions();
  
  const summary = transactions.reduce((acc, transaction) => {
      
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.ammount; 
      acc.total += transaction.ammount;
    } else {
      acc.withdraws += transaction.ammount; 
      acc.total -= transaction.ammount;
    }

    return acc;
  }, 
  {
    deposits: 0, 
    withdraws: 0, 
    total: 0, 
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={EntradasIcon} alt="Entradas"/>
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={SaidasIcon} alt="Saídas"/>
        </header>
        <strong>- {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(summary.withdraws)}</strong>
      </div>
      <div className="highlighted">
        <header>
          <p>Total</p>
          <img src={TotalIcon} alt="Total"/>
        </header>
        <strong> {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(summary.total)}</strong>
      </div>
    </Container>
  ); 
}