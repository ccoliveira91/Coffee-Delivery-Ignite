import styled from 'styled-components';
import publicityBackground from '../../../../assets/publicity-background.svg';

export const PublicityContainer = styled.section`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => `url(${publicityBackground})`} center center
    no-repeat fixed;
  background-size: cover;
`;

export const PublicityContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const PublicityTitle = styled.h1`
  color: ${(props) => props.theme.colors['base-title']};
  font-size: 3rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 1rem;
`;

export const PublicitySubTitle = styled.p`
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: 1.25rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 26px;
`;

export const PublicityItensContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;

const ITENS_COLOR = {
  yellow_dark: 'brand-yellow-dark',
  yellow: 'brand-yellow',
  gray_dark: 'base-text',
  purple: 'brand-purple'
} as const;

interface PublicityItemProps {
  backgroundColor: keyof typeof ITENS_COLOR;
}

export const PublicityItem = styled.div<PublicityItemProps>`
  color: ${(props) => props.theme.colors['base-text']};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    width: 32px;
    height: 32px;
    background: ${(props) => props.theme.colors[ITENS_COLOR[props.backgroundColor]]};
    border-radius: 999px;
    padding: 8px;
    color: ${(props) => props.theme.colors['base-background']};
  }

`;
