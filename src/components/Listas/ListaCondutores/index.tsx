import React from 'react';

import { Container, ContainerDiv, ConatainerAcoes } from './styles';
import { Card, Edit } from '../../../styles/icons';

interface PropsList {
  nome?: string;
  unidade?: string;
  cidade?: string;
  id?: number;
}
const ListaCondutores: React.FC<PropsList> = ({ nome, unidade, cidade }) => {
  return (
    <Container to="/condutores">
      <ContainerDiv>
        <Card />
        <div>
          <span>{nome}</span>
          <span>{unidade}</span>
          <span>{cidade}</span>
        </div>
      </ContainerDiv>
      <ConatainerAcoes>
        <div>
          <Edit />
          <span>Editar</span>
        </div>
      </ConatainerAcoes>
    </Container>
  );
};

export default ListaCondutores;
