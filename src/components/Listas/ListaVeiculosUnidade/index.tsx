import React from 'react';
import { Car, Search, Edit } from '../../../styles/icons';

import { Container, ContainerDiv, ContainerAcoes } from './styles';

interface PropsList {
  placa?: string;
  unidade?: string;
  cidade?: string;
  id?: number;
}

const ListaVeiculosUnidade: React.FC<PropsList> = ({
  placa,
  unidade,
  cidade,
}) => {
  return (
    <Container to="/veiculos">
      <ContainerDiv>
        <Car />
        <div>
          <span>{placa}</span>
          <span>{unidade}</span>
          <span>{cidade}</span>
        </div>
      </ContainerDiv>
      <ContainerAcoes>
        <div>
          <Search />
          <span>Visualizar</span>
        </div>
        <div>
          <Edit />
          <span>Editar</span>
        </div>
      </ContainerAcoes>
    </Container>
  );
};

export default ListaVeiculosUnidade;
