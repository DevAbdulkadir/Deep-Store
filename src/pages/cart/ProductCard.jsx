import { useCart } from "../../context/CartContext";

function ProductCard({name, image, price, product}) {

    const {addToCart} = useCart();

    return (
        <div>
            <img src={image} />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
    )
}

export default ProductCard;
