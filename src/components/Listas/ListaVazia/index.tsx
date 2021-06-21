import React from 'react';

import { Alert } from 'src/styles/icons';
import { Container } from './styles';

interface PropsList {
  text: string;
}

const ListaVazia: React.FC<PropsList> = ({ text }) => {
  return (
    <Container>
      <Alert />
      <span>{text}</span>
    </Container>
  );
};

export default ListaVazia;
