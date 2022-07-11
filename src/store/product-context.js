import { createContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({children}) {
    const [item, setItems ] = useState([]);

    const test = (name, price) => {
        setItems({name, price})
    };

    return (
        <ProductContext.Provider value={{item, test}}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductContext;