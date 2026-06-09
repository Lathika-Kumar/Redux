import { useSelector, useDispatch } from "react-redux"

import {

    removeFromCart,
    increaseQuantity,
    decreaseQuantity

} from "../features/cart/cartSlice"

import Navbar from "../components/Navbar"

function Cart() {

    const dispatch = useDispatch()

    const cartItems = useSelector(
        state => state.cart.cartItems
    )

    const totalPrice = cartItems.reduce(

        (total, item) =>

            total + item.price * item.quantity,

        0
    )

    return (

        <div className="app">

            <Navbar />

            <div className="cart-page">

                <h1>
                    Shopping Cart
                </h1>

                {

                    cartItems.length === 0 ? (

                        <h2>
                            Cart is Empty
                        </h2>

                    ) : (

                        cartItems.map(item => (

                            <div
                                className="cart-item"
                                key={item.id}
                            >

                                <img
                                    src={item.image}
                                    alt=""
                                />

                                <div className="cart-info">

                                    <h3>
                                        {item.name}
                                    </h3>

                                    <p>
                                        ₹ {item.price}
                                    </p>

                                    <div className="cart-quantity">

                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    decreaseQuantity(item.id)
                                                )
                                            }
                                        >
                                            -
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    increaseQuantity(item.id)
                                                )
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            dispatch(
                                                removeFromCart(item.id)
                                            )
                                        }
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>

                        ))
                    )

                }

                <div className="cart-total">

                    <h2>
                        Total : ₹ {totalPrice}
                    </h2>

                </div>

            </div>

        </div>
    )
}

export default Cart