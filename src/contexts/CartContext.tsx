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
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => void;
  deleteCartItem: (cartItemId: number) => void;
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

  function changeCartItemQuantity(
    cartItemid: number,
    type: 'increase' | 'decrease'
  ) {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemid
      );
      if (productExistsInCart >= 0) {
        const item = draft[productExistsInCart];
        draft[productExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1;
      }
    });
    setCartItems(newCart);
  }

  function deleteCartItem(cartItemId: number) {
    setCartItems((state) => state.filter((item) => item.id !== cartItemId));
  }
  // draft.splice(productExistsInCart, 1);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProductToCart,
        cartQuantity,
        changeCartItemQuantity,
        deleteCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
