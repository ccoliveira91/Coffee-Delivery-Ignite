import styled from 'styled-components';

export const CartCoffeeCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`;

export const CartOptionsContainer = styled.div`
  display: flex;
  height: 2rem;
  gap: 0.5rem;
  align-items: center;
  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const CartCoffeeRemove = styled.button`
  display: flex;
  align-items: center;
  border: none;
  color: ${(props) => props.theme.colors['base-text']};
  background: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;
  font-size: 0.75rem;
  text-transform: uppercase;
  height: 100%;
  gap: 0.25rem;
  padding: 0 0.5rem;
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`;
