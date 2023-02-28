import { Minus, Plus } from 'phosphor-react';
import { IconWrapper, QuantityInputContainer } from './styles';

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" step={1} placeholder="1" />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
