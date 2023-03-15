import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { Product } from '../pages/Home/components/CoffeeCard';
import { Order, orderReducer } from '../reducer/order-reducer';

export interface CartItem extends Product {
  id: number;
  quantity: number;
}

export interface Address {
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  uf: string;
}

export interface CartContextType {
  orderState: Order;
  addItemToOrder: (item: CartItem) => void;
  cartItems: CartItem[];
  increaseItemQuantityOrder: (itemId: number, type: 'increase') => void;
  decreaseItemQuantityOrder: (itemId: number, type: 'decrease') => void;
  removeItemFromOrder: (itemID: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [orderState, dispach] = useReducer(orderReducer, {
    id: '',
    items: [] as CartItem[],
    address: {} as Address,
    payment: 0,
    deliveryPrice: 0,
    totalPrice: 0,
  } as Order);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addItemToOrder(item: CartItem) {
    dispach({
      type: 'ADD_ITEM_TO_ORDER',
      payload: {
        item: item,
      },
    });
  }

  function increaseItemQuantityOrder(itemId: number, countType: 'increase') {
    dispach({
      type: 'INCREASE_QUANTITY_ITEM',
      payload: {
        itemId: itemId,
        countType: countType,
      },
    });
  }

  function decreaseItemQuantityOrder(itemId: number, countType: 'decrease') {
    dispach({
      type: 'DECREASE_QUANTITY_ITEM',
      payload: {
        itemId: itemId,
        countType: countType,
      },
    });
  }

  function removeItemFromOrder(itemID: number) {
    dispach({
      type: 'REMOVE_ITEM_FROM_ORDER',
      payload: {
        itemId: itemID,
      },
    });
  }

  return (
    <CartContext.Provider
      value={{
        orderState,
        addItemToOrder,
        cartItems,
        increaseItemQuantityOrder,
        decreaseItemQuantityOrder,
        removeItemFromOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
