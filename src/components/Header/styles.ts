import styled from 'styled-components'; 

export const Container = styled.header`
  background-color: var(--blue); 
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem; 
  display: flex;
  align-items: center; 
  justify-content: space-between; 


  button {
    font-size: 1rem; 
    border: 0; 
    background: var(--blue-light); 
    color: white; 
    padding: 0 2rem;
    border-radius: .25rem;
    height: 3rem;
    cursor: pointer;

    transition: filter ease .2s;

    &:hover {
      filter: brightness(0.9);
    }
  } 
`;