import { Minus, Plus } from 'phosphor-react';
import { IconWrapper, QuantityInputContainer } from './styles';

interface QuantityInputProps {
  quantity: number;
  onStepUp: () => void;
  onStepDown: () => void;
}

export function QuantityInput({
  onStepUp,
  onStepDown,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <IconWrapper onClick={onStepDown} disabled={quantity <= 1}>
        <Minus size={14} weight="bold" />
      </IconWrapper>

      <input type="number" readOnly value={quantity} />

      <IconWrapper onClick={onStepUp}>
        <Plus size={14} weight="bold" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
