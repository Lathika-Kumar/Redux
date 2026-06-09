function Newsletter() {

    return (

        <section className="newsletter">

            <h2>
                10% Discount for your subscription
            </h2>

            <p>
                Carry the day in style and receive latest offers.
            </p>

            <div className="newsletter-box">

                <input
                    type="email"
                    placeholder="Your e-mail"
                />

                <button>
                    Subscribe
                </button>

            </div>

        </section>
    )
}

export default Newsletter