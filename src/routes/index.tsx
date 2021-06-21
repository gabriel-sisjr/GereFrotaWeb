import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PaginaNovoVeiculo from 'src/pages/PaginaNovoVeiculo';
import PaginaNovoCondutor from 'src/pages/PaginaNovoCondutor';
import PaginaRegistrarSaída from 'src/pages/PaginaRegistrarSaída';
import Header from 'src/components/Header';
import MenuBar from 'src/components/MenuBar';
import PaginaInicial from 'src/pages/PaginaInicial';
import PaginaManutencao from 'src/pages/PaginaManutencao';
import PaginaListaVeiculos from 'src/pages/PaginaListaVeiculos';
import PaginaListaCondutores from 'src/pages/PaginaListaCondutores';
import PaginaMenuVeiculo from 'src/pages/PaginaMenuVeiculo';
import PaginaRealizarVistoria from 'src/pages/PaginaRealizarVistoria';
import PaginaManutencaoRecebida from 'src/pages/PaginaManutencaoRecebida';
import { Container, Wrapper } from './styles';

const Routes: React.FC = () => (
  <Container>
    <Header />
    <Wrapper>
      <MenuBar />
      <Switch>
        <Route path="/" exact component={PaginaInicial} />
        <Route path="/home" exact component={PaginaInicial} />
        <Route path="/manutencoes" component={PaginaManutencao} />
        <Route path="/veiculos" component={PaginaListaVeiculos} />
        <Route path="/condutores" component={PaginaListaCondutores} />
        <Route path="/menuVeiculo" component={PaginaMenuVeiculo} />
        <Route path="/novoVeiculo" component={PaginaNovoVeiculo} />
        <Route path="/novoCondutor" component={PaginaNovoCondutor} />
        <Route path="/registrarSaida" component={PaginaRegistrarSaída} />
        <Route path="/realizarVistoria" component={PaginaRealizarVistoria} />
        <Route
          path="/manutencaoRecebida"
          component={PaginaManutencaoRecebida}
        />
      </Switch>
    </Wrapper>
  </Container>
);

export default Routes;
