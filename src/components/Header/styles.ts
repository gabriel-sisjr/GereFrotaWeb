import styled from 'styled-components';

export const Container = styled.header`
  @media (min-width: 720px) {
    max-width: 1120;
    width: 100vw;
    z-index: 2;
    position: sticky;
    display: flex;
    justify-content: flex-end;
    pad: 20px;
    top: 0;
    background: var(--primary);
  }
`;

export const HeaderPage = styled.header`
  width: 100px;
  height: 80px;
  display: flex;
  background: var(--secundary);
  justify-content: center;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      color: var(--white);
    }
    span {
      font-size: 18px;
      color: white;
    }
    &:hover {
      svg,
      span {
        color: var(--alert);
      }
    }
  }
  @media (max-width: 720px) {
    width: 80px;
    height: 77px;
    position: fixed;
  }
`;
