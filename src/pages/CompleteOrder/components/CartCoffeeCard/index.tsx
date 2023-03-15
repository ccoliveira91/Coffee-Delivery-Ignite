import {
  CartCoffeeCardContainer,
  CartCoffeeRemove,
  CartOptionsContainer,
} from './styles';
import { RegularText } from '../../../../components/Typography';
import { QuantityInput } from '../../../../components/QuantityInput';
import { Trash } from 'phosphor-react';

import { CartContext, CartItem } from '../../../../contexts/CartContext';
import { useContext } from 'react';

interface CartCoffeeCardProps {
  product: CartItem;
}

export function CartCoffeeCard({ product }: CartCoffeeCardProps) {
  const productTotal = product.price * product.quantity;

  const {
    increaseItemQuantityOrder,
    decreaseItemQuantityOrder,
    removeItemFromOrder,
  } = useContext(CartContext);

  function handleIncrease() {
    increaseItemQuantityOrder(product.id, 'increase');
  }

  function handleDecrease() {
    decreaseItemQuantityOrder(product.id, 'decrease');
  }

  function handleDeleteItem() {
    removeItemFromOrder(product.id);
  }

  return (
    <CartCoffeeCardContainer key={product.id}>
      <div>
        <img src={product.imageUrl} />
        <div>
          <RegularText color="subtitle">{product.name}</RegularText>
          <CartOptionsContainer>
            <QuantityInput
              onStepDown={handleDecrease}
              onStepUp={handleIncrease}
              quantity={product.quantity}
            />
            <CartCoffeeRemove type="button" onClick={handleDeleteItem}>
              <Trash size={16} />
              REMOVER
            </CartCoffeeRemove>
          </CartOptionsContainer>
        </div>
      </div>

      <p>
        R${' '}
        {productTotal.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
        })}
      </p>
    </CartCoffeeCardContainer>
  );
}
