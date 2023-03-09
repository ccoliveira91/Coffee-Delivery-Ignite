import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { Product } from '../pages/Home/components/CoffeeCard';
import { produce } from 'immer';
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

interface CartContextType {
  orderState: Order;
  addItemToOrder: (item: CartItem) => void;
  cartItems: CartItem[];
  cartQuantity: number;
  addProductToCart: (product: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => void;
  deleteCartItem: (cartItemId: number) => void;
  cartItemsTotal: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [orderState, dispach] = useReducer(orderReducer, {
    id: '',
    items: [],
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

  function validationOrder() {}

  function addItemToOrder(item: CartItem) {
    dispach({
      type: 'ADD_PRODUCT_TO_CART',
      payload: {
        item: item,
      },
    });
  }

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

  function deleteCartItem(cartItemid: number) {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemid
      );
      if (productExistsInCart >= 0) {
        draft.splice(productExistsInCart /*the index */, 1);
        // filter(t => t.id !== action.id);
      }
    });
    setCartItems(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        orderState,
        addItemToOrder,
        cartItems,
        addProductToCart,
        cartQuantity,
        changeCartItemQuantity,
        deleteCartItem,
        cartItemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
