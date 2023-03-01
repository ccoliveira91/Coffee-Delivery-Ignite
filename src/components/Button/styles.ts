import styled from "styled-components";

export const ButtonContainer = styled.button`
 background: ${(props) => props.theme.colors['brand-yellow']};
 color: ${(props) => props.theme.colors['base-white']};
 border: none;
 border-radius: 6px;
 text-transform: uppercase;
 padding: 0.75rem 2.8rem;
 line-height: 1.3rem;
 font-size: 0.875rem;
 font-weight: 700;
 transition: 0.4s;

 &:not(:disabled):hover {
    background: ${(props) => props.theme.colors['brand-yellow-dark']};
 }
`;