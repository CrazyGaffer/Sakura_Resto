import './PrivateEvents.css';

function PrivateEvents() {

    const example1 = "The event was a hit! Every detail was flawlessly executed, and the atmosphere was just perfect."
    const example2 = "Our celebration exceeded all expectations. The service and quality were top-notch."

    return (
        <section id="private-events" className="private-events">
            {/* Home Section */}
            <div className="private-events-hero">
                <h1 className= "hero-title">Make Your Event Unforgettable</h1>
                <p className= "hero-description">
                    Host your private event with us and let our experienced team create an atmosphere that exceeds your
                    expectations. Whether it’s an intimate gathering or a grand celebration, we have the perfect setting for you.
                </p>
                <button className="cta-btn">Book Now</button>
            </div>

            {/* Packages Section */}
            <div className="private-events-packages">
                <h2>Our Packages</h2>
                <div className="packages-grid">
                    <div className="package-card">
                        <h3>Basic Package</h3>
                        <p>
                            Perfect for small gatherings. Includes a selection of appetizers, beverages, and a simple decor setup.
                        </p>
                        <p className="price">$199</p>
                        <button className="package-btn">Learn More</button>
                    </div>
                    <div className="package-card">
                        <h3>Luxury Package</h3>
                        <p>
                            For lavish celebrations. Experience gourmet dining, state-of-the-art decor, and our premium service.
                        </p>
                        <p className="price">$699</p>
                        <button className="package-btn">Learn More</button>
                    </div>
                    <div className="package-card">
                        <h3>Premium Package</h3>
                        <p>
                            Ideal for mid-sized events. Enjoy a full-course meal, exclusive decor, and personalized service.
                        </p>
                        <p className="price">$399</p>
                        <button className="package-btn">Learn More</button>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="private-events-gallery">
                <h2>Event Gallery</h2>
                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src="https://via.placeholder.com/300" alt="Event 1" />
                    </div>
                    <div className="gallery-item">
                        <img src="https://via.placeholder.com/300" alt="Event 2" />
                    </div>
                    <div className="gallery-item">
                        <img src="https://via.placeholder.com/300" alt="Event 3" />
                    </div>
                    <div className="gallery-item">
                        <img src="https://via.placeholder.com/300" alt="Event 4" />
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="private-events-testimonials">
                <h2>What Our Clients Say</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p>{ example1 }</p>
                        <span>- John Doe</span>
                    </div>
                    <div className="testimonial-card">
                        <p>{ example2 }</p>
                        <span>- Jane Smith</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PrivateEvents;
