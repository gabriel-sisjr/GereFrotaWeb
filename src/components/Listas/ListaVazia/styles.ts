import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--alert);
  border-radius: 6px;

  svg {
    width: 32px;
    height: 32px;
    color: var(--alert);
    margin-right: 16px;
  }

  span {
    font-size: 20px;
    font-weight: 500;
    color: var(--alert);
  }
`;
