import React from 'react';
import ButtonLink from 'src/components/ButtonLink';

import { Historic, Tools } from 'src/styles/icons';
import TitlePages from 'src/components/TitlePages';
import {
  Container,
  ContainerTitle,
  ContainerBody,
  ContainerBodyTitle,
  Body,
} from './styles';

const PaginaManutencaoRecebida: React.FC = () => {
  return (
    <Container>
      <ContainerTitle>
        <TitlePages title="Manutenção" icon={Tools} />
      </ContainerTitle>
      <ContainerBody>
        <ContainerBodyTitle>
          <h1>Nº 001/2020 - Recebida</h1>
          <ButtonLink
            to="/manutencaoRecebida"
            nome="Histórico do Veículo"
            icon={Historic}
          />
        </ContainerBodyTitle>
        <Body />
      </ContainerBody>
    </Container>
  );
};

export default PaginaManutencaoRecebida;
