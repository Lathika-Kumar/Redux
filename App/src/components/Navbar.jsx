import { FaSearch, FaShoppingCart } from "react-icons/fa"

import { useSelector } from "react-redux"

import { Link } from "react-router-dom"

function Navbar() {

    /* ACCESS CART ITEMS FROM REDUX STORE */

    const cartItems = useSelector(
        state => state.cart.cartItems
    )

    return (

        <nav className="navbar">

            {/* LOGO */}

            <div className="logo">

                <Link
                    to="/"
                    className="logo-link"
                >
                    SHOPMATE
                </Link>

            </div>

            {/* NAV LINKS */}

            <ul className="nav-links">

                <li>

                    <Link
                        to="/"
                        className="nav-link-item"
                    >
                        Women
                    </Link>

                </li>

                <li>

                    <Link
                        to="/men"
                        className="nav-link-item"
                    >
                        Men
                    </Link>

                </li>

                <li>

                    <Link
                        to="/"
                        className="nav-link-item"
                    >
                        Kids
                    </Link>

                </li>

                <li>

                    <Link
                        to="/"
                        className="nav-link-item"
                    >
                        Shoes
                    </Link>

                </li>

                <li>

                    <Link
                        to="/"
                        className="nav-link-item"
                    >
                        Brands
                    </Link>

                </li>

            </ul>

            {/* RIGHT SIDE */}

            <div className="nav-icons">

                {/* SEARCH */}

                <div className="search-box">

                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Search anything"
                    />

                </div>

                {/* CART */}

                <Link
                    to="/cart"
                    className="cart-link"
                >

                    <div className="cart-icon">

                        <FaShoppingCart />

                        <span>

                            {cartItems.length}

                        </span>

                    </div>

                </Link>

            </div>

        </nav>
    )
}

export default Navbar