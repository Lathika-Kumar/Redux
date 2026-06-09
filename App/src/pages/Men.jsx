import Navbar from "../components/Navbar"

import ProductCard from "../components/ProductCard"

function Men() {

    const products = [

        {
            id:1,
            name:"Men's Knitwear",
            price:1499,
            image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600"
        },

        {
            id:2,
            name:"New T-Shirt",
            price:1899,
            image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600"
        },

        {
            id:3,
            name:"Fashion Shirt",
            price:2199,
            image:"https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=600"
        },

        {
            id:4,
            name:"Printed Shirt",
            price:1599,
            image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600"
        },

        {
            id:5,
            name:"Casual Wear",
            price:2299,
            image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600"
        },

        {
            id:6,
            name:"Various T-Shirts",
            price:1899,
            image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600"
        }

    ]

    return (

        <div className="app">

            {/* TOP HEADER */}

            <div className="top-header">

                <div className="top-left">

                    <span>HC Cighter</span>
                    <span>Register</span>

                </div>

                <div className="top-center">

                    <span>Daily Deals</span>
                    <span>Sell</span>
                    <span>Help & Contact</span>

                </div>

                <div className="top-right">

                    <span>Your bag €3.99</span>

                </div>

            </div>

            {/* NAVBAR */}

            <Navbar />

            {/* HERO */}

            <section className="men-banner">

                <div className="men-overlay">

                    <div className="men-text">

                        <h1>
                            Mens wear
                        </h1>

                        <div className="menu-columns">

                            <div>

                                <p>Accessories</p>
                                <p>Caps</p>
                                <p>Bags</p>
                                <p>Shoes</p>

                            </div>

                            <div>

                                <p>Hoodies</p>
                                <p>Jackets</p>
                                <p>Jeans</p>
                                <p>Sweaters</p>

                            </div>

                            <div>

                                <p>Leather</p>
                                <p>Long Sleeve</p>
                                <p>Pants</p>
                                <p>Polos</p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* MAIN SECTION */}

            <section className="mens-layout">

                {/* FILTER */}

                <div className="filter-box">

                    <h3>
                        Filter 486 items
                    </h3>

                    <h4>
                        Color
                    </h4>

                    <div className="colors">

                        <span className="c1"></span>
                        <span className="c2"></span>
                        <span className="c3"></span>
                        <span className="c4"></span>
                        <span className="c5"></span>

                    </div>

                    <h4>
                        Size
                    </h4>

                    <div className="sizes">

                        <button>S</button>
                        <button>M</button>
                        <button>L</button>

                    </div>

                    <button className="apply-btn">
                        APPLY
                    </button>

                </div>

                {/* PRODUCTS */}

                <div className="mens-products">

                    {

                        products.map(product => (

                            <ProductCard
                                key={product.id}
                                product={product}
                            />

                        ))

                    }

                </div>

            </section>

            {/* BOTTOM BANNER */}

            <section className="bottom-banner">

                <div>

                    <h1>
                        Converse
                    </h1>

                    <p>
                        Stylers styles tough though to handle all your workouts
                    </p>

                    <button>
                        Shop Brand
                    </button>

                </div>

            </section>

        </div>
    )
}

export default Men