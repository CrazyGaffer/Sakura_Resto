import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './UpcomingEvents.css';
import events from "../data/eventsData.js";

const UpcomingEvents = () => {
    // Set visibleCount based on the current window width:
    // 1 card on screens narrower than 768px; otherwise, 3 cards.
    const [visibleCount, setVisibleCount] = useState(window.innerWidth < 768 ? 1 : 3);
    const totalEvents = events.length;
    const maxIndex = totalEvents - visibleCount;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragStart, setDragStart] = useState(null);
    const [dragOffset, setDragOffset] = useState(0);

    // Refs for measuring container and track gap
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    // States for available width, gap, and computed card width
    const [availableWidth, setAvailableWidth] = useState(0);
    const [gap, setGap] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);

    // Update visibleCount on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(1);
            } else {
                setVisibleCount(3);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Measure available width (subtracting horizontal padding)
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                const style = window.getComputedStyle(containerRef.current);
                const paddingLeft = parseFloat(style.paddingLeft);
                const paddingRight = parseFloat(style.paddingRight);
                const totalPadding = paddingLeft + paddingRight;
                const innerWidth = containerRef.current.offsetWidth - totalPadding;
                setAvailableWidth(innerWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // Measure the gap from the carousel track
    useEffect(() => {
        if (trackRef.current) {
            const style = window.getComputedStyle(trackRef.current);
            const gapValue = parseFloat(style.gap) || 0;
            setGap(gapValue);
        }
    }, []);

    // Compute each card's width based on available width and gap.
    useEffect(() => {
        if (availableWidth && gap >= 0) {
            const computedCardWidth = (availableWidth - (visibleCount - 1) * gap) / visibleCount;
            setCardWidth(computedCardWidth);
        }
    }, [availableWidth, gap, visibleCount]);

    // Effective card width includes the gap to the right (for translation purposes)
    const effectiveCardWidth = cardWidth + gap;

    // Mouse events
    const handleMouseDown = (e) => {
        e.preventDefault();
        setDragStart(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (dragStart !== null) {
            const offset = e.clientX - dragStart;
            setDragOffset(offset);
        }
    };

    const handleMouseUp = () => {
        if (dragStart !== null) {
            if (Math.abs(dragOffset) > effectiveCardWidth * 0.25) {
                if (dragOffset < 0 && currentIndex < maxIndex) {
                    setCurrentIndex((prev) => prev + 1);
                } else if (dragOffset > 0 && currentIndex > 0) {
                    setCurrentIndex((prev) => prev - 1);
                }
            }
            setDragStart(null);
            setDragOffset(0);
        }
    };

    // Touch events
    const handleTouchStart = (e) => {
        setDragStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (dragStart !== null) {
            const offset = e.touches[0].clientX - dragStart;
            setDragOffset(offset);
        }
    };

    const handleTouchEnd = () => {
        if (dragStart !== null) {
            if (Math.abs(dragOffset) > effectiveCardWidth * 0.25) {
                if (dragOffset < 0 && currentIndex < maxIndex) {
                    setCurrentIndex((prev) => prev + 1);
                } else if (dragOffset > 0 && currentIndex > 0) {
                    setCurrentIndex((prev) => prev - 1);
                }
            }
            setDragStart(null);
            setDragOffset(0);
        }
    };

    // Calculate translateX using the effective card width
    const translateX = -currentIndex * effectiveCardWidth + dragOffset;

    const handleNext = () =>
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    const handlePrev = () =>
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));

    return (
        <div className="upcoming-events-carousel">
            <h2>Upcoming Events</h2>
            <div className="carousel-wrapper">
                <button className="carousel-btn prev" onClick={handlePrev}>
                    <FaChevronLeft />
                </button>
                <div
                    className="carousel-view"
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="carousel-track"
                        ref={trackRef}
                        style={{
                            transform: `translateX(${translateX}px)`,
                            transition: dragStart ? 'none' : 'transform 0.3s ease-out',
                        }}
                    >
                        {events.map((event, index) => (
                            <div
                                className="carousel-card"
                                key={index}
                                style={{ width: `${cardWidth}px` }}
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="card-image"
                                    draggable="false"
                                    onDragStart={(e) => e.preventDefault()}
                                />
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="carousel-btn next" onClick={handleNext}>
                    <FaChevronRight />
                </button>
            </div>
            <div className="carousel-dots">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${idx === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvents;