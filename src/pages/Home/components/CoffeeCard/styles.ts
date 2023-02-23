import styled from 'styled-components';

export const CoffeeCardContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  padding-top: 0;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const CoffeTag = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;

  span {
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
    background: ${(props) => props.theme.colors['brand-yellow-light']};
    border-radius: 999px;
    padding: 0.25rem 0.5rem;
    font-weight: 700;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
  }
`;

export const CoffeeName = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 20px;
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  p {
    text-align: center;
    font-size: 14px;
    color: ${(props) => props.theme.colors['base-label']};
    font-weight: 400;
    line-height: 18px;
  }
`;

export const CoffeeCardFooter = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    gap: 3px;
    span {
      font-size: 14px;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      line-height: 0.75rem;
    }
    h2 {
      font-size: 24px;
      font-weight: 800;
      font-family: 'Baloo 2', cursive;
      line-height: 2rem;
    }
  }
`;
