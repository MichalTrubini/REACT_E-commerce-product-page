import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    const [item, setItems ] = useState([{inputQty:0}]);

    const addToCart = (inputQty) => {
        setItems(()=> [{inputQty}])
    };

    return (
        <CartContext.Provider value={{item, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;