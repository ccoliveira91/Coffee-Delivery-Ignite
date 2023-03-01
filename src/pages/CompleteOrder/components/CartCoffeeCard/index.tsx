import {
  CartCoffeeCardContainer,
  CartCoffeeRemove,
  CartOptionsContainer,
} from './styles';
import arabe from '../../../../assets/products/arabe.svg';
import { RegularText } from '../../../../components/Typography';
import { QuantityInput } from '../../../../components/QuantityInput';
import { Trash } from 'phosphor-react';

export function CartCoffeeCard() {
  function handleStepUp() {}
  function handleStepDown() {}

  return (
    <CartCoffeeCardContainer>
      <div>
        <img src={arabe} />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <CartOptionsContainer>
            <QuantityInput
              onStepDown={handleStepDown}
              onStepUp={handleStepUp}
              quantity={1}
            />
            <CartCoffeeRemove>
              <Trash size={16} />
              Remover
            </CartCoffeeRemove>
          </CartOptionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CartCoffeeCardContainer>
  );
}
