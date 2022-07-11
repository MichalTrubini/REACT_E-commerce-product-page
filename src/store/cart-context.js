import { createContext } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    //const [items, setItems ] = useState([]);

    //const addToCart = (name, price) => {
    //    setItems({name, price})
    //};

    return (
        <CartContext.Provider value={{item: 0}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;