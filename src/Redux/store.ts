import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Action, ActionType } from './Actions'

export interface product {
    id: number,
    title: string,
    description: string,
    price: number,
    brand: string,
    category: string,
    thumbnail: string
}

export interface State {
    data: {
        products: product[]

    }
    loading: boolean
    error: string | null
}
const initialProducts = {
    data: {
        products: []
    },
    loading: false,
    error: null
}

const productsReducer = (state: State = initialProducts, action: Action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCTS_REQUEST:
            return { ...state, loading: true }
        case ActionType.GET_PRODUCTS_SUCCES:
            return { ...state, loading: false, data: { products: action.payload } }
        case ActionType.GET_PRODUCTS_FAIL:
            return { ...state, loading: false, data: { products: [] }, error: action.payload }
        default:
            return state
    }
}
const RootReducer = combineReducers({ productsReducer })
export const store = configureStore({ reducer: RootReducer })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch