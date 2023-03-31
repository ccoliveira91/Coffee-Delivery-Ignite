import {
  AddCartWrapper,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeName,
  CoffeTag,
} from './styles';
import { QuantityInput } from '../../../../components/QuantityInput';
import { ShoppingCart } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CartContext, CartItem } from '../../../../contexts/CartContext';

export interface Product {
  id: number;
  tags: string[];
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductProps {
  product: Product;
}

export function CoffeeCard({ product }: ProductProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItemToOrder } = useContext(CartContext);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddToCart() {
    const productToAdd = {
      id: product.id,
      quantity: quantity,
      tags: product.tags,
      name: product.name,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
    };
    addItemToOrder(productToAdd);
  }

  return (
    <CoffeeCardContainer>
      <img src={product.imageUrl} />
      <CoffeTag>
        {product.tags.map((tag) => (
          <span key={`${product.id}${tag}`}>{tag}</span>
        ))}
      </CoffeTag>
      <CoffeeName>
        <span>{product.name}</span>
        <p>{product.description}</p>
      </CoffeeName>

      <CoffeeCardFooter>
        <div>
          <span>R$</span>
          <h2>
            {product.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </h2>
        </div>
        <AddCartWrapper>
          <QuantityInput
            onStepUp={handleIncrease}
            onStepDown={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}
