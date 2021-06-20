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
          <ButtonMenu
            name="Realizar Vistoria"
            to="/realizarVistoria"
            icon={Survey}
          />
          <ButtonMenu name=" Abastecer" to="" icon={GasPump} />
          <ButtonMenu
            name="Registrar Saída"
            to="/registrarSaida"
            icon={Register}
          />
        </div>
        <div>
          <ButtonMenu name="Solicitar Manutenção" to="" icon={RequestTools} />
          <ButtonMenu name="Finalizar Uso" to="" icon={Close} />
        </div>
      </Body>
    </Container>
  );
};

export default PaginaMenuVeiculo;
