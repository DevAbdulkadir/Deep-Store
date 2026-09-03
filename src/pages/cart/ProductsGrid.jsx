import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

function ProductsGrid() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch('/products.json');
            const data = await response.json();
            setProducts(data);
        }
        fetchProduct();
    }, [])

    const fashionProducts = products.filter((product) => product.category === "fashion");

    return (
        <div>
            {/* {fashionProductList} */}
            {fashionProducts.map((f) => (
                <ProductCard
                    key={f.id}
                    name={f.name}
                    image={f.image}
                    price={f.priceCents}
                    product={f}
                />
            ))}
        </div>
    )
}

export default ProductsGrid;
