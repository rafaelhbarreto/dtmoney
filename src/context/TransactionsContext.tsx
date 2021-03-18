import {createContext, ReactNode, useEffect, useState} from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  ammount: number;
  category: string;
  type: string;
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; 

interface TransactionsContextProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[]; 
  createTransaction: (transaction: TransactionInput) => Promise<void>; 
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({children}: TransactionsContextProps) {
  
  // Loading the transactions
  const [transactions, setTransactions] = useState<Transaction[]>([]); 

  useEffect(() => {
    api.get('/transactions')
    .then((response) => setTransactions(response.data.transactions)); 
  }, []); 

  // create a new transaction
  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    }); 

    const {transaction} = response.data; 
    
    setTransactions([
      ...transactions,
      transaction
    ]);

  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );

}