import styled from "styled-components";
import {darken, transparentize} from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    display: block;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: .25rem; 

    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400; 
    font-size: 1rem;

    & +  input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: var(--text-body); 
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: white;
    border-radius: .25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem; 
    transition: filter ease .2s; 
    font-weight: 600;

    &:hover {
      filter: brightness(.9); 
      cursor: pointer;
    }
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem; 
    border: 0;

    background: transparent;
    transition: filter ease .2s;

    &:hover {
      filter: brightness(.9); 
      cursor: pointer;
    }
  }
`; 

export const ContainerTypeTransaction = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: .5rem; 
  margin: .8rem 0;

  button {
    
  }
`
interface RadioButtonProps {
  isActive: boolean; 
  color: 'green' | 'red'
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
}

export const RadioButton = styled.button<RadioButtonProps>`
  height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: .25rem;
    background: ${ (props) => props.isActive ? 
    transparentize(.9, colors[props.color]) : 
    'transparent' }; 
    display: flex; 
    align-items: center;
    justify-content: center; 
    transition: border ease .2s;

    img {
      width: 20px;
      height: 20px; 
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem; 
      color: var(--text-title); 
    }

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    } 
`;