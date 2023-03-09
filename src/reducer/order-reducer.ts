import { Address, CartItem } from '../contexts/CartContext';

export interface Order {
  id: string;
  items: CartItem[];
  address: Address;
  payment: number;
  deliveryPrice: number;
  totalPrice: number;
}

export function orderReducer(state: Order, action: any) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const updateState = {
        ...state,
        items: action.payload.item,
      };
      return updateState;
    }
    default:
      return state;
  }
}
