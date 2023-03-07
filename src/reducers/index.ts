import { combineReducers } from "redux";
import { ActionTypes } from "../actions";

export type Payload = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export type Cart = Payload & {
  quantity: number;
};

type State = {
  numberCart: number;
  Carts: Cart[];
  _products: any[];
};

type Action = {
  type: ActionTypes;
  payload: Payload | Payload[] | number;
};

const initialState: State = {
  numberCart: 0,
  Carts: [],
  _products: [],
};

function todoProduct(state = initialState, action: Action) {
  console.log("action", action);
  switch (action.type) {
    case ActionTypes.GET_ALL_PRODUCT:
      return {
        ...state,
        _products: action.payload,
      };
    case ActionTypes.GET_NUMBER_CART:
      return {
        ...state,
      };
    case ActionTypes.ADD_CART:
      action.payload = action.payload as Payload;
      if (state.numberCart === 0) {
        let cart: Cart = {
          id: action.payload.id,
          quantity: 1,
          title: action.payload.title,
          description: action.payload.description,
          image: action.payload.image,
          price: action.payload.price,
        };
        console.log(cart);
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          action.payload = action.payload as Payload;
          if (item.id == action.payload.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            title: action.payload.title,
            description: action.payload.description,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case ActionTypes.INCREASE_QUANTITY:
      action.payload = action.payload as number;
      state.numberCart++;
      state.Carts[action.payload].quantity++;

      return {
        ...state,
      };
    case ActionTypes.DECREASE_QUANTITY:
      action.payload = action.payload as number;
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }

      return {
        ...state,
      };

    default:
      return state;
  }
}

const ShopApp = combineReducers({
  _todoProduct: todoProduct,
});
export default ShopApp;
