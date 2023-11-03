import styled from 'styled-components';

const ScrollableContainer = styled.div`
  height: calc(100vh - 150px);
  overflow-y: auto;

  /* Estilização da barra de rolagem */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #FF5733;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #FF2200; /* Cor da barra de rolagem ao passar o mouse */
  }
`;

export default ScrollableContainer;
