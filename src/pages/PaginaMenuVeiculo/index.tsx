import React from 'react';
import ButtonMenu from 'src/components/ButtonMenu';
import TitlePages from 'src/components/TitlePages';

import {
  Car,
  Survey,
  GasPump,
  Register,
  RequestTools,
  Close,
} from 'src/styles/icons';
import { Container, Body, ContainerTitle } from './styles';

const PaginaMenuVeiculo: React.FC = () => {
  return (
    <Container>
      <ContainerTitle>
        <TitlePages title="ABT-001" icon={Car} />
      </ContainerTitle>
      <Body>
        <div>
          <ButtonMenu icon={Survey}>Realizar Vistoria</ButtonMenu>
          <ButtonMenu icon={GasPump}>Abastecer</ButtonMenu>
          <ButtonMenu icon={Register}>Registrar Saída</ButtonMenu>
        </div>
        <div>
          <ButtonMenu icon={RequestTools}>Solicitar Manutenção</ButtonMenu>
          <ButtonMenu icon={Close}>Finalizar Uso</ButtonMenu>
        </div>
      </Body>
    </Container>
  );
};

export default PaginaMenuVeiculo;
