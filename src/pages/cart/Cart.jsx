import CartDeails from "./CartDeails";
import EmptyCart from "./EmptyCart";
import { useCart } from "../../context/CartContext";
import ProductsGrid from "./ProductsGrid";


function Cart() {

    const {cart, addToCart} = useCart();

    return (
        <>
            {cart.length === 0 ? <EmptyCart />
            :<CartDeails
                cart={cart}
                addToCart={addToCart}
            />}
                <ProductsGrid />
        </>

    )
}

export default Cart;
