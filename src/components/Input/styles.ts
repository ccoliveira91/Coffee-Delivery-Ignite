import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${(props) => props.theme.colors['base-error']};
  }
`;

interface InputContainerProps {
  hasError: boolean;
}

export const InputStyleContainer = styled.div<InputContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-button']};

  &:focus-within {
    border-color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }
`;

export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;
  padding: 0 0.75rem;
  height: 100%;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors['base-text']};
  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`;

export const RightText = styled.p`
  font-size: 0.875rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.colors['base-label']};
`;
