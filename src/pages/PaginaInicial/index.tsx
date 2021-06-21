import React from 'react';

import { Home, Search, Alert } from 'src/styles/icons';
import TitlePages from 'src/components/TitlePages';
import ListaVazia from 'src/components/Listas/ListaVazia';
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

interface PropsVeiculo {
  id: number;
  placa: string;
  modelo: string;
}
type PropsArray = Array<PropsVeiculo>;

const PaginaIncial: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  const valores = [
    { value: 1, label: 'Ocioso' },
    { value: 2, label: 'Em Uso' },
    { value: 3, label: 'Em Manutenção' },
  ];

  const veiculos: PropsArray = [
    // { placa: 'ABT-0323', modelo: 'Merceds Bens tl 032', id: 0 },
    // { placa: 'ABT-0013', modelo: 'Merceds Bens tl 032', id: 1 },
    // { placa: 'ABT-0001', modelo: 'Merceds Bens tl 032', id: 2 },
    // { placa: 'ABT-0123', modelo: 'Merceds Bens tl 032', id: 3 },
    // { placa: 'ABT-0321', modelo: 'Merceds Bens tl 032', id: 4 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 5 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 6 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 7 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 8 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 9 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 10 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 11 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 12 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 13 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 14 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 15 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 16 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 17 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 18 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 19 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 20 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 21 },
    // { placa: 'ABT-0043', modelo: 'Merceds Bens tl 032', id: 22 },
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
            {veiculos.length !== 0 ? (
              veiculos.map(({ placa, modelo, id }) => (
                <ListVeiculosUso modelo={modelo} placa={placa} id={id} />
              ))
            ) : (
              <ListaVazia text="Não existe veículos cadastrados no sistema" />
            )}
          </Lista>
        </Body>
      </ContainerBody>
    </Container>
  );
};

export default PaginaIncial;
