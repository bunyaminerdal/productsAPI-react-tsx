import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "./Actions";
import { State } from "./store";

export const GetProducts = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: ActionType.GET_PRODUCTS_REQUEST })
        const { data } = await axios.get<State, State>("https://dummyjson.com/products")

        dispatch({ type: ActionType.GET_PRODUCTS_SUCCES, payload: data.products })
    } catch (error: any) {
        dispatch({ type: ActionType.GET_PRODUCTS_FAIL, payload: error.message })
    }
}

export const GetProductsSeacrh = (keyword: string | undefined) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: ActionType.GET_PRODUCTS_REQUEST })
        const { data } = await axios.get<State, State>(`https://dummyjson.com/products/search?q=${keyword}`)

        dispatch({ type: ActionType.GET_PRODUCTS_SUCCES, payload: data.products })
    } catch (error: any) {
        dispatch({ type: ActionType.GET_PRODUCTS_FAIL, payload: error.message })
    }
}