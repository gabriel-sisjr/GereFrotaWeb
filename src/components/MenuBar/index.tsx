import React from 'react';

import {
  Container,
  Profile,
  ImgProfile,
  MenuBottom,
  IconHome,
  IconTools,
  IconCar,
  IconConductor,
  IconChart,
  ContainerBottom,
  SpanUnidade,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Profile>
        <ImgProfile>
          <img
            src="https://avatars.githubusercontent.com/u/36143255?v=4"
            alt="Fulano da Silva"
          />
          <div>
            <span> Bem vindo,</span>
            <strong> Fulano da Silva</strong>
          </div>
        </ImgProfile>
        <SpanUnidade>SBMSE-Itabaiana</SpanUnidade>
      </Profile>
      <ContainerBottom>
        <MenuBottom to="/">
          <IconHome />
          <span>Página Inicial</span>
        </MenuBottom>
        <MenuBottom to="/manutencoes">
          <IconTools />
          <span>Manutenção</span>
        </MenuBottom>
        <MenuBottom to="/veiculos">
          <IconCar />
          <span>Veículos</span>
        </MenuBottom>
        <MenuBottom to="/condutores">
          <IconConductor />
          <span>Condutores</span>
        </MenuBottom>
        <MenuBottom to="/manutencaoRecebida">
          <IconChart />
          <span>Relatório</span>
        </MenuBottom>
      </ContainerBottom>
    </Container>
  );
};

export default MenuBar;
