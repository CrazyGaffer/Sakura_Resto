import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import '/src/pages/about/subitems/WorkingHours/WorkingHours.css';

const WorkingHoursInfo = () => {
    const { t } = useTranslation();
    const [activeGroup, setActiveGroup] = useState('monday-friday');
    const [animationDirection, setAnimationDirection] = useState('right');
    // Initially, no user interaction has occurred.
    const [hasInteracted, setHasInteracted] = useState(false);

    const handleGroupChange = (newGroup) => {
        // Set the animation direction based on the new group.
        const direction = newGroup === 'saturday-sunday' ? 'left' : 'right';
        setAnimationDirection(direction);
        // Mark that user interaction has occurred.
        if (!hasInteracted) {
            setHasInteracted(true);
        }
        setActiveGroup(newGroup);
    };

    // Animation variants for the schedule transitions.
    const variants = {
        initial: {
            opacity: 0,
            x: animationDirection === 'left' ? -50 : 50,
            scale: 0.95,
        },
        animate: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
        exit: {
            opacity: 0,
            x: animationDirection === 'left' ? 50 : -50,
            scale: 0.95,
            transition: { duration: 0.5, ease: 'easeIn' },
        },
    };

    return (
        <div className="working-hours-info">
            <div className="working-hours-selector">
                <button
                    className={`${
                        activeGroup === 'monday-friday'
                            ? `active ${hasInteracted ? 'user-interacted' : 'initial'}`
                            : ''
                    }`}
                    onClick={() => handleGroupChange('monday-friday')}
                >
                    {t('about.workingHours.workingDays_short_1')}
                </button>
                <button
                    className={`${
                        activeGroup === 'saturday-sunday'
                            ? `active ${hasInteracted ? 'user-interacted' : 'initial'}`
                            : ''
                    }`}
                    onClick={() => handleGroupChange('saturday-sunday')}
                >
                    {t('about.workingHours.workingDays_short_2')}
                </button>
            </div>

            <div className="schedule-container">
                <AnimatePresence mode="wait">
                    {activeGroup === 'monday-friday' ? (
                        <motion.ul
                            key="weekdays"
                            className="working-hours-list"
                            initial={hasInteracted ? 'initial' : false}
                            animate="animate"
                            exit="exit"
                            variants={variants}
                            style={{ width: '100%' }}
                        >
                            <li className="working-day">{t('about.workingHours.workingDays_1')}</li>
                            <li className="working-time-container">
                <span className="working-time">
                  11<span className="time-colon">:</span>00
                  <br />
                  23<span className="time-colon">:</span>00
                </span>
                            </li>
                            <li className="working-day">{t('about.workingHours.workingDays_2')}</li>
                            <li className="working-time-container">
                <span className="working-time">
                  11<span className="time-colon">:</span>00
                  <br />
                  12<span className="time-colon">:</span>00
                </span>
                            </li>
                        </motion.ul>
                    ) : (
                        <motion.ul
                            key="weekends"
                            className="working-hours-list"
                            initial={hasInteracted ? 'initial' : false}
                            animate="animate"
                            exit="exit"
                            variants={variants}
                            style={{ width: '100%' }}
                        >
                            <li className="working-day">{t('about.workingHours.workingDays_3')}</li>
                            <li className="working-time-container">
                <span className="working-time">
                  12<span className="time-colon">:</span>00
                  <br />
                  00<span className="time-colon">:</span>00
                </span>
                            </li>
                            <li className="working-day">{t('about.workingHours.workingDays_4')}</li>
                            <li className="working-time-container">
                <span className="working-time">
                  12<span className="time-colon">:</span>00
                  <br />
                  22<span className="time-colon">:</span>00
                </span>
                            </li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default WorkingHoursInfo;