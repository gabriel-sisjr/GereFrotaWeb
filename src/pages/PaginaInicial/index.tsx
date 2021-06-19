import React from 'react';

import { Home, Search } from 'src/styles/icons';
import TitlePages from 'src/components/TitlePages';
import ListVeiculosUso from 'src/components/Listas/ListVeiculosUso';
import {
  Container,
  ContainerTitle,
  ContainerBody,
  Body,
  ContainerFiltro,
  Filtro,
  Lista,
  InputSearch,
  SelectStatus,
} from './styles';

const PaginaIncial: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  const valores = [
    { value: 1, label: 'Ocioso' },
    { value: 2, label: 'Em Uso' },
    { value: 3, label: 'Em Manutenção' },
  ];

  const veiculos = [
    { placa: 'ABT-0323', modelo: 'Merceds Bens tl 032', id: 0 },
    { placa: 'ABT-0013', modelo: 'Merceds Bens tl 032', id: 1 },
    { placa: 'ABT-0001', modelo: 'Merceds Bens tl 032', id: 2 },
    { placa: 'ABT-0123', modelo: 'Merceds Bens tl 032', id: 3 },
    { placa: 'ABT-0321', modelo: 'Merceds Bens tl 032', id: 4 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 5 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 6 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 7 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 8 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 9 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 6 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 7 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 8 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 9 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 5 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 6 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 7 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 8 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 9 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 6 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 7 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 8 },
    { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 9 },
  ];

  return (
    <Container>
      <ContainerTitle>
        <TitlePages title="Página Inicial" icon={Home} />
      </ContainerTitle>
      <ContainerBody>
        <h1>Veículos Disponíveis</h1>
        <Body>
          <ContainerFiltro>
            <h2>Filtros</h2>
            <Filtro onSubmit={handleSubmit}>
              <SelectStatus
                options={valores}
                placeholder="Status Veículo"
                name="Status"
              />
              <InputSearch
                name="Buscar"
                placeholder="Placa do veículo"
                icon={Search}
              />
            </Filtro>
          </ContainerFiltro>
          <Lista>
            {veiculos.map(({ placa, modelo, id }) => (
              <ListVeiculosUso modelo={modelo} placa={placa} id={id} />
            ))}
          </Lista>
        </Body>
      </ContainerBody>
    </Container>
  );
};

export default PaginaIncial;
