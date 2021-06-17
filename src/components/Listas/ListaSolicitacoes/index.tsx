import React from 'react';

import {
  Container,
  ContainerNumero,
  ContainerAcoes,
  ContainerRemetente,
} from './styles';
import { CarCog, Search } from '../../../styles/icons';

interface PropsList {
  numero?: string;
  status?: string;
  remetente?: string;
  data?: string;
}
const ListaSolicitacoes: React.FC<PropsList> = ({
  numero,
  status,
  remetente,
  data,
}) => {
  return (
    <Container to="/manutencoes">
      <ContainerNumero>
        <CarCog />
        <div>
          <span>{numero}</span>
          <span>{status}</span>
        </div>
      </ContainerNumero>
      <ContainerRemetente>
        <span>{remetente}</span>
        <span>{data}</span>
      </ContainerRemetente>
      <ContainerAcoes>
        <Search />
        <span>Visualizar</span>
      </ContainerAcoes>
    </Container>
  );
};

export default ListaSolicitacoes;
