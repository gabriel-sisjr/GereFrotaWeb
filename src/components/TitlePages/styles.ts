import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);

  svg {
    width: 38px;
    height: 38px;
    color: var(--white);
  }

  h1 {
    margin-left: 20px;
    color: var(--white);
  }

  @media (max-width: 720px) {
    margin-top: 0px;
    svg {
      width: 32px;
      height: 32px;
    }
    h1 {
      font-size: 24px;
    }
  }
`;
