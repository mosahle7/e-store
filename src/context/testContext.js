import React, {createContext, useReducer} from "react";
import { CartReducer } from "./cardReducer";
export const CartContext = createContext();

const initialState = {cartItems: []};


const CartContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(CartReducer,initialState);
    const addProduct = payload => {
        dispatch({type :'ADD', payload});
        debugger;
    }
    const Contextvalues = {
        addProduct,
        ...initialState
    }
    return(
        <CartContext.Provider value= {Contextvalues}>
            {children}
        </CartContext.Provider>

    )
}
export default CartContextProvider;