import React, { useState } from 'react';
import './UpcomingEvents.css';

const events = [
    {
        title: 'Gala Night',
        description: 'Join us for an elegant evening with live music and gourmet dining.',
        image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Summer Soiree',
        description: 'Celebrate the season with a vibrant outdoor party under the stars.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Corporate Meetup',
        description: 'Network with professionals over engaging talks and workshops.',
        image: 'https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Wine Tasting',
        description: 'Sample exquisite wines paired with gourmet appetizers.',
        image: 'https://via.placeholder.com/300x200?text=Wine+Tasting',
    },
    {
        title: 'Art Exhibition',
        description: 'Explore contemporary art from local and international artists.',
        image: 'https://via.placeholder.com/300x200?text=Art+Exhibition',
    },
    {
        title: 'Tech Conference',
        description: 'Discover the latest in technology and innovation.',
        image: 'https://via.placeholder.com/300x200?text=Tech+Conference',
    },
];

const UpcomingEvents = () => {
    const visibleCount = 3;
    const totalEvents = events.length;
    const maxIndex = totalEvents - visibleCount;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
    };

    return (
        <div className="upcoming-events-carousel">
            <h2>Upcoming Events</h2>
            <div className="carousel-wrapper">
                <button className="carousel-btn prev" onClick={handlePrev}>
                    ‹
                </button>
                <div className="carousel-view">
                    <div
                        className="carousel-track"
                        style={{
                            transform: `translateX(-${(100 / visibleCount) * currentIndex}%)`,
                        }}
                    >
                        {events.map((event, index) => (
                            <div className="carousel-card" key={index}>
                                <img src={event.image} alt={event.title} className="card-image" />
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="carousel-btn next" onClick={handleNext}>
                    ›
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