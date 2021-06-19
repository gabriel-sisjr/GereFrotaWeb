import React from 'react';

import {
  Container,
  ContainerNumero,
  ContainerAcoes,
  ContainerRemetente,
  ContainerItems,
} from './styles';
import { CarCog, Search } from '../../../styles/icons';

interface PropsList {
  numero?: string;
  status: number;
  statusDescricao: string;
  remetente?: string;
  data?: string;
}
const ListaSolicitacoes: React.FC<PropsList> = ({
  numero,
  statusDescricao,
  status,
  remetente,
  data,
}) => {
  return (
    <Container status={status}>
      <ContainerItems to="/manutencoes">
        <ContainerNumero>
          <CarCog />
          <div>
            <span>{numero}</span>
            <span>{statusDescricao}</span>
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
      </ContainerItems>
    </Container>
  );
};

export default ListaSolicitacoes;
