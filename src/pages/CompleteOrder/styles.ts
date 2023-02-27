import styled from 'styled-components';

export const CompleteOrderContainer = styled.form`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const SectionBaseSyle = styled.div`
width: 100%;
border-radius: 6px;
padding: 2.5rem;
background: ${(props) => props.theme.colors['base-card']};
`;