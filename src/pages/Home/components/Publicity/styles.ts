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
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const PublicityTitle = styled.text`
  color: ${(props) => props.theme.colors['base-title']};
  font-size: 3rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  line-height: 130%;
`;

export const PublicityItens = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
row-gap: 1.25rem;
`;
