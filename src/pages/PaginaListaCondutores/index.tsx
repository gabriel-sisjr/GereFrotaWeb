import React from 'react';
import { Card, ToAdd, Search } from 'src/styles/icons';

import TitlePages from 'src/components/TitlePages';
import ListaCondutores from 'src/components/Listas/ListaCondutores';
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
  InputInscricao,
  SelectUnidade,
} from './styles';

interface PropsCondutor {
  nome: string;
  unidade: string;
  cidade: string;
}

type PropsArray = Array<PropsCondutor>;

const PaginaListaCondutores: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  const valores = [
    { value: 1, label: 'Recebida' },
    { value: 2, label: 'Em Andamento' },
    { value: 3, label: 'Finalizada' },
  ];

  const condutores: PropsArray = [
    {
      nome: 'FULANO DA SILVA MELO',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      nome: 'FULANO DA SILVA MELO',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      nome: 'FULANO DA SILVA MELO',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      nome: 'FULANO DA SILVA MELO',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      nome: 'FULANO DA SILVA MELO',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      nome: 'FULANO DA SILVA MELO',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      nome: 'FULANO DA SILVA MELO',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
    {
      nome: 'FULANO DA SILVA MELO',
      unidade: '2º AGRUPAMENTO BOMBEIRO MILITAR',
      cidade: 'ESTÂNCIA',
    },
  ];
  return (
    <Container>
      <ContainerTitle>
        <TitlePages title="Condutores Cadastrados" icon={Card} />
      </ContainerTitle>
      <ContainerBody>
        <h1>Condutores Cadastrados</h1>
        <Body>
          <ContainerFiltro>
            <h2>Filtros</h2>
            <Filtro onSubmit={handleSubmit}>
              <SelectUnidade
                options={valores}
                placeholder="Unidade"
                name="Unidade"
              />
              <InputInscricao
                name="Inscricao"
                placeholder="Número de Inscrição"
                icon={Search}
              />
            </Filtro>
          </ContainerFiltro>
          <Lista>
            {condutores.length !== 0 ? (
              condutores.map(({ nome, unidade, cidade }) => (
                <ListaCondutores
                  nome={nome}
                  unidade={unidade}
                  cidade={cidade}
                />
              ))
            ) : (
              <ListaVazia text="Não foi encontrado nenhum Condutor!" />
            )}
          </Lista>
          <ContainerButton>
            <ButtonLink icon={ToAdd} nome="Novo Condutor" to="/novoCondutor" />
          </ContainerButton>
        </Body>
      </ContainerBody>
    </Container>
  );
};

export default PaginaListaCondutores;
