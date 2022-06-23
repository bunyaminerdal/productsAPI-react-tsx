import { product } from "./store"

type GetProductsRequestAction = {
    type: ActionType.GET_PRODUCTS_REQUEST
}
type GetProductsSuccessAction = {
    type: ActionType.GET_PRODUCTS_SUCCES,
    payload: product[]
}
type GetProductsFailAction = {
    type: ActionType.GET_PRODUCTS_FAIL,
    payload: string
}

export type Action = GetProductsRequestAction | GetProductsSuccessAction | GetProductsFailAction
export enum ActionType {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCES,
    GET_PRODUCTS_FAIL
}