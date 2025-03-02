import { DotButton, useDotButton } from './EmblaCarouselDotButton.jsx'
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons.jsx'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
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

        {/* Arrow buttons positioned outside the carousel */}
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

        {/* Dots for slide indicators */}
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
              <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={'embla__dot' + (index === selectedIndex ? ' embla__dot--selected' : '')}
              />
          ))}
        </div>
      </section>
  )
}

export default EmblaCarousel;