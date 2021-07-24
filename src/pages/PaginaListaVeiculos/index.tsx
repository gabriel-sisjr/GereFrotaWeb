import React from 'react';
import { Car, ToAdd } from 'src/styles/icons';

import TitlePages from 'src/components/TitlePages';
import ListaVeiculosUnidade from 'src/components/Listas/ListaVeiculosUnidade';
import ButtonLink from 'src/components/ButtonLink';
import ListaVazia from 'src/components/Listas/ListaVazia';
import {
  Container,
  ContainerTitle,
  ContainerBody,
  Body,
  ContainerFiltro,
  Filtro,
  Lista,
  ContainerButton,
  Select,
} from './styles';

interface PropsVeiculo {
  placa: string;
  unidade: string;
  cidade: string;
}

type PropsArray = Array<PropsVeiculo>;

const PaginaListaVeiculos: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  const valores = [
    { value: 1, label: 'Recebida' },
    { value: 2, label: 'Em Andamento' },
    { value: 3, label: 'Finalizada' },
  ];

  const veiculos: PropsArray = [
    {
      placa: 'ABT-0323',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      placa: 'ABT-0322',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      placa: 'ABT-0322',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      placa: 'ABT-0322',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      placa: 'ABT-0322',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      placa: 'ABT-0322',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      placa: 'ABT-0322',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      placa: 'ABT-0322',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      placa: 'ABT-0322',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      placa: 'ABT-0322',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
  ];
  return (
    <Container>
      <ContainerTitle>
        <TitlePages title="Veículos" icon={Car} />
      </ContainerTitle>
      <ContainerBody>
        <h1>Veículos da Frota</h1>
        <Body>
          <ContainerFiltro>
            <h2>Filtros</h2>
            <Filtro onSubmit={handleSubmit}>
              <Select
                options={valores}
                placeholder="Status do Veículo"
                name="Status"
              />
              <Select options={valores} placeholder="Unidade" name="Unidade" />
            </Filtro>
          </ContainerFiltro>
          <Lista>
            {veiculos.length !== 0 ? (
              veiculos.map(({ placa, unidade, cidade }) => (
                <ListaVeiculosUnidade
                  placa={placa}
                  unidade={unidade}
                  cidade={cidade}
                />
              ))
            ) : (
              <ListaVazia text="Não existe veículos Cadastrados!" />
            )}
          </Lista>
          <ContainerButton>
            <ButtonLink icon={ToAdd} nome="Novo Veículo" to="/novoVeiculo" />
          </ContainerButton>
        </Body>
      </ContainerBody>
    </Container>
  );
};

export default PaginaListaVeiculos;
