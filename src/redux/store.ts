import { configureStore } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/Product";

export interface CartItem {
    id:string;
    product:Product
}

interface CartState {
    count: number;
    items: Array<CartItem>;
}

const initialState: CartState = {
    count: 0,
    items: []
}


const cartReducer = (state: CartState = initialState, action: PayloadAction<CartItem>) => {
    switch (action.type){
        case "add":
        {
            const count = state.count + 1;

            const products = [...state.items, action.payload];
            return {count: count, items: products}
        }
        case "remove":
        {
            const count = state.count -1 ;

            const prodLoc = state.items.findIndex(item => item.id === action.payload.id);
            let products:Array<CartItem>;
            //Recreate array without the product that is being removed from the cart.
            if(prodLoc + 1 !== state.items.length){
                products = [...state.items.slice(0, prodLoc), ...state.items.slice(prodLoc+1)];
            }
            else{
                products = [...state.items.slice(0, prodLoc)];
            }
            
            return {count: count, items: products};
        }
        default:
            return state;
    }
}


export const cartStore = configureStore({
    reducer: cartReducer
  });

export type RootState = ReturnType<typeof cartStore.getState>
export type AppDispatch = typeof cartStore.dispatch