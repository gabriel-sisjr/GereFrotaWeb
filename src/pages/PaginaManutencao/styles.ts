import styled from 'styled-components';
import { Form } from '@unform/web';

import Input from 'src/components/Form/Input';
import SelectItems from 'src/components/Form/SelectItems';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
  width: 100%;
  margin-left: 230px;

  @media (max-width: 720px) {
    margin-left: min(80px, max(175px, 41vw));
  }
`;

export const ContainerTitle = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 80px;
  @media (max-width: 720px) {
    margin-top: 0px;
    width: 100%;
    height: 74px;
  }
`;

export const ContainerBody = styled.div`
  width: 90%;
  height: 100%;
  margin-bottom: 45px;
  > h1 {
    color: var(--primary);
    margin-left: 20px;
    padding: 10px 10px;
  }
  @media (max-width: 720px) {
    width: 95%;
    h1 {
      font-size: 24px;
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid var(--primary);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerFiltro = styled.div`
  width: 95%;
  height: 130px;
  border-bottom: 2px solid var(--placeholder);
  h2 {
    margin: 8px 0;
    color: var(--primary);
  }
  @media (max-width: 720px) {
    height: 270px;
  }
`;
export const Filtro = styled(Form)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0px 24px 0px;
  flex-wrap: wrap;
  span {
    font-size: 18px;
    color: var(--primary);
    margin: 8px;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
    div {
      margin-bottom: 8px;
    }
  }
`;

export const Lista = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 24px;
`;

export const InputData = styled(Input)`
  width: 255px;
  height: 50px;
  @media (max-width: 720px) {
    width: 235px;
  }
`;

export const SelectStatus = styled(SelectItems)`
  width: 263px;
  height: 50px;

  @media (max-width: 720px) {
    width: 243px;
  }
`;
