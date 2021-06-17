import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    height: 74px;
    width: 100%;
  }
`;
export const Body = styled.div`
  width: 90%;
  height: 100vh;
  border: 1px solid var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 32px;
  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
  }
  @media (max-width: 720px) {
    align-items: center;
    justify-content: flex-start;
    div {
      flex-direction: column;
      justify-content: space-around;
      width: 80%;
      margin-top: 0px;

      button {
        margin-top: 16px;
        width: 100%;
        height: 80px;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        svg {
          width: 40px;
          height: 40px;
          margin-right: 5%;
          margin-left: 8%;
        }
        font-size: 18px;
      }
    }
  }
`;
