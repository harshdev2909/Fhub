import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({childern}) =>{
    const [product,setproduct] = useState('');
    return(
        <CartContext.Provider value={{product,setproduct}}>
            {childern}
        </CartContext.Provider>
    )
}
export default CartContextProvider;