import Nav from "./components/Nav";
import SingleProduct from "./components/SingleProduct";
import {CartProvider} from "./store/cart-context";

function App() {
  return (
    <div className="wrapper">
      <CartProvider>
        <Nav />
        <SingleProduct />
      </CartProvider>
    </div>
  );
}

export default App;
