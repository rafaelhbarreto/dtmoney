import { FormEvent, useContext, useState} from 'react';
import Modal from 'react-modal'; 
import { Container, ContainerTypeTransaction, RadioButton } from './styles';
import CloseModalIcon from '../../assets/img/close.svg'; 
import IncomeIcon from '../../assets/img/income.svg'; 
import OutcomeIcon from '../../assets/img/outcome.svg'; 
import {TransactionsContext} from '../../context/TransactionsContext';
 
interface NewTransactionModalProps {
  isOpen: boolean;
  closeModal: () => void; 
}

Modal.setAppElement('#root');

export function NewTransactionModal({isOpen, closeModal}: NewTransactionModalProps) {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit'); 
  const {createTransaction} = useContext(TransactionsContext);

  async function handleSubmitNewTransaction(event: FormEvent) {
    event.preventDefault(); 

    await createTransaction({
      title,
      ammount: value,
      category,
      type
    });

    // when finish the request, reset the 
    // fields and close the modal

    setTitle('');
    setValue(0);
    setCategory('');
    setType('deposit');

    closeModal(); 

  }

  return (
    
    <Modal 
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleSubmitNewTransaction}>
        
        <img src={CloseModalIcon} onClick={closeModal} className="react-modal-close" alt="Fechar modal" />

        <h2>Nova transação</h2>
        
        <input 
          type="text" 
          placeholder="Título"
          value={title}
          onChange={ (e) => setTitle(e.target.value)}
        />

        <input 
          type="number" 
          placeholder="Valor"
          value={value}
          onChange={ (e) => setValue(Number(e.target.value))}
        />

        <ContainerTypeTransaction>
          <RadioButton
            type="button"
            isActive={type === 'deposit'}
            color={'green'}
            onClick={() => setType('deposit')}
          >
            <img src={IncomeIcon} alt="Entrada"/>
            <span>Entrada</span>
          </RadioButton>

          <RadioButton
            type="button"
            color={'red'}
            isActive={type === 'withdraw'}
            onClick={() => setType('withdraw')}
          >
            <img src={OutcomeIcon} alt="Saída"/>
            <span>Saída</span>
          </RadioButton>
        </ContainerTypeTransaction>

        <input 
          type="text" 
          placeholder="Categoria"
          value={category}
          onChange={ (e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>

  );
}