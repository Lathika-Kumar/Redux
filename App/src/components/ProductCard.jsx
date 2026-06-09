import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ product }) {

    const dispatch = useDispatch()

    return (

        <div className="product-card">

            <img
                src={product.image}
                alt=""
            />

            <div className="product-info">

                <h4>{product.name}</h4>

                <p>₹ {product.price}</p>

                <button
                    onClick={() => dispatch(addToCart(product))}
                >
                    Add To Cart
                </button>

            </div>

        </div>
    )
}

export default ProductCard