import { createContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({children}) {
    const [item, setItems ] = useState([{inputQty:0}]);

    const addToCart = (inputQty) => {
        setItems(()=> [{inputQty}])
    };

    return (
        <ProductContext.Provider value={{item, addToCart}}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductContext;