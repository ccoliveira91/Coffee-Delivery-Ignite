import { createContext, ReactNode, useState } from 'react';
import { Product } from '../pages/Home/components/CoffeeCard';
import { produce } from 'immer';

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  addProductToCart: (product: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.length;

  function addProductToCart(product: CartItem) {
    const productAllreadyExistInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (productAllreadyExistInCart < 0) {
        draft.push(product);
      } else {
        draft[productAllreadyExistInCart].quantity += product.quantity;
      }
    });
    setCartItems(newCart);
  }

  return (
    <CartContext.Provider value={{ cartItems, addProductToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
