import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const WorkingHoursInfo = () => {
    const { t } = useTranslation();
    const [activeGroup, setActiveGroup] = useState('monday-friday');

    return (
        <div className="working-hours-info">
            <div className="working-hours-selector">
                <button
                    className={activeGroup === 'monday-friday' ? 'active' : ''}
                    onClick={() => setActiveGroup('monday-friday')}
                >
                    Mon - Fri
                </button>
                <button
                    className={activeGroup === 'saturday-sunday' ? 'active' : ''}
                    onClick={() => setActiveGroup('saturday-sunday')}
                >
                    Sat - Sun
                </button>
            </div>
            {activeGroup === 'monday-friday' ? (
                <ul>
                    <li className="working-day">{t('Monday to Thursday')}</li>
                    <li className="working-time">
                        {t('11')}
                        <span className="time-colon">:</span>
                        {t('00')}
                        <br />
                        {t('23')}
                        <span className="time-colon">:</span>
                        {t('00')}
                    </li>
                    <li className="working-day">{t('Friday')}</li>
                    <li className="working-time">
                        {t('11')}
                        <span className="time-colon">:</span>
                        {t('00')}
                        <br />
                        {t('00')}
                        <span className="time-colon">:</span>
                        {t('00')}
                    </li>
                </ul>
            ) : (
                <ul>
                    <li className="working-day">{t('Saturday')}</li>
                    <li className="working-time">
                        {t('12')}
                        <span className="time-colon">:</span>
                        {t('00')}
                        <br />
                        {t('00')}
                        <span className="time-colon">:</span>
                        {t('00')}
                    </li>
                    <li className="working-day">{t('Sunday')}</li>
                    <li className="working-time">
                        {t('12')}
                        <span className="time-colon">:</span>
                        {t('00')}
                        <br />
                        {t('22')}
                        <span className="time-colon">:</span>
                        {t('00')}
                    </li>
                </ul>
            )}
        </div>
    );
};

export default WorkingHoursInfo;