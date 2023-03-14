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
  cartQuantity: number;
  increaseItemQuantityOrder: (itemId: number, type: 'increase') => void;
  decreaseItemQuantityOrder: (itemId: number, type: 'decrease') => void;
  removeItemOrder: (cartItemId: number) => void;
  cartItemsTotal: number;
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

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  const [orderIsValid, setOrderIsValid] = useState<boolean>(false);

  useEffect(() => {}, [orderIsValid]);

  // function validationOrder() {}

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

  function removeItemOrder(itemId: number) {
    dispach({
      type: 'REMOVE_ITEM_IN_ORDER',
      payload: {
        itemId: itemId,
      },
    });
  }
  // filter(t => t.id !== action.id);

  return (
    <CartContext.Provider
      value={{
        orderState,
        addItemToOrder,
        cartItems,
        cartQuantity,
        increaseItemQuantityOrder,
        decreaseItemQuantityOrder,
        removeItemOrder,
        cartItemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
