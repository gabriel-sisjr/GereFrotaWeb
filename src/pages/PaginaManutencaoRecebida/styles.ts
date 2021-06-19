import styled from 'styled-components';

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
export const ContainerBodyTitle = styled.div`
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    border-left: 12px solid red;
    padding-left: 16px;

    color: var(--primary);
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
