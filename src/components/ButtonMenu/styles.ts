import styled from 'styled-components';

export const Container = styled.button`
  width: 22vh;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  border-radius: 10px;

  svg {
    width: 50px;
    height: 50px;
    margin-bottom: 16px;
  }

  font-size: 24px;
  font-weight: bold;
  color: var(--white);

  :hover {
    background-color: var(--secundary);
    cursor: pointer;
  }
`;
