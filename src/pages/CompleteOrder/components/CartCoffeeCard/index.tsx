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
  return (
    <CartCoffeeCardContainer>
      <div>
        <img src={arabe} />
      </div>
      <div>
        <RegularText color="subtitle">Expresso Tradicional</RegularText>
        <CartOptionsContainer>
          <QuantityInput />
          <CartCoffeeRemove>
            <Trash size={16} />
            Remover
          </CartCoffeeRemove>
        </CartOptionsContainer>
      </div>

      <p>R$ 9,90</p>
    </CartCoffeeCardContainer>
  );
}
