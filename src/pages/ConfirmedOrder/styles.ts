import styled from 'styled-components';

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  gap: 2.5rem;

  h1 {
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DeliveryDetailsContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme.colors['base-background']};
  gap: 2rem;
  min-width: 32rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 6px 36px 6px 36px;
    z-index: -1;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;

const ITENS_COLOR = {
  yellow_dark: 'brand-yellow-dark',
  yellow: 'brand-yellow',
  gray_dark: 'base-text',
  purple: 'brand-purple',
} as const;

interface DeliveryDetailsItemProps {
  backgroundColor: keyof typeof ITENS_COLOR;
}

export const DeliveryDetailsItem = styled.div<DeliveryDetailsItemProps>`
  color: ${(props) => props.theme.colors['base-text']};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    width: 32px;
    height: 32px;
    background: ${(props) =>
      props.theme.colors[ITENS_COLOR[props.backgroundColor]]};
    border-radius: 999px;
    padding: 8px;
    color: ${(props) => props.theme.colors['base-background']};
  }
`;
