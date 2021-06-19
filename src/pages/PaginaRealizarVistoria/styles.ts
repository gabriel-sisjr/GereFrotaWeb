import styled from 'styled-components';
import { Form } from '@unform/web';

import Input from 'src/components/Form/Input';
import TextArea from 'src/components/Form/TextArea';

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
    width: 100%;
    margin-top: 0px;
    height: 74px;

    svg {
      margin-left: 25px;
    }
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
export const ContainerHeader = styled.div`
  width: 95%;
  height: 180px;
  border-bottom: 2px solid var(--placeholder);
  h2 {
    margin: 8px 0;
    color: var(--primary);
  }
  @media (max-width: 720px) {
    height: 220px;
  }
`;
export const Header = styled.div`
  display: flex;
  margin: 16px 0px 24px 0px;
  flex-direction: column;
  div {
    width: 250px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 20px;
    color: var(--primary);
    margin: 8px;
  }

  @media (max-width: 720px) {
    width: 100%;
    div {
      margin-bottom: 8px;
    }
  }
`;
export const Body = styled(Form)`
  width: 100%;
  height: 100%;
  border: 1px solid var(--primary);
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const InputOdometro = styled(Input)`
  width: 250px;
  height: 50px;
`;

export const ContainerButton = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;

  @media (max-width: 920px) {
    width: 95%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ContainerTable = styled.table`
  width: 95%;
  margin-top: 16px;
  font-size: 20px;
  color: var(--primary);
  border-bottom: 1px solid var(--placeholder);
  td,
  th {
    text-align: center;
    padding: 8px;
  }
`;
export const ContainerForm = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  width: 95%;
  flex-wrap: wrap;
  margin-top: 16px;
  margin-bottom: 16px;
  div {
    width: 300px;
    height: 50px;
    display: flex;
    align-items: center;

    span {
      margin-left: 8px;
      font-size: 20px;
      font-weight: 500;
      color: var(--primary);
    }
  }
`;

export const DivText = styled.div`
  width: 95%;
  margin-top: 16px;
`;

export const InputDescricao = styled(TextArea)`
  width: 100%;
  height: 150px;
`;
