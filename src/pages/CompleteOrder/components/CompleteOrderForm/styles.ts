import styled, { css } from 'styled-components';
import { SectionBaseSyle } from '../../styles';

export const CompleteOrderFormContainer = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FormTitle = styled.div`
  display: flex;
  font-size: 1.125rem;
  font-weight: 700;
  font-family: 'Baloo 2', cursive;
  line-height: 130%;
`;

export const FormSectionContainer = styled(SectionBaseSyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }
  .street {
    grid-column: span 3;
  }
  .complement {
    grid-column: span 2;
  }
`;

export const PaymentOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors['base-error']};
  }

`;
