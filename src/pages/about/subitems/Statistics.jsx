import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

const StatisticItem = ({ end, symbol, label }) => (
    <div className="statistic">
    <span className="count">
      <CountUp end={end} duration={2} enableScrollSpy={true} scrollSpyOnce={true} />
    </span>
        <span className="symbol">{symbol}</span>
        <p>{label}</p>
    </div>
);

StatisticItem.propTypes = {
    end: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

const Statistics = () => {
    const { t } = useTranslation();
    return (
        <div className="statistics">
            <StatisticItem end={200} symbol="+" label={t('about.statistics.heading_customers')} />
            <StatisticItem end={400} symbol="+" label={t('about.statistics.heading_deliveries')} />
            <StatisticItem end={100} symbol="%" label={t('about.statistics.heading_feedback')} />
            <StatisticItem end={40} symbol="+" label={t('about.statistics.heading_awards')} />
        </div>
    );
};

export default Statistics;