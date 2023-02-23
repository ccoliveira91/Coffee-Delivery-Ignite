import styled from 'styled-components';

export const CoffeeListContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

  h1 {
    color: ${(props) => props.theme.colors['base-title']};
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 41.6px;
    margin-bottom: 3.375rem;
  }
`;

export const CoffeeListContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
`;
