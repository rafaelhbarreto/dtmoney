import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
        --shape: #FFF;
        --background: #f0f2f5;
        --green: #33CC95;
        --red: #E52E4D;
        
        --blue: #5429CC;
        --blue-light: #6933FF;
        
        --text-title: #363F5F;
        --text-body: #969CB3;
    }

    * {
        margin: 0;
        padding: 0; 
        box-sizing: border-box; 
    
    }   

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        
        @media (max-width: 720px) {
            font-size: 87.50%;
        }
    }

    body {
        background: var(--background); 
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
    }

    h1,h2,h3,h4,h5,h5, strong {
        font-weight: 600; 
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {

        background: rgba(0,0,0,.5); 
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%; 
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: .25rem;
    }
`;

export default GlobalStyles;