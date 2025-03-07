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
                    {t('about.workingHours.workingDays_short_1')}
                </button>
                <button
                    className={activeGroup === 'saturday-sunday' ? 'active' : ''}
                    onClick={() => setActiveGroup('saturday-sunday')}
                >
                    {t('about.workingHours.workingDays_short_2')}
                </button>
            </div>
            {activeGroup === 'monday-friday' ? (
                <ul>
                    <li className="working-day">{t('about.workingHours.workingDays_1')}</li>
                    <li className="working-time">
                        {t('11')}
                        <span className="time-colon">:</span>
                        {t('00')}
                        <br />
                        {t('23')}
                        <span className="time-colon">:</span>
                        {t('00')}
                    </li>
                    <li className="working-day">{t('about.workingHours.workingDays_2')}</li>
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
                    <li className="working-day">{t('about.workingHours.workingDays_3')}</li>
                    <li className="working-time">
                        {t('12')}
                        <span className="time-colon">:</span>
                        {t('00')}
                        <br />
                        {t('00')}
                        <span className="time-colon">:</span>
                        {t('00')}
                    </li>
                    <li className="working-day">{t('about.workingHours.workingDays_4')}</li>
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