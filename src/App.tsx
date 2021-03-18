import { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import GlobalStyles from './styles/global';  
import {createServer, Model} from 'miragejs';

import {NewTransactionModal} from './components/NewTransactionModal'; 
import { TransactionsProvider } from './hooks/useTransactions';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance',
          ammount: 6000,
          category: 'Jobs',
          type: 'deposit',
          createdAt: new Date('2021-02-02 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          ammount: 1000,
          category: 'Casa',
          type: 'withdraw',
          createdAt: new Date('2021-02-10 09:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = "api"; 

    this.get('/transactions', () => {
      return this.schema.all('transaction'); 
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      
      return schema.create('transaction', data);
    });

  }
});



export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); 

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  
  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal}/>
      <Dashboard />

      <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          closeModal={handleCloseTransactionModal}
       />

      <GlobalStyles /> 
    </TransactionsProvider>
  );
}
