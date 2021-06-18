import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerSelect = styled.div`
  border: 1px solid var(--primary);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:focus-within {
    box-shadow: 0px 0px 0px 2px var(--primary);
  }
  select {
    display: inline-block;
    border: none;
    outline: none;
    text-align: center;
    text-align-last: center;
    font-size: 18px;
    color: var(--primary);
    option {
      color: var(--primary);
      font-weight: 500;
    }
  }
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 8px;
`;
