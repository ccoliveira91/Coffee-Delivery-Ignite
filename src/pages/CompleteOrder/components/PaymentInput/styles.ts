import styled from 'styled-components';

export const PaymentInputContainer = styled.div`
  padding: 0 1rem;
  background: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  transition: 0.4s;
  text-transform: uppercase;

  svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }

  user-select: none;
`;
