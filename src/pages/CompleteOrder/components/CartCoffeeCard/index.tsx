import {
  CartCoffeeCardContainer,
  CartCoffeeRemove,
  CartOptionsContainer,
} from './styles';
import arabe from '../../../../assets/products/arabe.svg';
import { RegularText } from '../../../../components/Typography';
import { QuantityInput } from '../../../../components/QuantityInput';
import { Trash } from 'phosphor-react';

import { CartItem } from '../../../../contexts/CartContext';

interface CartCoffeeCardProps {
  product: CartItem;
}

export function CartCoffeeCard({ product }: CartCoffeeCardProps) {
  function handleIncrease() {}

  function handleDecrease() {}

  return (
    <CartCoffeeCardContainer>
      <div>
        <img src={arabe} />
        <div>
          <RegularText color="subtitle">{product.name}</RegularText>
          <CartOptionsContainer>
            <QuantityInput
              onStepDown={handleDecrease}
              onStepUp={handleIncrease}
              quantity={product.quantity}
            />
            <CartCoffeeRemove>
              <Trash size={16} />
              Remover
            </CartCoffeeRemove>
          </CartOptionsContainer>
        </div>
      </div>

      <span>
        R$
        <p>
          {product.price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}
        </p>
      </span>
    </CartCoffeeCardContainer>
  );
}
