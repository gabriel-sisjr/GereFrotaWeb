import React from 'react';
import { Tools } from '../../styles/icons';

import {
  Container,
  ContainerTitle,
  ContainerBody,
  Body,
  ContainerFiltro,
  Filtro,
  Lista,
  InputData,
  SelectStatus,
} from './styles';
import TitlePages from '../../components/TitlePages';
import ListaSolicitacoes from '../../components/Listas/ListaSolicitacoes';

const PaginaManutencao: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  const solicitacoes = [
    {
      numero: '001/2020',
      status: 'Recebida',
      remetente: '2º GBM - Estância',
      data: '22/01/2021',
    },
    {
      numero: '001/2020',
      status: 'Recebida',
      remetente: '2º GBM - Estância',
      data: '22/01/2021',
    },
    {
      numero: '001/2020',
      status: 'Recebida',
      remetente: '2º GBM - Estância',
      data: '22/01/2021',
    },
    {
      numero: '001/2020',
      status: 'Recebida',
      remetente: '2º GBM - Estância',
      data: '22/01/2021',
    },
    {
      numero: '001/2020',
      status: 'Recebida',
      remetente: '2º GBM - Estância',
      data: '22/01/2021',
    },
    {
      numero: '001/2020',
      status: 'Recebida',
      remetente: '2º GBM - Estância',
      data: '22/01/2021',
    },
  ];
  const valores = [
    { value: 1, label: 'Recebida' },
    { value: 2, label: 'Em Andamento' },
    { value: 3, label: 'Finalizada' },
  ];
  return (
    <Container>
      <ContainerTitle>
        <TitlePages title="Manutenção" icon={Tools} />
      </ContainerTitle>
      <ContainerBody>
        <h1>Solicitações</h1>
        <Body>
          <ContainerFiltro>
            <h2>Filtros</h2>
            <Filtro onSubmit={handleSubmit}>
              <SelectStatus
                options={valores}
                placeholder="Status"
                name="Status"
              />
              <InputData name="dataInicial" type="date" />
              <span>a</span>
              <InputData name="dataFinal" type="date" />
            </Filtro>
          </ContainerFiltro>
          <Lista>
            {solicitacoes.map((item) => (
              <ListaSolicitacoes
                numero={item.numero}
                status={item.status}
                remetente={item.remetente}
                data={item.data}
              />
            ))}
          </Lista>
        </Body>
      </ContainerBody>
    </Container>
  );
};

export default PaginaManutencao;
