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
    case 'ADD_PRODUCT_TO_ORDER': {
      const itemExist = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.item.id
      );
      console.log(itemExist);

      if (itemExist < 0) {
        const updateState = {
          ...state,
          items: [...state.items, action.payload.item],
        };
        return updateState;
      } else {
        const mergedState = state.items.map(
          (items) => items.id === action.payload.item.id
        );
      }
      // console.log(updateState);
      // return updateState;
    }
    default:
      return state;
  }
}
