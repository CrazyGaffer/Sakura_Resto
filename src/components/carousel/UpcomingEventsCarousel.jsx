import { DotButton, useDotButton } from './CarouselDotButton.jsx'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrowButtons.jsx'
import useEmblaCarousel from 'embla-carousel-react'

const UpcomingEventsCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((event, i) => (
                        <div className="embla__slide" key={i}>
                            <img src={event.image} alt={event.title} />
                            <div className="embla__slide__title">{event.title}</div>
                            <div className="embla__slide__description">{event.description}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer container with dots on the left and arrow buttons on the right */}
            <div className="embla__footer">
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot' + (index === selectedIndex ? ' embla__dot--selected' : '')}
                        />
                    ))}
                </div>
                <div className="embla__arrows">
                    <PrevButton
                        className="embla__button embla__button--prev"
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        className="embla__button embla__button--next"
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
        </section>
    )
}

export default UpcomingEventsCarousel;