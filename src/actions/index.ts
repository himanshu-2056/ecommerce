import { Payload } from "../reducers";
import callApi from "./Api";

type ReturnType = {
    type: ActionTypes;
    payload?: Payload;
}

export default function AddCart(payload: Payload): ReturnType {
    return {
        type: ActionTypes.ADD_CART,
        payload,
    };
}
export function IncreaseQuantity(payload: Payload): ReturnType {
    return {
        type: ActionTypes.INCREASE_QUANTITY,
        payload,
    };
}
export function DecreaseQuantity(payload: Payload): ReturnType {
    return {
        type: ActionTypes.DECREASE_QUANTITY,
        payload,
    };
}
export function GetAllProduct(payload: Payload): ReturnType {
    return {
        type: ActionTypes.GET_ALL_PRODUCT,
        payload,
    };
}

export function GetNumberCart(): ReturnType {
    return {
        type: ActionTypes.GET_NUMBER_CART,
    };
}
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi("/", "GET", null).then((res) => {
            dispatch(GetAllProduct(res.data));
        });
    };
};

export enum ActionTypes {
    ADD_CART = "ADD_CART",
    INCREASE_QUANTITY = "INCREASE_QUANTITY",
    DECREASE_QUANTITY = "DECREASE_QUANTITY",
    GET_ALL_PRODUCT = "GET_ALL_PRODUCT",
    GET_NUMBER_CART = "GET_NUMBER_CART",
}