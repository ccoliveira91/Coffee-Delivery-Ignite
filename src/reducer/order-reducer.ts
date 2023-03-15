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
    case 'ADD_ITEM_TO_ORDER': {
      const indexItemInOrder = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.item.id
      );
      if (indexItemInOrder >= 0) {
        const mergedItem = state.items.map((items) =>
          items.id === action.payload.item.id
            ? {
                ...items,
                quantity: items.quantity + action.payload.item.quantity,
              }
            : items
        );
        return { ...state, items: mergedItem };
      } else {
        const addItem = {
          ...state,
          items: [...state.items, action.payload.item],
        };
        return addItem;
      }
    }

    case 'INCREASE_QUANTITY_ITEM': {
      const itemInOrder = state.items.map((item) => {
        if (item.id === action.payload.itemId) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return { ...state, items: itemInOrder };
    }

    case 'DECREASE_QUANTITY_ITEM': {
      const itemInOrder = state.items.map((item) => {
        if (item.id === action.payload.itemId) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return { ...state, items: itemInOrder };
    }

    case 'REMOVE_ITEM_FROM_ORDER': {
      console.log(action.payload.itemId);
      const itemInOrder = state.items.filter(
        (item) => item.id !== action.payload.itemId
      );

      return { ...state, items: itemInOrder };
    }

    default:
      return state;
  }
}
