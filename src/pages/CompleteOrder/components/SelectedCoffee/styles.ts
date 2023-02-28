import styled from 'styled-components';
import { SectionBaseSyle } from '../../styles';

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const DetailsContainer = styled(SectionBaseSyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;
