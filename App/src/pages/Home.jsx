import Navbar from "../components/Navbar"

function Home() {

    return (

        <div className="app">

            {/* NAVBAR */}

            <Navbar />

            {/* HERO */}

            <section className="hero">

                <div className="hero-content">

                    <h1>
                        Background and development
                    </h1>

                    <p>
                        Convergent the dictates of the consumer:
                        background and development
                    </p>

                    <button>
                        View All
                    </button>

                </div>

            </section>

            {/* FEATURED */}

            <section className="featured">

                <div className="featured-image">

                    <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600"
                        alt=""
                    />

                </div>

                <div className="featured-content">

                    <h2>Vera Bradley</h2>

                    <p>
                        Blurry title dry in style with the most luxurious
                        handbag collection for women.
                    </p>

                    <button>
                        Shop Now
                    </button>

                </div>

            </section>

            {/* PROMO GRID */}

            <section className="promo-grid">

                {/* LEFT */}

                <div className="promo-left">

                    <div className="promo-box blue-box">

                        <h1>WOW</h1>

                        <p>Check WHAT!</p>

                    </div>

                    <div className="promo-box yellow-box">

                        <h1>MEN</h1>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="promo-image">

                    <div className="promo-overlay">

                        <h1>
                            Let the Game begin
                        </h1>

                        <p>
                            Registration is on - get ready for the 0warn
                        </p>

                        <button>
                            Register
                        </button>

                    </div>

                </div>

            </section>

            {/* NEWSLETTER */}

            <section className="newsletter">

                <h2>
                    10% Discount for your subscription
                </h2>

                <p>
                    Carry the day in style and receive latest offers.
                </p>

                <div className="newsletter-box">

                    <input
                        type="text"
                        placeholder="Your e-mail"
                    />

                    <button>
                        Subscribe
                    </button>

                </div>

            </section>

            {/* FOOTER */}

            <footer className="footer">

                <div>

                    <h4>QUESTIONS?</h4>

                    <p>Help</p>

                    <p>Track Order</p>

                    <p>Returny</p>

                </div>

                <div>

                    <h4>WHAT'S IN STORE</h4>

                    <p>Women</p>

                    <p>Men</p>

                    <p>Product A-Z</p>

                </div>

                <div>

                    <h4>FOLLOW US</h4>

                    <p>Facebook</p>

                    <p>Twitter</p>

                    <p>YouTube</p>

                </div>

                <div>

                    <p>©2016 shopmate Ltd</p>

                </div>

            </footer>

        </div>
    )
}

export default Home