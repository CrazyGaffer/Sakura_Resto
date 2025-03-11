import PropTypes from 'prop-types';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const AutoCarousel = (props) => {
    const { slides, options } = props;
    const [emblaRef] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 4000 }),
    ]);

    return (
        <div className="testimonials-carousel">
            <div className="carousel__viewport" ref={emblaRef}>
                <div className="carousel__container">
                    {slides.map((testimonial, index) => (
                        <div className="carousel__slide" key={index}>
                            <div className="testimonial-content">
                                <p>{testimonial.text}</p>
                                <span>{testimonial.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

AutoCarousel.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        })
    ).isRequired,
    options: PropTypes.object,
};

AutoCarousel.defaultProps = {
    options: {},
};

export default AutoCarousel;