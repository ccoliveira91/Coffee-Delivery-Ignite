import {
  AddCartWrapper,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeName,
  CoffeTag,
} from './styles';
import expressotradicional from '../../../../assets/coffees-images/expresso-tradicional.svg';
import { QuantityInput } from '../../../../components/QuantityInput';
import { ShoppingCart } from 'phosphor-react';

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
  return (
    <CoffeeCardContainer>
      <img src={product.imageUrl} />
      <CoffeTag>
        {product.tags.map(tag => (
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
          <h2>{product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}
