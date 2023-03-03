import {
  CartCoffeeCardContainer,
  CartCoffeeRemove,
  CartOptionsContainer,
} from './styles';
import arabe from '../../../../assets/products/arabe.svg';
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

  const { changeCartItemQuantity, deleteCartItem } = useContext(CartContext);

  function handleIncrease() {
    changeCartItemQuantity(product.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(product.id, 'decrease')
  }

  function handleDeleteItem() {
    deleteCartItem(product.id)
  }

  return (
    <CartCoffeeCardContainer>
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
            <CartCoffeeRemove>
              <Trash size={16} onClick={handleDeleteItem}/>
              Remover
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
