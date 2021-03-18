import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 2em; 
  margin-top: -5rem; 

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: .25rem;
    color: var(--text-title); 

    header {
      display: flex; 
      align-items: center;
      justify-content: space-between; 
    }

    strong {
      display: block;
      margin-top: 1rem; 
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlighted {
      background-color: var(--green);
      color: #fff; 
    }
  }
`;